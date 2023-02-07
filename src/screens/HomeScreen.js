import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, Keyboard, RefreshControl, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'
import Heading from '../components/Heading'
import Header from '../components/Header'
import axios from 'axios'
import BackgroundImageService from '../components/CatImage'
import FooterImage from '../components/FooterImage'
import { defaultStyles as ds } from '../styles/defaultStyle'
import { bestSellingProductStyle as bsP } from '../styles/bestSellingProductStyle'
import { letestProductStyle as lP } from '../styles/letestProductStyle'
import { categoriesStyle as cS } from '../styles/categoriesStyle'
import { submitActions } from '../store/dataSlice'
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from '../styles/responsiveStyle'

const bannerImg = require('../../Data/bannerSlider.json')
const bestSellingProduct = require('../../Data/bestSellingProduct.json')
const latestProductImg = require('../../Data/latestProduct.json')

const HomeScreen = ({ navigation }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const imageFooter = FooterImage();
  const reviewData = useSelector(state => state.reviewData.review);
  const storeData = useSelector(state => state.cartData.cart);
  const imageData = BackgroundImageService();
  const [data, setData] = useState([])
  const [bestData, setBestData] = useState([])

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []); StyleSheet

  useEffect(() => {
    axios.get(
      `https://craggycosmetic.com/api/products/category/`,
      {
        headers: {
          'consumer_key': '3b137de2b677819b965ddb7288bd73f62fc6c1f04a190678ca6e72fca3986629',
        }
      }
    ).then((res) => {
      if (res.data.status = "success") {
        setData(res.data.response)
      }
    }),

      axios.get(
        `https://craggycosmetic.com/api/products/best-selling/`,
        {
          headers: {
            'consumer_key': '3b137de2b677819b965ddb7288bd73f62fc6c1f04a190678ca6e72fca3986629',
          }
        }
      ).then((res) => {
        // console.log("resss", res.data)
        if (res.data.status = "success") {
          setBestData(res.data.response)
        }
      })
  }, [])

  const bestSellingHolder = (description, product_id, image, sale_price, regular_price,) => {
    let Data = [...storeData, {
      description: description,
      sellingProduct_id: product_id,
      images: image,
      oldprice: sale_price,
      price: regular_price,
      quantity: 1
    }];
    dispatch(submitActions.price(
      {
        cart: Data
      }
    ));
    navigation.navigate('Cart', product_id);
  }
  const notification = () => {
    navigation.navigate('NotificationScreen')
  }
  const openDrawer = () => {
    navigation.openDrawer();
  }
  const searchHandler = () => {
    navigation.navigate('SearchPage')
    Keyboard.dismiss()
  }
  const RewardHandler = () => {
    navigation.navigate('Reward')
  }

  return (
    <View style={ds.appContainer}>
      <Header onPress={openDrawer} notification={notification} Gift={RewardHandler} search={searchHandler} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Banner Swiper  */}
        <View style={styles.swiperRoot}>
          <Swiper style={styles.wrapper} autoplay >
            {bannerImg.map((e, i) => {
              return (
                <View key={i} >
                  <Image source={{ uri: e.images }} style={styles1.bannerImgHight} />

                  <View style={styles.sliderContent}>
                    <View style={styles.bannerTextRoot}>
                      <Text style={styles.bannerText}>{e.line}</Text>
                    </View>

                    <View style={styles.bannerCode} >
                      <Image source={require('../../assets/CodeImg.png')} />
                    </View>

                    <TouchableOpacity style={styles.bannerButton}>
                      <Text style={styles.bannerShopNow}>{e.buttonText}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )
            })}
          </Swiper>
        </View>

        {/* <catgories /> */}
        <View style={cS.categoriesRoot}>
          {data.map((data, i) => {
            // if (data.count > 0)
            return (
              <TouchableOpacity
                onPress={() => { navigation.navigate('ProductListing', { id: data.term_id, name: data.name }) }} key={i}
                style={styles1.categoriesHeight}
              >
                {imageData.map((item, id) => {
                  return (
                    (item.name === data.slug) &&
                    <View style={cS.skinImgRoot} key={id}>
                      <Image source={item.image} style={cS.imgCenter} />
                    </View>
                  )
                })}
                <View key={i}>
                  <Text style={cS.skinImgText}>{data.name}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </View>

        <View style={styles1.bestSellerRoot}>
          <Heading title=' best selling ' />

          <TouchableOpacity
            style={styles.viewLatestProduct}
            onPress={() => navigation.navigate("AllBestseller")}
          >
            <Text style={styles.latestProductText}>
              View All
            </Text>
          </TouchableOpacity>
        </View>

        <View style={bsP.productsListRoot}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            {bestData.map((e, i) => {
              // console.log("eeeeee", e.category)
              return (
                <TouchableOpacity style={bsP.touchable} key={i} onPress={() => navigation.navigate('Product', e.product_id)} >
                  <View style={bsP.imgRoot} >
                    <Image source={{ uri: e.image }} style={bsP.productImg} />
                  </View>

                  <View style={bsP.contentRoot}>
                    <View style={bsP.descriptionRoot}>
                      <Text style={bsP.descriptionText}>{e.description}</Text>
                    </View>

                    <View style={bsP.baseLine}></View>

                    <View style={bsP.priceRoot}>
                      <Text style={bsP.price}>₹{e.sale_price}</Text>
                      <Text style={bsP.spaceRoot}>/ </Text>
                      <Text style={bsP.oldprice}>₹{e.regular_price}</Text>
                    </View>
                  </View>

                  {/* Buy Now Button  */}
                  <TouchableOpacity style={bsP.buyNowButton}
                    onPress={() => bestSellingHolder(e.description, e.product_id, e.image, e.sale_price, e.regular_price)}
                  >
                    <Text style={bsP.buttonText}>BUY NOW</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
        </View>

        {/* Latest Product  */}
        <View style={styles1.bestSellerRoot}>
          <Heading title=' latest product ' />

          <TouchableOpacity
            style={styles.viewLatestProduct}
            onPress={() => navigation.navigate("AllLatestProduct")}
          >
            <Text style={styles.latestProductText}>
              View All
            </Text>
          </TouchableOpacity>
        </View>

        <View style={lP.productsListRoot}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {latestProductImg.map((e, i) => {
              return (
                <TouchableOpacity style={lP.touchable} key={i} onPress={() => navigation.navigate('Product', e.latestProduct_id)}>
                  <View style={lP.imgRoot} >
                    <Image source={{ uri: e.images }} style={lP.productImg} />
                  </View>

                  <View style={lP.contentRoot}>
                    <View style={lP.descriptionRoot}>
                      <Text style={lP.descriptionText}>{e.description}</Text>
                    </View>

                    <View style={lP.baseLine}></View>

                    <View style={lP.priceRoot}>
                      <Text style={lP.price}>₹{e.price}</Text>
                      <Text style={lP.spaceRoot}>/ </Text>
                      <Text style={lP.oldprice}>₹{e.oldprice}</Text>
                    </View>
                  </View>

                  {/* Buy Now Button  */}
                  <TouchableOpacity style={lP.buyNowButton}
                    onPress={() => bestSellingHolder(e.description, e.sellingProduct_id, e.images, e.price, e.oldprice, e.quantity)}
                  >
                    <Text style={lP.buttonText}>BUY NOW</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
        </View>

        {/* Footer Banner  */}
        <View style={styles.footerBannerRoot}>
          <Image source={require('../../assets/footer_banner.png')} style={styles.footerBannerImage} />
        </View>

        {/* We Promise You */}
        <View >
          <View style={styles.promiseOuterRoot}>
            <View style={styles.promiseRoot}>
              <Text style={styles.promiseText}>We Promise You</Text>
              <Image source={require('../../assets/divider.png')} />
            </View>

            <View style={styles.group115Root}>
              {imageFooter.map((img, i) => {
                return (
                  <View style={styles.oilIconRoot} key={i}>
                    <View style={styles.iconRoot} >
                      <Image source={img.image} />
                    </View>

                    <View style={styles.essientialOilRoot}>
                      <Text style={styles.essientialOilText} > {img.text} </Text>
                    </View>
                  </View>
                )
              })}
            </View>

            {/* View all Product  */}
            <TouchableOpacity style={styles.ViewProduct} onPress={() => navigation.navigate('ViewProduct')} >
              <Text style={styles.viewProductText}>VIEW ALL PRODUCT</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView >
    </View >
  )
}
export default HomeScreen;
const styles1 = StyleSheet.create({
  bannerImgHight: {
    height: '100%',
    width: '100%'
  },
  categoriesHeight: {
    height: 100,
    width: 80,
    marginLeft: 8,
    marginTop: 30
  },
  bestSellerRoot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10
  }
})