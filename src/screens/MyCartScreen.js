import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, } from 'react-native'
import { Snackbar, Button } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import BackButton from '../components/BackButton'
import { Ionicons } from '@expo/vector-icons'
import { useSelector, useDispatch } from 'react-redux';
import { submitActions } from '../store/dataSlice'
import { SkeletonContainer } from 'react-native-dynamic-skeletons';

const MyCartScreen = ({ navigation, route }) => {
  const storeData = useSelector(state => state.cartData.cart);
  // console.log("adadadadda", storeData)
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const totalPrice = useRef()
  const totaloldPrice = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

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
  const Tprice = totalOldAmount();
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
        {/* <View style={{ marginTop: 10, marginLeft: '5%' }}> */}
        <BackButton goBack={navigation.goBack} />
        {/* </View> */}
        <View style={styles.searchImgRoot}>
          <Text style={styles.mycartText}>MY CART</Text>
        </View>

      </View>
      {storeData.length < 1 ?
        <Text style={styles.emptyCart}>This Cart Is Empty</Text>
        :
        <ScrollView>

          {storeData.map((i, e) => {
            return (
              <View key={e}>
                <View key={e} style={styles.dataRoot}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("productDetail", i.categoriesDetail_id)}
                    style={styles.dataImgRoot}
                  >
                    <SkeletonContainer isLoading={loading}>
                      <Image source={{ uri: i.images }} style={styles.dataImg} />
                    </SkeletonContainer>
                  </TouchableOpacity>

                  <SkeletonContainer isLoading={loading}>
                    <View style={styles.textRoot} >
                      <Text numberOfLines={2} style={styles.textDescription}>{i.description}</Text>
                    </View>
                  </SkeletonContainer>

                  <View>
                    <SkeletonContainer isLoading={loading}>
                      <Ionicons
                        name="close-outline"
                        color={'black'}
                        size={20}
                        style={{ alignSelf: 'flex-end' }}
                        onPress={() => removeHandler(e)}
                      />
                    </SkeletonContainer>

                    <SkeletonContainer isLoading={loading}>
                      <View style={styles.buttonRoot}>
                        <TouchableOpacity onPress={() => subOne(e, i.quantity)} style={(i.quantity < 1) ? styles.blackButton : styles.whiteButton} >
                          <Text style={styles.blackText}>-</Text>
                        </TouchableOpacity>

                        <Text style={styles.blackText}>{i.quantity}</Text>

                        <TouchableOpacity onPress={() => addOne(e, i.quantity)} style={(i.quantity >= 1) ? styles.blackButton : styles.whiteButton} >
                          <Text style={(i.quantity >= 1) ? styles.whiteText : styles.blackText} >+</Text>
                        </TouchableOpacity>
                      </View>
                    </SkeletonContainer>

                  </View>
                  <SkeletonContainer isLoading={loading}>
                    <View style={styles.textPriceRoot} key={e}>
                      <Text style={styles.oldprice}>₹{totaloldPrice.current = i.price * i.quantity}</Text>
                      <Text style={styles.slace} > / </Text>
                      <Text style={styles.price}>₹{totalPrice.current = i.oldprice * i.quantity}</Text>
                    </View>
                  </SkeletonContainer>

                </View>

                <View style={styles.baseLine}></View>
              </View>
            )
            // }
          })}

          <SkeletonContainer isLoading={loading}>
            <TouchableOpacity style={styles.TextInputRoot} onPress={() => navigation.navigate('coupan')}>
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
          </SkeletonContainer>
          <SkeletonContainer isLoading={loading}>
            <View style={styles.TextInputRoot2} >
              <Text style={styles.price_summary}>Price Summary</Text>
            </View>
          </SkeletonContainer>

          <View style={styles.totalRoot}>
            <SkeletonContainer isLoading={loading}>
              <View style={styles.subtotalRoot}>
                <Text style={styles.subtotal}>Order Total</Text>
                <Text styles={styles.total}>₹{totalOldAmount()}</Text>
              </View>
            </SkeletonContainer>
            <SkeletonContainer isLoading={loading}>
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
                  <View style={{ flexDirection: 'row' }}>
                    {Tprice < 499 ?
                      <Text style={styles.free_price}>₹{fee}</Text> :
                      <Text style={styles.total}> Free</Text>
                    }
                  </View>
                </View>
              </View>
            </SkeletonContainer>


            <SkeletonContainer isLoading={loading}>
              <View style={styles.subtotalRoot}>
                <Text style={styles.subtotal}>Promo Discount</Text>
                <Text style={styles.total}> n/a</Text>
              </View>
            </SkeletonContainer>
            <SkeletonContainer isLoading={loading}>
              <View style={styles.subtotalRoot}>
                <Text style={styles.maintotal}>Total</Text>
                {Tprice < 499 ?
                  <Text style={styles.mainprice}>₹{TAmount + fee}</Text>
                  : <Text style={styles.mainprice}>₹{TAmount}</Text>
                }
              </View>
            </SkeletonContainer>
          </View>

          <View style={styles.baseLine2} ></View>

          <View style={styles.checkoutbuttonRoot} >
            <SkeletonContainer isLoading={loading}>
              {Tprice < 499 ?
                <Button style={styles.checkoutButton} onPress={() => navigation.navigate('checkOut', { Tm: TAmount, fee: fee, Tp: Tprice })}>
                  <Text style={styles.checkoutText}>PROCEED TO CHECKOUT</Text>
                </Button>
                : <Button style={styles.checkoutButton} onPress={() => navigation.navigate('checkOut', { Tm: TAmount })}>
                  <Text style={styles.checkoutText}>PROCEED TO CHECKOUT</Text>
                </Button>
              }
            </SkeletonContainer>
            <SkeletonContainer isLoading={loading}>
              <Button style={styles.countinueButton} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.checkoutText}>CONTINUE SHOPPING</Text>
              </Button>
            </SkeletonContainer>
          </View>

        </ScrollView>
      }
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        duration={2000}
        style={styles.Snackbar_style}
      >
        <Text style={styles.Snackbar_text}>Shipping charges of Rs. 50.00 wil apply on order below Rs. 499.00</Text>
      </Snackbar>
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
    fontFamily: 'Raleway',
    lineHeight: 19,
    color: '#333333',
    paddingTop: 0
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
    width: '42%',
    // borderRadius: 15,
    // borderColor: 'blue',
    // borderWidth: 1,
    marginLeft: 5

  },
  textDescription: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Raleway',
    lineHeight: 17,
    paddingLeft: 15,
    paddingTop: 9
  },
  textPriceRoot: {
    height: 35,
    width: '41%',
    flexDirection: 'row',
    marginLeft: '-76.5%',
    marginTop: '16%',
    // borderColor: 'blue',
    // borderWidth: 1,
    paddingLeft: 15

  },
  price: {
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'Lato',
    lineHeight: 15

  },
  slace: {
    fontSize: 10,
    fontWeight: '300',
    fontFamily: 'Lato',
    lineHeight: 12,
    letterSpacing: 5
  },
  oldprice: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Lato',
    color: '#444444',
    textDecorationLine: 'line-through',
    lineHeight: 17
  },
  free_price: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Lato',
    color: '#444444',
    lineHeight: 17
  },
  oldprice1: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Lato',
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
    fontFamily: 'Lato',
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
    fontFamily: 'Raleway',
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
    fontFamily: 'Raleway',
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
  // Snackbar_text: {
  //   color: '#fff',
  //   fontSize: 16,
  //   textAlign: 'center'
  // },
  subtotalRoot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 35,
    marginTop: '3%'
  },
  subtotal: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Raleway',
    lineHeight: 17
  },
  total: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Lato',
    lineHeight: 17
  },
  maintotal: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Raleway',
    lineHeight: 19
  },
  mainprice: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Lato',
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
    fontFamily: 'Raleway'
  },
  Snackbar_style: {
    width: "70%",
    height: 70,
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 3,
    bottom: 250,
    opacity: 0.7
  },
  Snackbar_text: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center'
  },

})