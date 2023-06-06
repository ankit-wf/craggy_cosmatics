import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useStyles } from '../styles/homeResponsive'

export default function Heading(props) {
    const hm = useStyles();
    return (
        <View style={{ ...hm.heading_flexRow }}>
            <Text style={hm.headingText}>{props.title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({})