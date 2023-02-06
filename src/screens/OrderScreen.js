import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native'
import React from 'react'
import BackButton from '../components/BackButton'
import Heading from '../components/Heading'
const bestSellingProduct = require('../../Data/bestSellingProduct.json')
import { bestSellingProductStyle as bsP } from '../styles/bestSellingProductStyle'
import { useStyles } from '../styles/responsiveStyle'


const OrderScreen = ({ navigation }) => {
  const gs = useStyles();

  return (
    <View>
      {/* <View style={{ flexDirection: 'row', }}>
        <BackButton goBack={navigation.goBack} Color={'#666666'} />
        <Text style={styles.deliveryText}>MY ORDERS</Text>
      </View> */}
      {/* <View style={{ alignItems: 'center', marginTop: '40%' }}>
        <Text style={{ fontSize: 20 }}> Order List Empty</Text>
      </View> */}
      <TouchableOpacity style={styles.shopping_btn}>
        <Text style={styles.shopping_text}>Continue Shopping</Text>
      </TouchableOpacity>

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
    alignSelf: 'center',
    justifyContent: 'center'
  },
  shopping_text: {
    fontSize: 16,
    alignSelf: 'center',

  }
})