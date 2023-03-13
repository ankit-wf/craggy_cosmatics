import React from 'react'
import { TouchableOpacity, StyleSheet, } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function BackButton(props) {
    return (
        <TouchableOpacity onPress={props.goBack} style={styles.goBackBtnMain}>
            <Ionicons name="chevron-back" style={styles.goBackBtn} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    goBackBtnMain: {
        width: 50,
        height: 50,
        borderRadius: 100,
        position: 'absolute',
        left: '8%',
        top: 30,
        zIndex: 999,
    },
    goBackBtn: {
        color: '#CC933B',
        fontSize: 26,
        fontWeight: '700',
    },
})