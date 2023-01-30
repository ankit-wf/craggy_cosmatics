import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, TextInput } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
// import TextInput from '../components/InputHook';
import { useDispatch, useSelector, } from 'react-redux';
import { loginActions } from '../store/UserSlice';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput as Input, Title } from 'react-native-paper';
import { useStyles } from '../styles/responsiveStyle';
import { Ionicons } from '@expo/vector-icons'
const otp = require("../../Data/otp.json")

const SignupOtpScreen = ({ navigation }) => {
    const styles = useStyles()
    // const [isChecked, setChecked] = useState(false);
    // const dispatch = useDispatch();
    // const logindata = useSelector(state => state.userData.user);
    // const isLoggedIn = useSelector(state => state.userData.isLoggedIn);
    // const [login, setLogin] = useState(false)
    // const [passwordVisible, setPasswordVisible] = useState(true);
    const [value1, setValue1] = useState();
    const [value2, setValue2] = useState();
    const [value3, setValue3] = useState();
    const [value4, setValue4] = useState();
    const firstInput = useRef();
    const seconInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();

    const otpInput = (value1 + value2 + value3 + value4)
    // console.log('otp', otp.otp)
    // console.log('otpInput', otpInput)


    const verifyHandler = () => {
        if (otpInput == otp.otp) {
            // navigation.reset({
            //     index: 0,
            //     routes: [{ name: 'HomeScreen' }],
            // });
            alert("correct OTP");
        } else {
            alert("Incorrect OTP");
        }
    }

    return (
        <View style={styles.rootContainter}>
            <ImageBackground source={require('../../assets/images/login-bg.jpg')} resizeMode="cover" style={styles.loginBg}>
                <View style={styles.Containter}>
                    <View style={styles.icon_container}>
                        <Ionicons
                            name="arrow-back-outline"
                            color={'white'}
                            size={22}
                            style={{ marginTop: 12, marginLeft: 10 }}
                            onPress={navigation.goBack}
                        />
                        <Text style={styles.loginText}> VERIFY OTP </Text>
                    </View>


                    <View style={styles.containerInner}>
                        <View style={styles.checkboxPassword}>
                            <View style={styles.Textinput_root}>
                                <TextInput
                                    ref={firstInput}
                                    onChangeText={(text) => {

                                        if (text !== '') { seconInput.current.focus(), setValue1(text) }
                                    }}
                                    maxLength={1}
                                    keyboardType="number-pad"
                                    style={styles.input_Style}
                                />
                                <TextInput
                                    ref={seconInput}
                                    onChangeText={(text) => {

                                        (text !== '') ? (thirdInput.current.focus(), setValue2(text)) : (firstInput.current.focus(), setValue2(""))
                                    }}
                                    // onChangeText={(text) => { text ? thirdInput.current.focus() : firstInput.current.focus() }}
                                    maxLength={1}
                                    keyboardType="number-pad"
                                    style={styles.input_Style}
                                />
                                <TextInput
                                    ref={thirdInput}
                                    onChangeText={(text) => {
                                        (text !== '') ? (fourthInput.current.focus(), setValue3(text)) : (seconInput.current.focus(), setValue3(""))
                                    }}
                                    // onChangeText={(text) => { text ? fourthInput.current.focus() : seconInput.current.focus() }}
                                    maxLength={1}
                                    keyboardType="number-pad"
                                    style={styles.input_Style}
                                />
                                <TextInput
                                    ref={fourthInput}
                                    onChangeText={(text) => {
                                        (text !== '') ? (fourthInput.current.focus(), setValue4(text)) : (thirdInput.current.focus(), setValue4(""))
                                        // alert("THANKS")
                                    }}
                                    // onChangeText={(text) => { text ? fourthInput.current.focus() : thirdInput.current.focus() }}
                                    maxLength={1}
                                    keyboardType="number-pad"
                                    style={styles.input_Style}
                                />
                            </View>
                        </View>

                        <View style={styles.LoginButtong}>
                            <TouchableOpacity style={styles.buttonStyle} onPress={verifyHandler}>
                                <Title style={styles.LoginButtongTittle}>SAVE</Title>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default SignupOtpScreen;

const styles = StyleSheet.create({
    borderStyleBase: {
        width: 30,
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: "#03DAC6",
    },

    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
    },

    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
    },
    box: {
        width: 300,
        height: 55,
        marginVertical: 20,
        borderColor: 'red',
        borderWidth: 1,
    },
    styleInput: {
        height: 50,
        width: 50,
        borderRadius: 10,
        borderWidth: 0.5,
        fontWeight: "600",
        alignSelf: 'center',
        fontSize: 20,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        backgroundColor: '#f5f4f2',
    }
});

