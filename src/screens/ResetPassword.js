import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, Image } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import TextInput from '../components/InputHook';
import { useDispatch, useSelector, } from 'react-redux';
import { loginActions } from '../store/UserSlice';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput as Input, Title } from 'react-native-paper';
import { useStyles } from '../styles/loginResponsive';
import BackButton from '../components/BackButton';

const ResetPassword = ({ navigation }) => {
    const styles = useStyles()
    const [isChecked, setChecked] = useState(false);
    const dispatch = useDispatch();
    const logindata = useSelector(state => state.userData.user);
    const isLoggedIn = useSelector(state => state.userData.isLoggedIn);
    const [login, setLogin] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [CpasswordVisible, setCpasswordVisible] = useState(true);
    useEffect(() => {
        if (isLoggedIn == true) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'homeScreen' }],
            });
            setLogin(true);
        };
    }, [login])

    const { control, handleSubmit, reset, formState: { errors } } = useForm({})
    const onSubmit = (data) => {
        if (data.password == data.confirm_password) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'homeScreen' }],
            });
        }
        dispatch(loginActions.loginform({ isLoggedIn: true }));
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
                                    label="Password"
                                    returnKeyType="next"
                                    autoCapitalize="none"
                                    autoCompleteType="password"
                                    textContentType="password"
                                    keyboardType='numeric'
                                    secureTextEntry={passwordVisible}
                                    right={<Input.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} color="#222" style={styles.inputIcon} />}
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
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    style={styles.loginInput}
                                    onChangeText={onChange}
                                    value={value}
                                    label="Confirm Password"
                                    returnKeyType="next"
                                    autoCapitalize="none"
                                    autoCompleteType="confirm_password"
                                    textContentType="confirm_password"
                                    keyboardType='numeric'
                                    secureTextEntry={CpasswordVisible}
                                    right={<Input.Icon name={CpasswordVisible ? "eye" : "eye-off"} onPress={() => setCpasswordVisible(!CpasswordVisible)} color="#222" style={styles.inputIcon} />}
                                />
                            )}
                            name="confirm_password"
                        />
                        {errors.confirm_password && <Text style={styles.inputError}>This field is required.</Text>}
                    </View>
                    <View style={styles.LoginButtong}>
                        <TouchableOpacity style={styles.buttonStyle} onPress={handleSubmit(onSubmit)} >
                            <Title style={styles.LoginButtongTittle}>SAVE</Title>
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
export default ResetPassword
const styles = StyleSheet.create({})