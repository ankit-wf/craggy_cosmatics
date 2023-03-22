import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, TextInput, Image } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
// import TextInput from '../components/InputHook';
import { useDispatch, useSelector, } from 'react-redux';
import { loginActions } from '../store/UserSlice';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput as Input, Title } from 'react-native-paper';
import { useStyles } from '../styles/otpSignupResponsive'
import { Ionicons } from '@expo/vector-icons'
import BackButton from '../components/BackButton';
import axios from 'axios';
import { CONSUMER_KEY, USER_AUTH_API } from "@env";

const SignupOtpScreen = ({ navigation, route }) => {

    const email = route.params.email;
    // console.log("email", email)
    const styles = useStyles()
    // const [isChecked, setChecked] = useState(false);
    const dispatch = useDispatch();
    // const logindata = useSelector(state => state.userData.user);
    // const isLoggedIn = useSelector(state => state.userData.isLoggedIn);
    // const [login, setLogin] = useState(false)
    // const [passwordVisible, setPasswordVisible] = useState(true);
    const otp = useSelector(state => state.userData.otp);
    console.log('topval', otp)
    const [value1, setValue1] = useState();
    const [value2, setValue2] = useState();
    const [value3, setValue3] = useState();
    const [value4, setValue4] = useState();
    const firstInput = useRef();
    const seconInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const [seconds, setSeconds] = useState(15);

    const otpInput = (value1 + value2 + value3 + value4)
    // console.log('otp', otp.otp)
    // console.log('otpInput', otpInput)

    const verifyHandler = () => {
        if (otpInput == otp) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'homeScreen' }],
            });
            // alert("correct OTP");
        } else {
            alert("Incorrect OTP");
        }
        // timeout()
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }

        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [seconds]);

    const timeout = () => {
        setTimeout(() => {
            dispatch(loginActions.otp(
                {
                    otp: ''
                }
            ));
            // Timeout Logic
            console.log('otp expired')
        }, (1000 * 60) * 10);
    }

    const onSubmit = () => {
        var otpVal = Math.floor(1000 + Math.random() * 9000);
        dispatch(loginActions.otp(
            {
                otp: otpVal
            }
        ));

        axios({
            method: 'post',
            url: USER_AUTH_API,
            data: {
                to: email,
                otp: otpVal
            },
            headers: {
                'Content-Type': 'application/json',
                'consumer_key': CONSUMER_KEY
            }
        }).then((res) => {
            console.log(res.status)
            if (res.status === 200) {
                setSeconds(15);
            }
            timeout()
        })
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
                    <View >

                        {seconds > 0 ?
                            <View style={styles.fill_root}>
                                <View style={styles.Fill_counter_root}>
                                    <Text style={styles.Fill_counter_text}> Timing Remaining: 00:{seconds}</Text>
                                </View>
                                <View style={styles.fill_resend_root}>
                                    <Text style={styles.fill_resend_text}>Resend OTP</Text>
                                </View>
                            </View>
                            :
                            <View style={styles.empty_root}>
                                <View style={styles.empty_counter_root}>

                                </View>
                                <View style={styles.empty_resend_root}>
                                    <TouchableOpacity onPress={onSubmit}>
                                        <Text style={styles.empty_resend_text}>Resend OTP</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }
                    </View>
                    <View style={styles.LoginButtong}>
                        <TouchableOpacity style={styles.buttonStyle} onPress={verifyHandler}>
                            <Title style={styles.LoginButtongTittle}>SAVE</Title>
                        </TouchableOpacity>
                    </View>

                </View >
            </ImageBackground >
        </View >
    )
}

export default SignupOtpScreen;


// const styles1 = StyleSheet.create({
//     borderStyleBase: {
//         width: 30,
//         height: 45
//     },

//     borderStyleHighLighted: {
//         borderColor: "#03DAC6",
//     },

//     underlineStyleBase: {
//         width: 30,
//         height: 45,
//         borderWidth: 0,
//         borderBottomWidth: 1,
//     },

//     underlineStyleHighLighted: {
//         borderColor: "#03DAC6",
//     },
//     box: {
//         width: 300,
//         height: 55,
//         marginVertical: 20,
//         borderColor: 'red',
//         borderWidth: 1,
//     },
//     styleInput: {
//         height: 50,
//         width: 50,
//         borderRadius: 10,
//         borderWidth: 0.5,
//         fontWeight: "600",
//         alignSelf: 'center',
//         fontSize: 20,
//         justifyContent: 'center',
//         alignContent: 'center',
//         textAlign: 'center',
//         backgroundColor: '#f5f4f2',
//     },
//     fill_root: {
//         width: "100%",
//         flexDirection: 'row'
//     },
//     Fill_counter_root: {
//         width: "60%",
//         justifyContent: 'center',
//         alignItems: 'flex-start'
//     },
//     Fill_counter_text: {
//         color: 'grey',
//         textAlign: 'left'
//     },
//     fill_resend_root: {
//         width: "40%",
//         justifyContent: 'center',
//         alignItems: 'flex-end'
//     },
//     fill_resend_text: {
//         color: 'grey',
//         textAlign: 'right',
//         fontWeight: '600',
//         textDecorationLine: 'underline',
//         textDecorationColor: 'grey'
//     },
//     empty_root: {
//         width: "100%",
//         flexDirection: 'row'
//     },
//     empty_counter_root: {
//         width: "60%",
//         justifyContent: 'center',
//         alignItems: 'flex-end'
//     }, empty_resend_root: {
//         width: "40%",
//         justifyContent: 'center',
//         alignItems: 'flex-end'
//     },
//     empty_resend_text: {
//         color: 'blue',
//         textAlign: 'right',
//         fontWeight: '600',
//         textDecorationColor: 'blue',
//         textDecorationLine: 'underline'
//     }
// });

