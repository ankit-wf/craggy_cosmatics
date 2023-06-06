import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import TextInput from '../components/InputHook';
import { useDispatch, useSelector, } from 'react-redux';
import { loginActions } from '../store/UserSlice';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput as Input, Title } from 'react-native-paper';
import axios from 'axios';
import { useStyles } from '../styles/loginResponsive';
import BackButton from '../components/BackButton';
import { USER_LOGIN_API, CONSUMER_KEY } from "@env";

const LoginScreen = ({ navigation }) => {
    const styles = useStyles()
    const dispatch = useDispatch();
    const logindata = useSelector(state => state.userData.user);
    const isLoggedIn = useSelector(state => state.userData.isLoggedIn);
    const [login, setLogin] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(true);
    const { control, handleSubmit, reset, formState: { errors } } = useForm()
    // login
    useEffect(() => {
        if (isLoggedIn == true) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'homeScreen' }],
            });
            setLogin(true);
        };
    }, [login])

    const onSubmit = (data) => {
        axios({
            method: 'post',
            url: USER_LOGIN_API,
            data: {
                username: data.userName,
                password: data.password
            },
            headers: {
                'Content-Type': 'application/json',
                'consumer_key': CONSUMER_KEY
            }
        }).then((response) => {
            if (response.data.login == true) {
                dispatch(loginActions.userlogin({ user_data: response.data.user_data }));
                dispatch(loginActions.useraddress({ userAddress: response.data.user_data.shipping_address }))
                dispatch(loginActions.loginform({ isLoggedIn: true }));
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'homeScreen' }],
                });
            }
        })
    }
    const forgetHandler = () => {
        navigation.navigate('forgetPassword')
    }

    return (
        <View style={styles.rootContainter}>
            <ImageBackground source={require('../../assets/images/login-bg.jpg')} resizeMode="cover" style={styles.loginBg}>
                <BackButton goBack={navigation.goBack} />
                <Image source={require('../../assets/images/logo-image.jpg')} style={styles.logoBackground} />
                <View style={styles.Containterlogin}>
                    <View style={styles.inputWidth}>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    style={styles.loginInput}
                                    onChangeText={onChange}
                                    value={value}
                                    label="Email / Phone"
                                    returnKeyType="next"
                                    autoCapitalize="none"
                                    autoCompleteType="email"
                                    textContentType="emailAddress"
                                    keyboardType="email-address"
                                />
                            )}
                            name="userName"
                        />
                        {errors.userName && <Text style={styles.inputError}>This field is required.</Text>}

                        <Controller
                            control={control}
                            rules={{
                                maxLength: 100,
                                required: true,
                            }}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    style={styles.loginInput}
                                    onChangeText={onChange}
                                    value={value}
                                    autoCorrect={false}
                                    label="Password"
                                    returnKeyType="done"
                                    secureTextEntry={passwordVisible}
                                    right={<Input.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} color="#222" style={styles.inputIcon} />}
                                />
                            )}
                            name="password"
                        />
                        {errors.password && <Text style={styles.inputError}>This field is required.</Text>}
                    </View>
                    <View style={styles.checkboxPassword}>
                        <TouchableOpacity onPress={forgetHandler} style={styles.forgotPassword}>
                            <Title style={styles.forgetLabel}>Forgot Password?</Title>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.LoginButtong}>
                        <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.buttonStyle} activeOpacity={0.8}>
                            <Title style={styles.LoginButtongTittle}>Login</Title>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.loginBottom}>
                    <Text style={styles.needHelpBottom}>Don't have an account ?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("signup")}>
                        <Text style={styles.contactUsBottom}> SignUp</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}
export default LoginScreen;
