import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import TextInput from '../components/InputHook';
import { useDispatch, useSelector, } from 'react-redux';
import { loginActions } from '../store/UserSlice';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput as Input, Title } from 'react-native-paper';
import Checkbox from 'expo-checkbox';
import { useStyles } from '../styles/loginResponsive';
import { Ionicons } from '@expo/vector-icons';
import BackButton from '../components/BackButton';

const ForgetPasswordScreen = ({ navigation }) => {

    const styles = useStyles()
    const [isChecked, setChecked] = useState(false);
    const dispatch = useDispatch();
    const logindata = useSelector(state => state.userData.user);
    const isLoggedIn = useSelector(state => state.userData.isLoggedIn);
    const [login, setLogin] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(true);
    useEffect(() => {
        if (isLoggedIn == true) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'homeScreen' }],
            });
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
        navigation.navigate('otpScreen');
        reset();
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
                            name="email"
                        />
                        {errors.email && <Text style={styles.inputError}>This field is required.</Text>}
                    </View>
                    <View style={styles.LoginButtong}>
                        <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.buttonStyle} activeOpacity={0.8} >
                            <Title style={styles.LoginButtongTittle}>Send OTP</Title>
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

export default ForgetPasswordScreen