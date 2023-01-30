import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import OrderScreen from '../screens/OrderScreen'
import AccountDetailScreen from '../screens/AccountDetailScreen'
import AddressesScreen from '../screens/AddressesScreen'

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
  
      <Tab.Navigator initialRouteName='OrderScreen'>
        <Tab.Screen name="Order" component={OrderScreen} />
        <Tab.Screen name="Addresses" component={AddressesScreen} />
        <Tab.Screen name="Account-Detail" component={AccountDetailScreen} />
      </Tab.Navigator>
    
  )
}

export default TopTab;

const styles = StyleSheet.create({
    
})