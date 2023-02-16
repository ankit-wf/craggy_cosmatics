import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import { Button, Snackbar } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import BackButton from '../components/BackButton'
import { Ionicons } from '@expo/vector-icons'
import { useSelector, useDispatch } from 'react-redux';
const imgData = require('../../imgData.json');
import { submitActions } from '../store/dataSlice'

const MyCartScreen = ({ navigation, route }) => {
  const storeData = useSelector(state => state.cartData.cart);
  // console.log("storeData", storeData);
  const dispatch = useDispatch();
  const totalPrice = useRef()
  const totaloldPrice = useRef()
  // console.log("TotalPrice", totalPrice)
  // const [test, setTest] = useState();

  // useEffect(() => {
  //   console.log("fffffff");
  //   imgData.map((e, i) => {
  //     // console.log("eeee", e.id)
  //     if (id === e.id) {
  //       let Data = [...reduxData, {
  //         images: e.images,
  //         id: e.id,
  //         description: e.description,
  //         price: e.price,
  //         oldprice: e.oldprice,
  //         quantity: e.quantity
  //       }];
  //       dispatch(submitActions.price(
  //         {
  //           cart: Data
  //         }
  //       ));
  //     }
  //   })
  // }, [])

  const iddd = route.params;

  // let Data = [...storeData, {
  //           description: description,
  //           categoriesDetail_id: product_id,
  //           images: image,
  //           oldprice: regular_price,
  //           price: sale_price,
  //           quantity: 1
  //       }];
  //       dispatch(submitActions.price(
  //           {
  //               cart: Data
  //           }
  //       ));
  // console.log("iddddddd", iddd)

  // useEffect(() => {
  //   {
  //     storeData.map((i) => {
  //       console.log("iiiii", i.quantity)
  //       if (iddd == i.categoriesDetail_id)
  //         dispatch(submitActions.quantity(
  //           {
  //             id: i.categoriesDetail_id,
  //             quantity: i.quantity + 1
  //           }
  //         ));
  //       // addOne();
  //     })
  //   }
  // }, [])

  const addOne = (id, quant) => {
    dispatch(submitActions.quantity(
      {
        id: id,
        quantity: quant + 1
      }
    ));
  }
  const subOne = (id, quant) => {
    if (quant > 1)
      dispatch(submitActions.quantity(
        {
          id: id,
          quantity: quant - 1
        }
      ));
  }

  const removeHandler = (index) => {
    dispatch(submitActions.remove(
      {
        index: index
      }
    ))
  }

  const totalAmount = () => {
    let sum = 0;
    for (let i = 0; i < storeData.length; i++) {
      sum = sum + storeData[i].oldprice * storeData[i].quantity
    }
    return sum;
  }
  const TAmount = totalAmount();
  // console.log("Amount", TAmount)

  const totalOldAmount = () => {
    let sum = 0;
    for (let i = 0; i < storeData.length; i++) {
      sum = sum + storeData[i].price * storeData[i].quantity
    }
    return sum;
  }
  // const Producthandler = () => {
  //   navigation.navigate('Product')
  // }
  const aaa = totalOldAmount();
  const fee = 50;
  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => {
    setVisible(!visible);
  }
  const onDismissSnackBar = () => {
    setVisible(false);
  }
  return (
    <View >

      <View style={styles.searchRoot}>
        <View style={{ marginTop: 10, marginLeft: '2%' }}>
          <BackButton goBack={navigation.goBack} Color={'#666666'} />
        </View>

        <View style={styles.searchImgRoot}>
          <Text style={styles.mycartText}>MY CART</Text>
        </View>

      </View>
      {storeData.length < 1 ?
        <Text style={styles.emptyCart}>This Cart Is Empty</Text>
        : <ScrollView>
          {storeData.map((i, e) => {
            return (
              <View key={e}>
                <View key={e} style={styles.dataRoot}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Product", i.categoriesDetail_id)}
                    style={styles.dataImgRoot}
                  >
                    <Image source={{ uri: i.images }} style={styles.dataImg} />
                  </TouchableOpacity>

                  <View style={styles.textRoot} >
                    <Text numberOfLines={2} style={styles.textDescription}>{i.description}</Text>
                  </View>

                  <View>
                    <Ionicons
                      name="close-outline"
                      color={'black'}
                      size={20}
                      style={{ alignSelf: 'flex-end' }}
                      onPress={() => removeHandler(e)}
                    />

                    <View style={styles.buttonRoot}>
                      <TouchableOpacity onPress={() => subOne(e, i.quantity)} style={(i.quantity < 1) ? styles.blackButton : styles.whiteButton} >
                        <Text style={styles.blackText}>-</Text>
                      </TouchableOpacity>


                      <Text style={styles.blackText}>{i.quantity}</Text>


                      <TouchableOpacity onPress={() => addOne(e, i.quantity)} style={(i.quantity >= 1) ? styles.blackButton : styles.whiteButton} >
                        <Text style={(i.quantity >= 1) ? styles.whiteText : styles.blackText} >+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.textPriceRoot} key={e}>
                    <Text style={styles.price}>₹{totalPrice.current = i.oldprice * i.quantity}</Text>
                    <Text style={styles.slace} > / </Text>
                    <Text style={styles.oldprice}>₹{totaloldPrice.current = i.price * i.quantity}</Text>
                  </View>

                </View>

                <View style={styles.baseLine}></View>
              </View>
            )
            // }
          })}

          <TouchableOpacity style={styles.TextInputRoot} onPress={() => navigation.navigate('offer_coupan')}>

            {/* <TextInput
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="promo code"
              placeholderTextColor={'#999999'}
              style={styles.textInputStyle}
            />
            <Button style={styles.promoButton} onPress={() => console.log('first')}>
              <Text style={styles.promoText}>APPLY PROMO</Text>
            </Button> */}

            <Ionicons
              name="ios-pricetag"
              color={'#C68625'}
              size={25}
              style={styles.coupon_icon}
            />
            <Text style={styles.coupon_text}>Use Coupons</Text>
          </TouchableOpacity>
          <View style={styles.TextInputRoot2} >
            <Text style={styles.price_summary}>Price Summary</Text>
          </View>

          <View style={styles.totalRoot}>
            <View style={styles.subtotalRoot}>
              <Text style={styles.subtotal}>Order Total</Text>
              <Text styles={styles.total}>₹{totalOldAmount()}</Text>
            </View>

            <View style={styles.subtotalRoot}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.subtotal}>Shipping</Text>
                <TouchableOpacity style={{ marginLeft: "5%" }}>
                  <Ionicons
                    name="information-circle-outline"
                    color={'blue'}
                    size={18}
                    onPress={onToggleSnackBar}
                  />
                </TouchableOpacity>

              </View>
              <View style={{ flexDirection: 'row' }}>
                {aaa < 499 ?
                  <Text style={styles.oldprice}>₹{fee}</Text> :
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.oldprice1}>₹{fee}</Text>
                    <Text style={styles.total}> Free</Text>
                  </View>
                }
              </View>
            </View>

            <Snackbar
              visible={visible}
              onDismiss={onDismissSnackBar}
              duration={2000}
            >
              <Text style={styles.Snackbar_text}>Shipping charges of Rs. 50.00 wil apply on order below Rs. 499.00</Text>
            </Snackbar>


            <View style={styles.subtotalRoot}>
              <Text style={styles.subtotal}>Promo Discount</Text>
              <Text style={styles.total}> +  n/a</Text>
            </View>

            <View style={styles.subtotalRoot}>
              <Text style={styles.maintotal}>Total</Text>
              {aaa < 499 ?
                <Text style={styles.mainprice}>₹{TAmount + fee}</Text>
                : <Text style={styles.mainprice}>₹{TAmount}</Text>
              }
            </View>
          </View>

          <View style={styles.baseLine2} ></View>

          <View style={styles.checkoutbuttonRoot} >
            <Button style={styles.checkoutButton} onPress={() => navigation.navigate('checkOut', TAmount)}>
              <Text style={styles.checkoutText}>PROCEED TO CHECKOUT</Text>
            </Button>
            <Button style={styles.countinueButton} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.checkoutText}>CONTINUE SHOPPING</Text>
            </Button>
          </View>

        </ScrollView>
      }
    </View>
  )
}

