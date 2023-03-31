import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useStyles } from '../styles/homeResponsive'

export default function Heading(props) {
    const hm = useStyles();
    return (
        <View style={{ ...hm.heading_flexRow }}>
            {/* <Image source={require('../../assets/headingLeft.png')} /> */}
            <Text style={hm.headingText}>{props.title}</Text>
            {/* <Image source={require('../../assets/headingRight.png')} /> */}
        </View>
    )
}
const styles = StyleSheet.create({})