import React from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function BackButton(props) {
    return (
        <TouchableOpacity onPress={props.goBack} style={styles.container}>
            <View style={{ height: 30, width: 30, backgroundColor: 'black', borderRadius: 15, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Ionicons
                    name="chevron-back"
                    color={props.Color}
                    size={30}
                    style={{ marginTop: -2, }}
                />
            </View>
            {/* <Image
                style={styles.image}
                source={require('../../assets/backArrow.png')}
            /> */}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    goBackBtnMain: {
        width:50,
        height:50,
        borderRadius:100,
        position:'absolute',
        left:'8%',
        top:30,
        zIndex:999,
    },
    goBackBtn: {
        color:'#CC933B',
        fontSize:26,
        fontWeight:'700',
    },
})