import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { FAB } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons'
import BackButton from '../components/BackButton';
import { useStyles } from '../styles/addResponsive';
import { useSelector, useDispatch } from 'react-redux';
import { loginActions } from '../store/UserSlice'

const AddressesScreen = ({ navigation }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  // const billingData = useSelector(state => state.userData.userAddress);
  // const shippingData = useSelector(state => state.userData.userShipping);
  const alldata = useSelector(state => state.userData.user_data)
  const [aaa, setAaa] = useState(alldata);

  // const billingData = alldata.billing_address;
  // const shippingData = alldata.shipping_address;
  // console.log("billing", billingData)
  // console.log("shipping", shippingData)
  console.log("alldata", alldata.billing_address.first_name == "")
  console.log("shipping_address", alldata.shipping_address.first_name == "")
  // console.log("billing", alldata.billing_address)
  // console.log("shipping_address", alldata.shipping_address)
  // const objectLength = Object.keys(alldata).length
  // console.log("fgsdhfghfs", objectLength)

  const removeHandler = (index) => {
    dispatch(loginActions.remove(
      {
        index: index
      }
    ))
  }

  return (
    <View style={styles.root_container}>
      <View>
        {alldata.billing_address.first_name == "" ?
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
          <View>
            <View style={styles.default_address} >
              <View style={styles.default_address_inner}>
                <Text style={styles.default_text}>Billing address</Text>
                <Text style={styles.default_Name}> {alldata.billing_address.first_name} {alldata.billing_address.last_name} </Text>
                <Text style={styles.add_text}> {alldata.billing_address.address_1} {alldata.billing_address.address_2} {alldata.billing_address.city} {alldata.billing_address.state} {alldata.billing_address.postcode} </Text>
                <Text style={styles.add_text}>Phone : {alldata.billing_address.phone} </Text>
                <View style={styles.delete_root}>
                  {/* <TouchableOpacity onPress={() => removeHandler(i)}>
                        <Text style={styles.add_delete}>Delete</Text>
                      </TouchableOpacity> */}
                  <TouchableOpacity onPress={() => navigation.navigate('editAddress', alldata.ID)}>
                    <Text style={styles.edit_text}>Edit</Text>
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          </View>
        }



        <View>
          {alldata.shipping_address.first_name == "" ?
            <View style={styles.default_address} >
              <View style={styles.default_address_inner}>
                <Text style={styles.default_text}>Shipping address</Text>

                <View style={{ marginTop: '20%', marginLeft: '25%' }}>
                  <Text style={styles.add_text}>Add Address </Text>
                </View>

              </View>
              <TouchableOpacity style={styles.add_Btn} onPress={() => navigation.navigate('shippingaddressDetails')}>
                <Text style={styles.btn_text}> + </Text>
              </TouchableOpacity>
            </View>
            :
            <View style={styles.default_address}>
              <View style={styles.default_address_inner}>
                <Text style={styles.default_text}>Shipping address</Text>
                <Text style={styles.default_Name}>  {alldata.shipping_address.first_name} {alldata.shipping_address.last_name} </Text>
                <Text style={styles.add_text}> {alldata.shipping_address.address_1} {alldata.shipping_address.address_2} {alldata.shipping_address.city} {alldata.shipping_address.state} {alldata.shipping_address.postcode}</Text>
                <Text style={styles.add_text}>Phone : {alldata.shipping_address.phone} </Text>
                <View style={styles.delete_root}>
                  {/* <TouchableOpacity onPress={() => removeHandler(i)}>
                        <Text style={styles.add_delete}>Delete</Text>
                      </TouchableOpacity> */}
                  <TouchableOpacity onPress={() => navigation.navigate('editShipping', alldata.ID)}>
                    <Text style={styles.edit_text}>Edit</Text>
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          }
        </View>


      </View>



    </View >
  )
}

export default AddressesScreen