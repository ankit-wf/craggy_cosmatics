import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, Image } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import TextInput from '../components/InputHook';
import { useDispatch, useSelector, } from 'react-redux';
import { loginActions } from '../store/UserSlice';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput as Input, Title } from 'react-native-paper';
import Checkbox from 'expo-checkbox';
import axios from 'axios';
import { useStyles } from '../styles/responsiveStyle';
import BackButton from '../components/BackButton';

const LoginScreen = ({ navigation }) => {
    const styles = useStyles()
    const [isChecked, setChecked] = useState(false);
    const dispatch = useDispatch();
    const logindata = useSelector(state => state.userData.user);
    const isLoggedIn = useSelector(state => state.userData.isLoggedIn);
    const [login, setLogin] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [userData, setUserData] = useState({});
    // console.log("hjshssd", userData)
    const { control, handleSubmit, reset, formState: { errors } } = useForm()

    // login
    useEffect(() => {
        if (isLoggedIn == true) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'HomeScreen' }],
            });
            setLogin(true);
        };
    }, [login])


    const onSubmit = (data) => {
        axios({
            method: 'post',
            url: 'https://craggycosmetic.com/api/user/login/',
            data: {
                username: data.userName,
                password: data.password
            },
            headers: {
                'Content-Type': 'application/json',
                'consumer_key': '3b137de2b677819b965ddb7288bd73f62fc6c1f04a190678ca6e72fca3986629'
            }
        }).then((response) => {
            console.log(response.data, "response2");
            if (response.data.login == true) {
                setUserData(response.data.user_data);
                dispatch(loginActions.userlogin({ user_data: userData }));
                // dispatch(loginActions.loginform({ isLoggedIn: true }));
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'HomeScreen' }],
                });
            }
        })
        // alert("You Are SuccessFully Registered");
        // reset();
    }

    const forgetHandler = () => {
        navigation.navigate('forgetPassword')
    }
    const skipHandler = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'HomeScreen' }],
        });
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
                        <View style={styles.checkboxInput}>
                            <Checkbox
                                style={styles.checkboxField}
                                uncheckedColor="#222"
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? '#cc933b' : '#222'}
                            />
                            <Text style={styles.checkboxLabel}>Remember me</Text>
                        </View>
                        <TouchableOpacity onPress={forgetHandler} style={styles.forgotPassword}>
                            <Title style={styles.forgetLabel}>Forgot Password?</Title>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.LoginButtong}>
                        <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.buttonStyle}>
                            <Title style={styles.LoginButtongTittle}>Login</Title>
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
export default LoginScreen;
