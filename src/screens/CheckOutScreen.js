import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper'

const CheckOutScreen = ({ navigation, route }) => {
    const [checked, setChecked] = useState('ok');
    // console.log("dddddd", checked)
    const Tm = route.params;
    return (
        <View>
            <View style={styles.total_priceRoot}>
                <Text style={styles.total_text}>Total</Text>
                <Text style={styles.total_price}>₹{Tm}</Text>
            </View>
            <View style={styles.RadioButtonRoot}>
                <Text style={styles.other_option}>Other Options</Text>
                <View style={styles.btnTextRoot}>
                    <Text style={styles.select_text}>Cash On Delivery</Text>
                    <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                    />
                </View>
                <View style={styles.btnTextRoot}>
                    <Text style={styles.select_text}>Pay-U Money</Text>
                    <RadioButton
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.btn_Coninue} >
                <Text style={styles.buttonText}>Continue </Text>
            </TouchableOpacity>
        </View>
    )
}

export default CheckOutScreen;

const styles = StyleSheet.create({
    pymentHeading: {
        fontSize: 20,
        alignSelf: 'flex-end',
        paddingLeft: 20,
        lineHeight: 35
    },
    total_priceRoot: {
        height: 50,
        width: '100%',
        borderWidth: 0.3,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    total_text: {
        fontSize: 16,
        fontWeight: "700",
        fontFamily: 'Raleway700',
        paddingLeft: '5%'
    },
    other_option: {
        fontSize: 16,
        fontWeight: "600",
        fontFamily: 'Raleway600',
        paddingLeft: '5%',
        paddingBottom: 8
    },
    total_price: {
        fontSize: 16,
        fontWeight: "700",
        fontFamily: 'Raleway700',
        paddingRight: '5%'
    },
    RadioButtonRoot: {
        marginTop: "5%",
    },
    btnTextRoot: {
        flexDirection: 'row',
        height: 50,
        width: "90%",
        borderWidth: 0.3,
        borderRadius: 4,
        marginBottom: "6%",
        alignSelf: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    select_text: {
        fontSize: 15,
        // fontWeight: "700",
        // fontFamily: 'Raleway700',
    },
    btn_Coninue: {
        height: 40,
        width: "90%",
        paddingTop: 5,
        borderRadius: 20,
        marginTop: 13,
        backgroundColor: '#C68625',
        alignSelf: 'center',
        alignItems: 'center',
        // marginRight: "5%"
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        paddingTop: 9,
        fontWeight: "700",
        fontFamily: 'Raleway700',
        fontSize: 15,
        lineHeight: 13
    }
})