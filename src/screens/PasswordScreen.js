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

const PasswordScreen = ({ navigation }) => {
    const styles = useStyles()
    const [isChecked, setChecked] = useState(false);
    const dispatch = useDispatch();
    const logindata = useSelector(state => state.userData.user);
    const isLoggedIn = useSelector(state => state.userData.isLoggedIn);
    const [login, setLogin] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(true);
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

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            password: '',
        }
    })
    const onSubmit = (data) => {
        {
            logindata.map((item) => {
                console.log("data.email", item.email, item.password);
                if (data.password == item.password) {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'homeScreen' }],
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
                    <Text style={styles.loginText}> customer login </Text>
                    <View style={styles.containerInner}>
                        <View style={styles.inputWidth}>
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
                                        label="Password / OTP"
                                        returnKeyType="done"
                                        secureTextEntry={passwordVisible}
                                        right={<Input.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} color="#fff" style={styles.inputIcon} />}
                                    />
                                )}
                                name="password"
                            />
                            {errors.password && <Text style={styles.inputError}>This field is required.</Text>}
                        </View>
                        <View style={styles.checkboxPassword}>
                            <View style={styles.checkboxInput}>
                            </View>
                            <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.forgotPassword}>
                                <Title style={styles.forgetLabel}>Forgot Password?</Title>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.LoginButtong}>
                            <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.buttonStyle}>
                                <Title style={styles.LoginButtongTittle}>Submit</Title>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={handleSubmit(onSubmit)}><Title style={styles.creatAccount}>Create New Account</Title></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}
export default PasswordScreen;
const styles = StyleSheet.create({})