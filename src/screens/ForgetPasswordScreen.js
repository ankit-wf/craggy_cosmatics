import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import TextInput from '../components/InputHook';
import { useDispatch, useSelector, } from 'react-redux';
import { loginActions } from '../store/UserSlice';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput as Input, Title } from 'react-native-paper';
import Checkbox from 'expo-checkbox';
import { useStyles } from '../styles/responsiveStyle';
import { Ionicons } from '@expo/vector-icons'

const ForgetPasswordScreen = ({ navigation }) => {

    const styles = useStyles()
    const [isChecked, setChecked] = useState(false);
    const dispatch = useDispatch();
    const logindata = useSelector(state => state.userData.user);
    const isLoggedIn = useSelector(state => state.userData.isLoggedIn);
    // console.log("logged-in ", isLoggedIn)
    const [login, setLogin] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(true);
    // login
    useEffect(() => {
        if (isLoggedIn == true) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'HomeScreen' }],
            });
            // console.log("first:", isLoggedIn)
            setLogin(true);

        };
    }, [login])

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: '',
        }
    })

    const onSubmit = (data) => {
        console.log("dataaaaaaaaaaaaa", data);
        //     {
        //         logindata.map((item) => {
        //             console.log("data.email", item.email, item.password);
        //             if (data.email == item.email && data.password == item.password) {
        //                 navigation.reset({
        //                     index: 0,
        //                     routes: [{ name: 'HomeScreen' }],
        //                 });
        //             }
        //         })
        //     }
        //     dispatch(loginActions.loginform({ isLoggedIn: true }));
        navigation.navigate('OtpScreen');
        reset();
    }
    // const otpHandler = () => {
    //     navigation.navigate('OtpScreen');
    // }
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
                        <Text style={styles.loginText}> Forget Password </Text>
                    </View>
                    <View style={styles.containerInner}>
                        <View style={styles.inputWidth}>
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
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
                                name="email"
                            />
                            {errors.email && <Text style={styles.inputError}>This field is required.</Text>}

                        </View>
                        <View style={styles.checkboxPassword}>

                        </View>
                        <View style={styles.LoginButtong}>
                            <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.buttonStyle}>
                                <Title style={styles.LoginButtongTittle}>Send OTP</Title>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default ForgetPasswordScreen

const styles = StyleSheet.create({})