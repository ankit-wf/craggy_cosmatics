import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { defaultStyles as ds } from '../styles/defaultStyle'

export default function Heading(props) {
    return (
        <View style={{ ...ds.flexRow, paddingLeft: 10, marginTop: 20, marginBottom: 10 }}>
            {/* <Image source={require('../../assets/headingLeft.png')} /> */}
            <Text style={ds.headingText}>{props.title}</Text>
            {/* <Image source={require('../../assets/headingRight.png')} /> */}
        </View>
    )
}
const styles = StyleSheet.create({})