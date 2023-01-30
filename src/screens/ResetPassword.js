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
// import OTPInputView from '@twotalltotems/react-native-otp-input';

const ResetPassword = ({ navigation }) => {

    const styles = useStyles()
    const [isChecked, setChecked] = useState(false);
    const dispatch = useDispatch();
    const logindata = useSelector(state => state.userData.user);
    const isLoggedIn = useSelector(state => state.userData.isLoggedIn);
    // console.log("logged-in ", isLoggedIn)
    const [login, setLogin] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(true);
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
            password: '',
            confirm_password: '',
        }
    })

    const onSubmit = (data) => {
        // console.log("dataaaaaaaaaaaaa",data);
        {
            logindata.map((item) => {
                console.log("data.email", item.email, item.password);
                if (data.email == item.email && data.password == item.password) {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'HomeScreen' }],
                    });
                }

            })
        }
        dispatch(loginActions.loginform({ isLoggedIn: true }));
        reset();
    }


    return (
        <View style={styles.rootContainter}>
            <ImageBackground source={require('../../assets/images/login-bg.jpg')} resizeMode="cover" style={styles.loginBg}>

                <View style={styles.Containter}>
                    <View style={styles.reset_container}>
                        <Text style={styles.loginText}> RESET PASSWORD </Text>
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
                                        label="Password"
                                        returnKeyType="next"
                                        autoCapitalize="none"
                                        autoCompleteType="email"
                                        textContentType="emailAddress"
                                        keyboardType='numeric'
                                    />
                                )}
                                name="password"
                            />
                            {errors.password && <Text style={styles.inputError}>This field is required.</Text>}

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
                                        label="Confirm Password"
                                        returnKeyType="next"
                                        autoCapitalize="none"
                                        autoCompleteType="email"
                                        textContentType="emailAddress"
                                        keyboardType='numeric'
                                    />
                                )}
                                name="confirm_password"
                            />
                            {errors.confirm_password && <Text style={styles.inputError}>This field is required.</Text>}
                        </View>
                        <View style={styles.checkboxPassword}>
                            <View style={styles.checkboxInput}>

                            </View>
                        </View>
                        <View style={styles.LoginButtong}>
                            <TouchableOpacity style={styles.buttonStyle} onPress={handleSubmit(onSubmit)} >
                                <Title style={styles.LoginButtongTittle}>SAVE</Title>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default ResetPassword

const styles = StyleSheet.create({})