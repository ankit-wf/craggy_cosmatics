import React from 'react'
import { TouchableOpacity, Image, StyleSheet ,} from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { Ionicons } from '@expo/vector-icons'

export default function BackButton(props) {
    return (
        <TouchableOpacity onPress={props.goBack} style={styles.container}>
            <Ionicons
                name="chevron-back"
                color={props.Color}
                size={30}
                style={{marginTop:-7,}}
                 />
            {/* <Image
                style={styles.image}
                source={require('../../assets/backArrow.png')}
            /> */}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        // position: 'absolute',
        // top: 14 + getStatusBarHeight(),
        // left: 15,
        marginTop: 20 + getStatusBarHeight(),
        marginLeft: 0
    },
    // image: {
    //     width: 10,
    //     height: 25,
    // },
})