import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { FAB } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons'
import BackButton from '../components/BackButton';
import { useStyles } from '../styles/addResponsive';
import { useSelector, useDispatch } from 'react-redux';
import { loginActions } from '../store/UserSlice'

const AddressesScreen = ({ navigation }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const AddData = useSelector(state => state.userData.userAddress);
  // console.log("datataaaaa", AddData)
  const removeHandler = (index) => {

    dispatch(loginActions.remove(
      {
        index: index
      }
    ))
  }

  return (
    <View style={styles.root_container}>
      {/* <View style={styles.searchRoot}>
        <View >
          <BackButton goBack={navigation.goBack} Color={'#666666'} />
        </View>
        <View style={styles.searchImgRoot}>
          <Text style={styles.mycartText}>MANAGE   ADDRESS</Text>
        </View>
      </View> */}
      {/* <Text style={styles.addressText}>The following addresses will be used on the checkout page by default.</Text>

      <View style={styles.AddressBtnRoot}>
        <View style={styles.billingRoot}>
          <Text style={styles.AddressBtn}>Billing address</Text>
          <Text style={styles.AddBtn} onPress={() => navigation.navigate('billingaddressDetails')}>Add</Text>
        </View>
        <Text style={styles.BillingaddressText}> You have not set up this type of address yet.</Text>
      </View>

      <View style={styles.AddressBtnRoot}>
        <View style={styles.billingRoot}>
          <Text style={styles.AddressBtn}>Shipping address</Text>
          <Text style={styles.AddBtn} onPress={() => navigation.navigate('shippingaddressDetails')}>Add</Text>
        </View>
        <Text style={styles.BillingaddressText}> You have not set up this type of address yet.</Text>
      </View> */}

      {AddData.length < 1 ?
        <View>
          <View style={styles.root_defaultImg}>
            <Image source={(require('../../assets/images/dummy_location.png'))} resizeMode="cover" style={styles.img_center} />
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.root_text}>We can't seem to locate you</Text>
              <Text style={styles.root_text}>Please add in your address</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.add_Btn} onPress={() => navigation.navigate('addAddress')}>
            <Text style={styles.btn_text}> + </Text>
          </TouchableOpacity>
        </View>
        :
        <View >
          <FAB
            icon="plus"
            style={styles.fab}
            onPress={() => navigation.navigate('addAddress')}
          />
          {/* <TouchableOpacity onPress={() => navigation.navigate('addAddress')} style={styles.btn_btn}>
            <Text style={styles.add_Add}>+ Add</Text>
          </TouchableOpacity> */}

          {AddData.map((data, i) => {
            return (
              <View style={styles.default_address} key={i}>
                <View style={styles.default_address_inner}>
                  <View style={styles.default_color} >
                    <Text style={styles.default_text}>DEFAULT</Text>
                  </View>

                  <Text style={styles.default_Name}> {data.firstname} {data.Lastname} </Text>

                  <Text style={styles.add_text}> {data.flate} {data.Apartment} {data.City} {data.State} {data.Pincode} </Text>
                  <Text style={styles.add_text}>Phone : {data.phone} </Text>

                  <View style={styles.delete_root}>
                    <TouchableOpacity onPress={() => removeHandler(i)}>
                      <Text style={styles.add_delete}>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('editAddress', (i))}>
                      <Text style={styles.edit_text}>Edit</Text>
                    </TouchableOpacity>
                  </View>
                </View>

              </View>
            )
          })}
        </View>
      }

    </View>
  )
}

export default AddressesScreen

// const styles = StyleSheet.create({
  // root_container: {
  //   // flex: 1,
  //   marginTop: '10%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // root_defaultImg: {
  //   height: 300,
  //   width: '100%',
  //   alignSelf: 'center',
  //   marginTop: '10%'
  //   // flex: 1,
  //   // justifyContent: 'center',
  // },

  // add_Btn: {
  //   height: 60,
  //   width: 60,
  //   backgroundColor: '#000',
  //   borderRadius: 50,
  //   alignSelf: 'flex-end',
  //   // marginRight: 20,
  //   marginTop: '40%',
  //   justifyContent: 'center',
  // },
  // btn_text: {
  //   color: '#fff',
  //   alignSelf: 'center',
  //   fontSize: 30
  // },
  // default_address: {
  //   height: 200,
  //   width: 300,
  //   backgroundColor: '#fff',
  //   borderRadius: 10,
  //   marginTop: 10
  // },
  // btn_btn: {
  //   height: 70,
  //   width: 70,
  //   backgroundColor: 'red',
  //   borderRadius: 30,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   position: 'absolute',
  //   // right: "-20%",
  //   // bottom: 0,
  // },
  // add_Add: {
  //   fontSize: 18,
  //   color: '#fff',
  //   // alignSelf: 'flex-end',
  //   // paddingRight: 15
  //   // alignItems: 'center'
  // },
  // default_color: {
  //   height: 30,
  //   width: 80,
  //   backgroundColor: 'red',
  //   borderRadius: 8,
  //   justifyContent: 'center',
  //   marginTop: 15,
  //   // alignSelf: 'flex-end'
  // },
  // default_Name: {
  //   color: '#000',
  //   paddingTop: 8,
  //   fontSize: 16,
  //   fontWeight: '700'
  // },
  // add_text: {
  //   color: '#000',
  //   paddingTop: 8,
  //   fontSize: 15,
  //   fontWeight: '400',
  //   // paddingHorizontal: 10
  // },
  // add_delete: {
  //   color: 'red',
  //   paddingTop: 8,
  //   fontSize: 15,
  //   fontWeight: '400',
  //   paddingRight: 20
  // },
  // fab: {
  //   position: 'absolute',
  //   zIndex: 999,
  //   // margin: 16,
  //   top: "-15%",
  //   right: 0,
  //   // bottom: 0,
  // },
  // searchRoot: {
  //   // width: '95%',
  //   // alignSelf: 'center',
  //   justifyContent: 'space-between',
  //   flexDirection: 'row',
  //   // borderWidth: 1,
  // },
  // searchImgRoot: {
  //   marginTop: 35,
  //   marginRight: '35%',
  //   height: 50,
  //   width: '80%',
  // },
  // mycartText: {
  //   alignSelf: 'center',
  //   fontSize: 16,
  //   fontWeight: '600',
  //   lineHeight: 18,
  //   color: '#333333',
  //   paddingTop: 13
  // },
  // addressText: {
  //   fontSize: 16,
  //   alignSelf: 'center',
  //   lineHeight: 22,
  //   paddingTop: '5%',
  //   fontWeight: '300'
  // },
  // AddressBtnRoot: {
  //   width: '90%',
  //   alignSelf: 'center',
  // },
  // AddressBtn: {
  //   fontWeight: '400',
  //   fontSize: 22,
  //   paddingTop: 20
  // },
  // billingRoot: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between'
  // },
  // AddBtn: {
  //   color: '#cc933b',
  //   fontWeight: '400',
  //   fontSize: 20,
  //   paddingTop: 20
  // },
  // BillingaddressText: {
  //   fontSize: 16,
  //   alignSelf: 'center',
  //   fontWeight: '300',
  //   paddingTop: '2%',
  // },
  // iconStyle: {
  //   marginTop: 22,
  //   color: 'blue',
  //   marginLeft: 10
  // },

// })