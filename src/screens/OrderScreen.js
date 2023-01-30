import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackButton from '../components/BackButton'

const OrderScreen = ({ navigation }) => {
  return (
    <View >
      <View style={{ flexDirection: 'row', }}>
        <BackButton goBack={navigation.goBack} Color={'#666666'} />
        <Text style={styles.deliveryText}>MY ORDERS</Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: '40%' }}>
        <Text style={{ fontSize: 20 }}> Order List Empty</Text>
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
})