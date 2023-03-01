import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const SocialIcon = () => {
    return (
        <View style={{ alignItems: 'center', margin: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#525252' }}>FOLLOW US ON</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Ionicons name="logo-facebook" size={35} color='#525252' />
                <Ionicons name="logo-instagram" size={35} color='#525252' />
                <Ionicons name="logo-pinterest" size={35} color='#525252' />
                <Ionicons name="logo-twitter" size={35} color='#525252' />
                <Ionicons name="logo-youtube" size={35} color='#525252' />
            </View>

        </View>
    )
}

export default SocialIcon

const styles = StyleSheet.create({})