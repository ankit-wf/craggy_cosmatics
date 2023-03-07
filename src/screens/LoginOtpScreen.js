import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, TextInput, Image } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
// import TextInput from '../components/InputHook';
import { useDispatch, useSelector, } from 'react-redux';
import { loginActions } from '../store/UserSlice';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput as Input, Title } from 'react-native-paper';
import Checkbox from 'expo-checkbox';
import { useStyles } from '../styles/responsiveStyle';
import { Ionicons } from '@expo/vector-icons';
import BackButton from '../components/BackButton';
// import OTPInputView from '@twotalltotems/react-native-otp-input';

const OtpScreen = ({ navigation }) => {
    const styles = useStyles()
    // const [isChecked, setChecked] = useState(false);
    // const dispatch = useDispatch();
    // const logindata = useSelector(state => state.userData.user);
    // const isLoggedIn = useSelector(state => state.userData.isLoggedIn);
    // console.log("logged-in ", isLoggedIn)
    // const [login, setLogin] = useState(false)
    // const [passwordVisible, setPasswordVisible] = useState(true);
    const firstInput = useRef();
    const seconInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const verifyHandler = () => {
        navigation.navigate('resetPassword')
    }

    return (
        <View style={styles.rootContainter}>
            <ImageBackground source={require('../../assets/images/login-bg.jpg')} resizeMode="cover" style={styles.loginBg}>
                <BackButton goBack={navigation.goBack} />
                <Image source={require('../../assets/images/logo-image.jpg')} style={styles.logoBackground} />
                <View style={styles.Containterlogin}>
                    <View style={styles.checkboxPassword}>
                        <View style={styles.Textinput_root}>
                            <TextInput
                                ref={firstInput}
                                onChangeText={text => { text && seconInput.current.focus() }}
                                maxLength={1}
                                keyboardType="number-pad"
                                style={styles.input_Style}
                            />
                            <TextInput
                                ref={seconInput}
                                onChangeText={text => { text ? thirdInput.current.focus() : firstInput.current.focus() }}
                                maxLength={1}
                                keyboardType="number-pad"
                                style={styles.input_Style}
                            />
                            <TextInput
                                ref={thirdInput}
                                onChangeText={text => { text ? fourthInput.current.focus() : seconInput.current.focus() }}
                                maxLength={1}
                                keyboardType="number-pad"
                                style={styles.input_Style}
                            />
                            <TextInput
                                ref={fourthInput}
                                onChangeText={text => { text ? fourthInput.current.focus() : thirdInput.current.focus() }}
                                maxLength={1}
                                keyboardType="number-pad"
                                style={styles.input_Style}
                            />
                        </View>
                    </View>
                    <View style={styles.LoginButtong}>
                        <TouchableOpacity style={styles.buttonStyle} onPress={verifyHandler}>
                            <Title style={styles.LoginButtongTittle}>VERIFY OTP</Title>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.loginBottom}>
                    <Text style={styles.needHelpBottom}>Need Help?</Text>
                    <TouchableOpacity><Text style={styles.contactUsBottom}> Contact us</Text></TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default OtpScreen;

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
