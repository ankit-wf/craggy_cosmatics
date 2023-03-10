import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, ScrollView, Image } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import TextInput from '../components/InputHook';
import { useDispatch, useSelector, } from 'react-redux';
import { loginActions } from '../store/UserSlice';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput as Input, Title } from 'react-native-paper';
import Checkbox from 'expo-checkbox';
import { useStyles } from '../styles/responsiveStyle';
import BackButton from '../components/BackButton';

const SignupScreen = ({ navigation }) => {
    const styles = useStyles()
    // const [isChecked, setChecked] = useState(false);
    // const dispatch = useDispatch();
    // const logindata = useSelector(state => state.userData.user);
    // const isLoggedIn = useSelector(state => state.userData.isLoggedIn);
    // // console.log("logged-in ", isLoggedIn)
    // const [login, setLogin] = useState(false)
    // const [passwordVisible, setPasswordVisible] = useState(true);

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            FirstName: '',
            LastName: '',
            email: '',
            PhoneNumber: '',
            Password: ''
        }
    })

    const onSubmit = (data) => {
        // console.log("dataaaaaaaaaaaaa", data);
        navigation.navigate('SignupOtpScreen')
        reset();
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
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        style={styles.loginInput}
                                        onChangeText={onChange}
                                        value={value}
                                        label="First Name"
                                        returnKeyType="next"
                                        autoCapitalize="none"
                                        autoCompleteType="email"
                                        textContentType="emailAddress"
                                        keyboardType="text"
                                    />
                                )}
                                name="FirstName"
                            />
                            {errors.FirstName && <Text style={styles.inputError}>This field is required.</Text>}
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
                                        label="Last Name"
                                        returnKeyType="next"
                                        autoCapitalize="none"
                                        autoCompleteType="email"
                                        textContentType="emailAddress"
                                        keyboardType="text"
                                    />
                                )}
                                name="LastName"
                            />
                            {errors.LastName && <Text style={styles.inputError}>This field is required.</Text>}

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
                                        label="Email"
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

                        <View style={styles.LoginButtong}>
                            <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.buttonStyle}>
                                <Title style={styles.LoginButtongTittle}>Sign Up</Title>
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

export default SignupScreen;