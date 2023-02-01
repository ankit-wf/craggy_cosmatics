import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import BackButton from '../components/BackButton';


const AddressesScreen = ({ navigation }) => {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
      <View style={styles.default_root}>
        <Image source={require('../../assets/images/dummy_location.png')} style={styles.default_img} />
      </View>

      <TouchableOpacity style={styles.add_address} onPress={() => navigation.navigate('AddAddress')}>
        <Text style={styles.btn_text}>+</Text>
      </TouchableOpacity>

    </View>
  )
}

export default AddressesScreen

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
  },
  mycartText: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 18,
    color: '#333333',
    paddingTop: 13
  },
  addressText: {
    fontSize: 16,
    alignSelf: 'center',
    lineHeight: 22,
    paddingTop: '5%',
    fontWeight: '300'
  },
  AddressBtnRoot: {
    width: '90%',
    alignSelf: 'center',
  },
  AddressBtn: {
    fontWeight: '400',
    fontSize: 22,
    paddingTop: 20
  },
  billingRoot: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  AddBtn: {
    color: '#cc933b',
    fontWeight: '400',
    fontSize: 20,
    paddingTop: 20
  },
  BillingaddressText: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: '300',
    paddingTop: '2%',
  },
  iconStyle: {
    marginTop: 22,
    color: 'blue',
    marginLeft: 10
  },
  default_root: {
    height: 250,
    width: "100%",
  },
  default_img: {
    height: '100%',
    width: '100%'
  },
  add_address: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginTop: '20%',
    marginRight: 20,
    alignSelf: 'flex-end',
    backgroundColor: '#000',
    justifyContent: 'center'
  },
  btn_text: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 25
  }
})