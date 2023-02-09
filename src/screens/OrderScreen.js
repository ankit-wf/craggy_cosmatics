import { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image, ActivityIndicator } from 'react-native'
import BackButton from '../components/BackButton'
import Heading from '../components/Heading'
const bestSellingProduct = require('../../Data/bestSellingProduct.json')
import { bestSellingProductStyle as bsP } from '../styles/bestSellingProductStyle'
import { useStyles } from '../styles/responsiveStyle'
import axios from 'axios'
import { submitActions } from '../store/dataSlice'
import { useSelector, useDispatch } from 'react-redux';


const OrderScreen = ({ navigation }) => {
  const gs = useStyles();
  const [bestData, setBestData] = useState([])
  const storeData = useSelector(state => state.cartData.cart);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);



  useEffect(() => {
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
        setLoading(false)
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

  return (

    <View style={{ flex: 1, justifyContent: 'space-around' }} >

      {/* <View style={{ flexDirection: 'row', }}>
        <BackButton goBack={navigation.goBack} Color={'#666666'} />
        <Text style={styles.deliveryText}>MY ORDERS</Text>
      </View> */}
      {/* <View style={{ alignItems: 'center', marginTop: '40%' }}>
        <Text style={{ fontSize: 20 }}> Order List Empty</Text>
      </View> */}
      {/* <View>
        <TouchableOpacity style={styles.shopping_btn}>
          <Text style={styles.shopping_text}>Continue Shopping</Text>
        </TouchableOpacity>
      </View> */}

      <View>
        {
          loading ?
            <View>
              <ActivityIndicator size="large" />
            </View>
            :
            <View>
              <Text style={{ fontSize: 18, fontWeight: '700', alignSelf: 'center', }}>No orders placed</Text>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, marginBottom: 10, }}>
                <Heading title=' best selling ' />

                <TouchableOpacity
                  style={gs.viewLatestProduct}
                  onPress={() => navigation.navigate("AllBestseller")}
                >
                  <Text style={gs.latestProductText} >
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


              <TouchableOpacity style={styles.shopping_btn} onPress={() => navigation.navigate('Home')} >
                <Text style={styles.shopping_text}>Continue Shopping</Text>
              </TouchableOpacity>

            </View>
        }
      </View>

    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
  deliveryText: {
    fontSize: 20,
    alignSelf: 'center',
    paddingTop: 35,
    paddingLeft: '25%'
  },
  shopping_btn: {
    height: 40,
    width: 150,
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#C68625',
    marginTop: 50
  },
  shopping_text: {
    fontSize: 16,
    alignSelf: 'center',
    color: '#fff',

  }
})