export default MyCartScreen;
const styles = StyleSheet.create({

  searchRoot: {
    // width: '95%',
    // alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // borderWidth: 1,
  },
  searchImgRoot: {
    marginTop: 35,
    marginRight: '35%',
    height: 50,
    width: '80%',
    // alignSelf: 'center'
  },
  mycartText: {
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Raleway600',
    lineHeight: 19,
    color: '#333333',
    paddingTop: 10
  },
  searchImg: {
    height: 50,
    width: 45,
    resizeMode: 'cover',
    borderRadius: 4
  },
  searchIconRoot: {
    marginTop: 20,
    width: '71%',
    marginLeft: '4%'
  },
  emptyCart: {
    fontSize: 25,
    textAlign: 'center'
    // flex: 1,
    // // justifyContent: 'center',
    // alignItems: 'center'
  },
  dataRoot: {
    flexDirection: 'row',
    width: '90%',
    height: 80,
    // borderColor: 'red', 
    // borderWidth: 1, 
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  dataImgRoot: {
    height: 80,
    width: '23%',
    borderRadius: 15
  },
  dataImg: {
    height: '100%',
    width: '100%',
    borderRadius: 15
  },
  centerTextRoot: {
    // borderColor: 'red', 
    // borderWidth: 1, 
    height: 80,
    marginLeft: 10
  },
  textRoot: {
    height: 48,
    width: '44%',
    // borderRadius: 15,
    // borderColor: 'blue',
    // borderWidth: 1,
  },
  textDescription: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Raleway500',
    lineHeight: 17,
    paddingLeft: 15,
    paddingTop: 9
  },
  textPriceRoot: {
    height: 35,
    width: '50%',
    flexDirection: 'row',
    marginLeft: '-72.5%',
    marginTop: '16%'

  },
  price: {
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'Lato700',
    lineHeight: 15

  },
  slace: {
    fontSize: 10,
    fontWeight: '300',
    fontFamily: 'Lato300',
    lineHeight: 12,
    letterSpacing: 5
  },
  oldprice: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Lato400',
    color: '#444444',
    // textDecorationLine: 'line-through',
    lineHeight: 17
  },
  oldprice1: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Lato400',
    color: '#444444',
    textDecorationLine: 'line-through',
    lineHeight: 17
  },
  buttonRoot: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: '#333333',
    borderWidth: 2,
    borderRadius: 50,
    height: 35,
    width: 90,
    marginLeft: '7%',
    marginTop: '12%'
  },


  blackButton: {
    backgroundColor: 'black',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 50,
    height: 20,
    width: 20,
    marginTop: 5,
    color: 'white'
  },
  whiteButton: {
    // backgroundColor: 'none',
    borderColor: 'transparent',
    borderWidth: 2,
    borderRadius: 50,
    height: 20,
    width: 20,
    marginTop: 5,
    color: 'black'
  },

  whiteText: {
    color: 'white',
    alignSelf: "center",
    marginTop: -2,
    fontWeight: '800',
  },
  blackText: {
    color: 'black',
    alignSelf: "center",
    marginTop: -2,
    fontWeight: '400',
    fontFamily: 'Lato400',
    fontSize: 12,
    lineHeight: 19
  },

  baseLine: {
    height: 1,
    width: '90%',
    backgroundColor: '#D9D9D9',
    // marginTop: 10,
    alignSelf: 'center'
    // marginLeft: '-78%',
  },
  TextInputRoot: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#fff',
    marginBottom: 10
  },
  coupon_icon: {
    marginLeft: '5%',
    padding: '3%'
  },
  coupon_text: {
    fontSize: 20,
    padding: '3%',
    marginLeft: '-4%'
  },
  TextInputRoot2: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9'
  },
  textInputStyle: {
    height: 45,
    width: '100%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000000',
    paddingLeft: 20,
    fontSize: 10,
    fontFamily: 'Raleway700',
    fontStyle: '700',
    lineHeight: 13,
    backgroundColor: '#E3E3E3'
  },
  price_summary: {
    fontSize: 20,
    fontWeight: '700',
    padding: '3%',
  },
  promoButton: {
    position: 'absolute',
    height: 35,
    width: 115,
    backgroundColor: '#222222',
    borderRadius: 20,
    marginLeft: '63%',
    margin: 5,

  },
  promoText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
    fontFamily: 'Raleway700',
    lineHeight: 17,
  },
  totalRoot: {
    height: 170,
    width: '85%',
    // borderWidth:1,
    // borderColor:'black',
    alignSelf: 'center',
    marginTop: '3%'
  },
  Snackbar_text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  },
  subtotalRoot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 35,
    marginTop: '3%'
  },
  subtotal: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Raleway500',
    lineHeight: 17
  },
  total: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Lato500',
    lineHeight: 17
  },
  maintotal: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Raleway700',
    lineHeight: 19
  },
  mainprice: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Lato700',
    lineHeight: 19
  },
  baseLine2: {
    height: 1,
    width: '100%',
    backgroundColor: '#DDDDDD',
    marginTop: 12
  },
  checkoutbuttonRoot: {
    height: 250,
    width: '100%',
    marginTop: 10
  },
  checkoutButton: {
    height: 45,
    width: '90%',
    backgroundColor: '#C68625',
    marginTop: 19,
    alignSelf: 'center',
    borderRadius: 20
  },
  countinueButton: {
    height: 45,
    width: '90%',
    backgroundColor: '#222222',
    marginTop: 19,
    alignSelf: 'center',
    borderRadius: 20
  },
  checkoutText: {
    fontSize: 10,
    color: '#fff',
    lineHeight: 25,
    fontWeight: '700',
    fontFamily: 'Raleway700'
  }

})