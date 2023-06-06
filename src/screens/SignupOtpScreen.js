import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ImageBackground, TextInput, Image } from 'react-native';
import { useDispatch, useSelector, } from 'react-redux';
import { loginActions } from '../store/UserSlice';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput as Input, Title } from 'react-native-paper';
import { useStyles } from '../styles/otpSignupResponsive'
import BackButton from '../components/BackButton';
import axios from 'axios';
import { CONSUMER_KEY, USER_AUTH_API } from "@env";

const SignupOtpScreen = ({ navigation, route }) => {
    const email = route.params.email;
    const styles = useStyles()
    const dispatch = useDispatch();
    const otp = useSelector(state => state.userData.otp);
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

    const verifyHandler = () => {
        if (otpInput == otp) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'homeScreen' }],
            });
        } else {
            alert("Incorrect OTP");
        }
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
                                maxLength={1}
                                keyboardType="number-pad"
                                style={styles.input_Style}
                            />
                            <TextInput
                                ref={thirdInput}
                                onChangeText={(text) => {
                                    (text !== '') ? (fourthInput.current.focus(), setValue3(text)) : (seconInput.current.focus(), setValue3(""))
                                }}
                                maxLength={1}
                                keyboardType="number-pad"
                                style={styles.input_Style}
                            />
                            <TextInput
                                ref={fourthInput}
                                onChangeText={(text) => {
                                    (text !== '') ? (fourthInput.current.focus(), setValue4(text)) : (thirdInput.current.focus(), setValue4(""))
                                }}
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

