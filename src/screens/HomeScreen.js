import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Animated, Keyboard } from 'react-native'
import Swiper from 'react-native-swiper'
import Heading from '../components/Heading'
import { defaultStyles as ds } from '../styles/defaultStyle'
import { bestSellingProductStyle as bsP } from '../styles/bestSellingProductStyle'
import { letestProductStyle as lP } from '../styles/letestProductStyle'
import { wePromiseStyle as wP } from '../styles/wePromiseStyle'
import { categoriesStyle as cS } from '../styles/categoriesStyle'
import { submitActions } from '../store/dataSlice'
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header'
import { useStyles } from '../styles/responsiveStyle'
import axios from 'axios'
const imgData = require('../../imgData.json');
const bannerImg = require('../../Data/bannerSlider.json')
const bestSellingProduct = require('../../Data/bestSellingProduct.json')
const latestProductImg = require('../../Data/latestProduct.json')

const HomeScreen = ({ navigation }) => {
  const styles = useStyles();
  const reviewData = useSelector(state => state.reviewData.review);
  const storeData = useSelector(state => state.cartData.cart);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const bestSellingHolder = (description, sellingProduct_id, images, price, oldprice, quantity) => {
    let Data = [...storeData, {
      description: description,
      sellingProduct_id: sellingProduct_id,
      images: images,
      price: price,
      oldprice: oldprice,
      quantity: quantity
    }];
    dispatch(submitActions.price(
      {
        cart: Data
      }
    ));
    navigation.navigate('Cart', sellingProduct_id);
  }

  const SkinCareHandler = () => {
    navigation.navigate('ProductListing')
  }

  const openDrawer = () => {
    navigation.openDrawer();
  }
  const PageHandler = () => {
    navigation.navigate('SearchPage')
    Keyboard.dismiss()
  }
  const RewardHandler = () => {
    navigation.navigate('Reward')
  }

  const getCategory = () => {
    axios.get(
      `https://craggycosmetic.com/api/products/category/`,
      {
        headers: {
          // 'Content-Type': 'application/json',
          'consumer_key': '3b137de2b677819b965ddb7288bd73f62fc6c1f04a190678ca6e72fca3986629',
        }
      }
    ).then((res) => {
      if (res.data.status = "success") {
        setData(res.data.response)
      }
    })
    return;
  }

  useEffect(() => {
    getCategory()
  }, [])


  return (
    <View style={ds.appContainer}>
      <Header onPress={openDrawer} notification={PageHandler} Gift={RewardHandler} search={PageHandler} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      >
        {/* Banner Swiper  */}
        <View style={styles.swiperRoot}>
          <Swiper style={styles.wrapper} autoplay >
            {bannerImg.map((e, i) => {
              return (
                <View key={i} >
                  <Image source={{ uri: e.images }} style={{ height: '100%', width: '100%' }} />

                  <View style={styles.sliderContent}>
                    <View style={styles.bannerTextRoot}>
                      <Text style={styles.bannerText}>{e.line}</Text>
                    </View>

                    <View style={styles.bannerCode} >
                      <Image source={require('../../assets/CodeImg.png')} />
                    </View>
                    {/* 
                    <TouchableOpacity style={styles.bannerButton}>
                      <Text style={styles.bannerShopNow}>{e.buttonText}</Text>
                    </TouchableOpacity> */}
                  </View>
                </View>
              )
            })}
          </Swiper>
        </View>

        <View style={cS.categoriesRoot}>
          <Heading />
          <View style={cS.categoriesImgRoot}>
            <View style={cS.blankSpace} ></View>
            {data.map((data, index) => {
              if (data.count > 0)
                return (
                  <TouchableOpacity style={cS.touchableImg} onPress={() => { navigation.navigate('ProductListing', { id: data.term_id, name: data.name }) }} key={index}>
                    <View style={cS.skinImgRoot}>
                      <Image source={require('../../assets/Ellipse6.png')} style={cS.imgCenter} />
                    </View>
                    <View>
                      <Text style={cS.skinImgText}>{data.name}</Text>
                    </View>
                  </TouchableOpacity>
                )
            })}
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginBottom: 10 }}>
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
            {bestSellingProduct.map((e, i) => {
              return (
                <TouchableOpacity style={bsP.touchable} key={i} onPress={() => navigation.navigate('Product', e.sellingProduct_id)} >
                  <View style={bsP.imgRoot} >
                    <Image source={{ uri: e.images }} style={bsP.productImg} />
                  </View>

                  <View style={bsP.contentRoot}>
                    <View style={bsP.descriptionRoot}>
                      <Text style={bsP.descriptionText}>{e.description}</Text>
                    </View>

                    <View style={bsP.baseLine}></View>

                    <View style={bsP.priceRoot}>
                      <Text style={bsP.price}>₹{e.price}</Text>
                      <Text style={bsP.spaceRoot}>/ </Text>
                      <Text style={bsP.oldprice}>₹{e.oldprice}</Text>
                    </View>
                  </View>

                  {/* Buy Now Button  */}
                  <TouchableOpacity style={bsP.buyNowButton}
                    onPress={() => bestSellingHolder(e.description, e.sellingProduct_id, e.images, e.price, e.oldprice, e.quantity)}
                  >
                    <Text style={bsP.buttonText}>BUY NOW</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
        </View>

        {/* Latest Product  */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginBottom: 10 }}>
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

        {/* <Heading title=' latest product ' /> */}
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

        {/* We Promise  */}
        <View >
          <View style={styles.promiseOuterRoot}>
            <View style={styles.promiseRoot}>
              <Text style={styles.promiseText}>We Promise You</Text>
              <Image source={require('../../assets/divider.png')} />
            </View>

            <View style={styles.group115Root}>
              <View style={styles.oilIconRoot}>
                <View style={styles.iconRoot}>
                  <Image source={require('../../assets/hypoallergenic.png')} />
                </View>

                <View style={styles.essientialOilRoot}>
                  <Text style={styles.essientialOilText} >ESSIENTIALOILS</Text>
                </View>
              </View>

              <View style={styles.oilIconRoot}>
                <View style={styles.iconRoot}>
                  <Image source={require('../../assets/natural.png')} />
                </View>

                <View style={styles.essientialOilRoot}>
                  <Text style={styles.essientialOilText} >100% VEGAN</Text>
                </View>
              </View>

              <View style={styles.oilIconRoot}>
                <View style={styles.iconRoot}>
                  <Image source={require('../../assets/green.png')} />
                </View>

                <View style={styles.essientialOilRoot}>
                  <Text style={styles.essientialOilText} >SKIN FRIENDLY</Text>
                </View>
              </View>

              <View style={styles.oilIconRoot}>
                <View style={styles.iconRoot}>
                  <Image source={require('../../assets/gluten.png')} />
                </View>

                <View style={styles.essientialOilRoot}>
                  <Text style={styles.essientialOilText} >GLUTEN FREE</Text>
                </View>
              </View>

              <View style={styles.oilIconRoot}>
                <View style={styles.iconRoot}>
                  <Image source={require('../../assets/toxic.png')} />
                </View>

                <View style={styles.essientialOilRoot}>
                  <Text style={styles.essientialOilText} >NON   TOXIC</Text>
                </View>
              </View>

              <View style={styles.oilIconRoot}>
                <View style={styles.iconRoot}>
                  <Image source={require('../../assets/cruelty.png')} />
                </View>

                <View style={styles.essientialOilRoot}>
                  <Text style={styles.essientialOilText} >CRUELTY FREE</Text>
                </View>
              </View>

              <View style={styles.oilIconRoot}>
                <View style={styles.iconRoot}>
                  <Image source={require('../../assets/paraben.png')} />
                </View>

                <View style={styles.essientialOilRoot}>
                  <Text style={styles.essientialOilText} >NO HARSH CHEMICALS</Text>
                </View>
              </View>

              <View style={styles.oilIconRoot}>
                <View style={styles.iconRoot}>
                  <Image source={require('../../assets/industry.png')} />
                </View>

                <View style={styles.essientialOilRoot}>
                  <Text style={styles.essientialOilText} >GMP CERTIFIED</Text>
                </View>
              </View>

              <View style={styles.oilIconRoot}>
                <View style={styles.iconRoot}>
                  <Image source={require('../../assets/Group117.png')} />
                </View>

                <View style={styles.essientialOilRoot}>
                  <Text style={styles.essientialOilText} >PROPERLY TESTED</Text>
                </View>
              </View>

              <View style={styles.oilIconRoot}>
                <View style={styles.iconRoot}>
                  <Image source={require('../../assets/solidarity.png')} />
                </View>

                <View style={styles.essientialOilRoot}>
                  <Text style={styles.essientialOilText} >MADE WITH LOVE</Text>
                </View>
              </View>

            </View>

            {/* View all Product  */}
            <TouchableOpacity style={styles.ViewProduct}
              onPress={() => navigation.navigate('ViewProduct')}
            >
              <Text style={styles.viewProductText}>VIEW PRODUCT</Text>
            </TouchableOpacity>

          </View>
        </View>

      </ScrollView >
    </View >
  )
}

export default HomeScreen;