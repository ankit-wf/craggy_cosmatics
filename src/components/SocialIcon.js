import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const SocialIcon = () => {
    return (
        <View style={styles.root}>
            <Text style={styles.follow_text}>FOLLOW US ON</Text>

            <View style={styles.icon_root}>
                <Ionicons name="logo-facebook" size={35} color='#525252' style={styles.icon_left} />
                <Ionicons name="logo-instagram" size={35} color='#525252' style={styles.icon_left} />
                <Ionicons name="logo-pinterest" size={35} color='#525252' style={styles.icon_left} />
                <Ionicons name="logo-twitter" size={35} color='#525252' style={styles.icon_left} />
                <Ionicons name="logo-youtube" size={35} color='#525252' style={styles.icon_left} />
            </View>

        </View>
    )
}

export default SocialIcon

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        margin: 20
    },
    follow_text: {
        fontSize: 18,
        fontWeight: '600',
        color: '#525252'
    },
    icon_root: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    icon_left: {
        marginRight: 5
    }
})