import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, Keyboard, RefreshControl, StyleSheet, Pressable } from 'react-native'
import Swiper from 'react-native-swiper'
import Heading from '../components/Heading'
import Header from '../components/Header'
import axios from 'axios'
import { List, Snackbar } from 'react-native-paper';
import FooterImage from '../components/FooterImage'
import { defaultStyles as ds } from '../styles/defaultStyle'
import { bestSellingProductStyle as bsP } from '../styles/bestSellingProductStyle'
import { categoriesStyle as cS } from '../styles/categoriesStyle'
import { submitActions } from '../store/dataSlice'
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from '../styles/homeResponsive'
import { SkeletonContainer } from 'react-native-dynamic-skeletons';
import SocialIcon from '../components/SocialIcon'
import { HOME_API, CONSUMER_KEY } from "@env";

const HomeScreen = ({ navigation }) => {
  // const userAdd = useSelector(state => state.userData.userAddress);
  // const d = userAdd.find((el) =>
  //   el.City === "mohali"
  //   // el.id == ab.id
  //   // console.log("jjhhgg", el)
  // )

  // if (d) {
  //   d.State = "PB"
  //   // setQuant(!quant)
  // }
  // console.log("jjjjjj", userAdd)
  let bs = "BestSellers";
  let lp = "latest Product";
  const styles = useStyles();
  const dispatch = useDispatch();
  const imageFooter = FooterImage();
  const cartData = useSelector(state => state.cartData.cart);
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [bannerImage, setBannerImage] = useState([]);
  const [bestSelling, setBestSelling] = useState([]);
  const [category, setCategory] = useState([]);
  const [latestProduct, setLatestProduct] = useState([]);
  // console.log("hghhghhh", latestProduct)
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 5000);
  }, []);

  useEffect(() => {
    axios.get(
      HOME_API,
      {
        headers: {
          'consumer_key': CONSUMER_KEY,
        }
      }
    ).then((res) => {
      // console.log("resss", res.data.best_selling_products)
      setBannerImage(res.data.banner_image)
      setBestSelling(res.data.best_selling_products)
      setCategory(res.data.category)
      setLatestProduct(res.data.latest_products)
      setTimeout(() => {
        setLoading(false)
      },);
    },);
  }, [])

  // const Category_Api = () => {
  //   axios.get(
  //     `https://craggycosmetic.com/api/products/category/`,
  //     {
  //       headers: {
  //         'consumer_key': '3b137de2b677819b965ddb7288bd73f62fc6c1f04a190678ca6e72fca3986629',
  //       }
  //     }
  //   ).then((res) => {
  //     if (res.data.status = "success") {
  //       setData(res.data.response)
  //     }
  //   })
  // }

  // const BestSelling_Api = () => {
  //   axios.get(
  //     `https://craggycosmetic.com/api/products/best-selling/`,
  //     {
  //       headers: {
  //         'consumer_key': '3b137de2b677819b965ddb7288bd73f62fc6c1f04a190678ca6e72fca3986629',
  //       }
  //     }
  //   ).then((res) => {
  //     // console.log("resss", res.data)
  //     if (res.data.status = "success") {
  //       setBestData(res.data.response)
  //       // setTimeout(() => {
  //       //   setLoading(false)
  //       // }, 2000);
  //     }
  //   })
  // }
  const onDismissSnackBar = () => setVisible(false);
  const CartHolder = (product_title, product_id, image, regular_price, sale_price,) => {
    if (cartData.length !== 0) {
      let ss = false;
      cartData.find(data => {
        if (data.categoriesDetail_id == product_id) {
          ss = true;
        }
      })
      if (ss == true) {
        // console.log("already in list")
        setVisible(!visible);
      }
      else {
        let Data = [...cartData, {
          description: product_title,
          categoriesDetail_id: product_id,
          images: image,
          price: regular_price,
          oldprice: sale_price,
          quantity: 1
        }];
        dispatch(submitActions.price({ cart: Data }));
        navigation.navigate("cart");
      }
    }
    else {
      let Data = [...cartData, {
        description: product_title,
        categoriesDetail_id: product_id,
        images: image,
        price: regular_price,
        oldprice: sale_price,
        quantity: 1
      }];
      dispatch(submitActions.price({ cart: Data }));
      navigation.navigate("cart");
    }
  }
  const SearchHandler = () => {
    navigation.navigate('searchPage')
    Keyboard.dismiss()
  }

  return (
    <View style={styles.appContainer}>
      {/* <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        duration={2000}
        style={styles.Snackbar_style}
      >
        <Text style={styles.Snackbar_text}>Item is already added to the cart. Please Checkout..</Text>
      </Snackbar> */}
      <Header search={SearchHandler} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Banner Swiper  */}
        <SkeletonContainer isLoading={loading}>
          <View style={styles.swiperRoot}>
            <Swiper style={styles.wrapper} autoplay  >
              {bannerImage.map((e, i) => {
                return (
                  <View key={i} >
                    <Image source={{ uri: e }} style={styles.bannerImgHight} />
                  </View>
                )
              })}
            </Swiper>
          </View>
        </SkeletonContainer>

        {/* <catgories /> */}
        <SkeletonContainer isLoading={loading} >
          <View style={styles.categories_img_Root}>
            <View style={styles.categories_inner_img_Root}>
              <ScrollView horizontal>
                {category.map((data, i) => {
                  // console.log("dataaa", data)
                  if (data.cat_name != "Uncategorized")
                    return (
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => { navigation.navigate('productListing', { id: data.id, name: data.cat_name }) }} key={i}
                        style={styles.category_root_img}
                      >
                        <View style={styles.skinImgRoot}>
                          <Image source={{ uri: data.app_circle_image }} style={styles.imgCenter} />
                        </View>
                        <View key={i}>
                          <Text style={styles.skinImgText}>{data.cat_name}</Text>
                        </View>
                      </TouchableOpacity>
                    )
                })}
              </ScrollView>
            </View>
          </View>
        </SkeletonContainer>

        <SkeletonContainer isLoading={loading}>
          <View style={styles.bestSellerRoot}>
            <Heading title=' best selling ' />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.viewLatestProduct}
              onPress={() => { navigation.navigate('productListing', { name: bs }) }}
            >
              <Text style={styles.latestProductText}>
                View All
              </Text>
            </TouchableOpacity>
          </View>
        </SkeletonContainer>

        <SkeletonContainer isLoading={loading} >
          <View style={styles.productsListRoot}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
              {bestSelling.map((e, i) => {
                const rp = e.regular_price;
                const sp = e.sale_price;
                const regular_price = Number(rp).toFixed(2);
                const sale_price = Number(sp).toFixed(2);
                // console.log(result);
                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.best_touchable}
                    onPress={() => navigation.navigate('productDetail', e.product_id)}
                    key={i}
                  >
                    <View style={styles.imgRoot} >
                      <Image source={{ uri: e.image }} style={styles.productImg} />
                    </View>
                    <View style={styles.contentRoot}>
                      <View style={styles.descriptionRoot}>
                        <Text style={styles.descriptionText}>{e.product_title}</Text>
                      </View>
                      <View style={styles.baseLine}></View>
                      <View style={styles.priceRoot}>
                        <Text style={styles.oldprice}>₹{regular_price}</Text>
                        <Text style={styles.spaceRoot}></Text>
                        <Text style={styles.price}>₹{sale_price}</Text>

                      </View>
                    </View>

                    {/* Buy Now Button  */}
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.buyNowButton}
                      onPress={() => CartHolder(e.product_title, e.product_id, e.image, e.sale_price, e.regular_price)}
                    >
                      <Text style={styles.buttonText}>BUY NOW</Text>
                    </TouchableOpacity>

                  </TouchableOpacity>
                )
              })}
            </ScrollView>
          </View>
        </SkeletonContainer>

        {/* Latest Product  */}
        <SkeletonContainer isLoading={loading} >
          <View style={styles.bestSellerRoot}>
            <Heading title=' latest product ' />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.viewLatestProduct}
              onPress={() => navigation.navigate("productListing", { name: lp })}
            >
              <Text style={styles.latestProductText}>
                View All
              </Text>
            </TouchableOpacity>
          </View>
        </SkeletonContainer>

        <View style={styles.productsListRoot}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {latestProduct.map((e, i) => {
              const rp = e.regular_price;
              const sp = e.sale_price;
              const regular_price = Number(rp).toFixed(2);
              const sale_price = Number(sp).toFixed(2);
              return (
                <SkeletonContainer isLoading={loading} key={i} >
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.best_touchable}
                    onPress={() => navigation.navigate('productDetail', e.product_id)}
                    key={i}
                  >
                    <View style={styles.imgRoot} >
                      <Image source={{ uri: e.image }} style={styles.productImg} />
                    </View>

                    <View style={styles.contentRoot}>
                      <View style={styles.descriptionRoot}>
                        <Text style={styles.descriptionText}>{e.product_title}</Text>
                      </View>

                      <View style={styles.baseLine}></View>

                      <View style={styles.priceRoot}>
                        <Text style={styles.oldprice}>₹{regular_price}</Text>
                        <Text style={styles.spaceRoot}></Text>
                        <Text style={styles.price}>₹{sale_price}</Text>
                      </View>
                    </View>

                    {/* Buy Now Button  */}
                    <TouchableOpacity activeOpacity={0.8} style={styles.buyNowButton}
                      onPress={() => CartHolder(e.product_title, e.product_id, e.image, e.sale_price, e.regular_price)}
                    >
                      <Text style={styles.buttonText}>BUY NOW</Text>
                    </TouchableOpacity>
                  </TouchableOpacity>
                </SkeletonContainer>
              )

            })}
          </ScrollView>
        </View>

        {/* Footer Banner  */}
        <View style={styles.footerBannerRoot}>
          <SkeletonContainer isLoading={loading} >
            <Image source={require('../../assets/footer_banner.png')} style={styles.footerBannerImage} />
          </SkeletonContainer>
        </View>

        {/* We Promise You */}
        <View >
          <View style={styles.promiseOuterRoot}>
            <SkeletonContainer isLoading={loading} >
              <View style={styles.promiseRoot}>
                <Text style={styles.promiseText}>We Promise You</Text>
                <Image source={require('../../assets/divider.png')} />
              </View>
            </SkeletonContainer>

            <SkeletonContainer isLoading={loading} >
              <View style={styles.group115Root}>
                {imageFooter.map((img, i) => {
                  return (
                    <View style={styles.oilIconRoot} key={i}>
                      <View style={styles.iconRoot} >
                        <Image source={img.image} />
                      </View>

                      <View style={styles.essientialOilRoot}>
                        <Text style={styles.essientialOilText}> {img.text} </Text>
                      </View>
                    </View>
                  )
                })}
              </View>
            </SkeletonContainer>

            {/* View all Product  */}
            <SkeletonContainer isLoading={loading} >
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.ViewProduct}
                onPress={() => navigation.navigate('viewProduct')} >
                <Text style={styles.viewProductText}>VIEW ALL PRODUCT</Text>
              </TouchableOpacity>
            </SkeletonContainer>
          </View>
        </View>
      </ScrollView >
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        duration={2000}
        style={styles.Snackbar_style}
      >
        <Text style={styles.Snackbar_text}>Item is already added to the cart. Please Checkout..</Text>
      </Snackbar>
    </View >
  )
}
export default HomeScreen;
// const styles1 = StyleSheet.create({
//   bannerImgHight: {
//     height: '100%',
//     width: '100%'
//   },
//   category_root: {
//     height: 80,
//     width: 80,
//     marginLeft: 8,
//     marginTop: 30,
//     borderRadius: 50,
//     borderWidth: 1,
//     borderColor: '#fff'
//   },
//   categoriesHeight: {
//     height: 100,
//     width: 80,
//     marginLeft: 8,
//     marginTop: 30
//   },
//   // bestSellerRoot: {
//   //   height: 50,
//   //   width: '100%',
//   //   flexDirection: 'row',
//   //   justifyContent: 'space-between',
//   //   marginTop: 20,
//   //   marginBottom: 10,
//   // }
// })