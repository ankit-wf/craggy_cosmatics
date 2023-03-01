import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Linking from 'expo-linking';
import { Button } from 'react-native';

const LinkingTest = () => {

    const productUrl = Linking.createURL('product/123');
    console.log('productUrl', productUrl)

    const Link1 = () => {
        Linking.openURL('https://expo.dev');
    }

    return (
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Text>LinkingTest</Text>
            <Button title='Link' onPress={Link1} />
        </View>
    )
}

export default LinkingTest

const styles = StyleSheet.create({})