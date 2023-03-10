import React, { useState, useRef } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import TextInput from '../components/InputHook';
import { useDispatch, } from 'react-redux';
import { loginActions } from '../store/UserSlice';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput as Input, Title } from 'react-native-paper';
import { useStyles } from '../styles/responsiveStyle';
import BackButton from '../components/BackButton';
import useMailer from '../utilFunctions/useMailer';
import { otpTemp } from '../../Data/mailTemplate/Mailer';
import axios from 'axios'
import { CONSUMER_KEY, USER_REGISTER_API } from "@env";

const SignupScreen = ({ navigation }) => {
    const mailer = useMailer();
    const otpTemplate = otpTemp();
    const styles = useStyles()
    const dispatch = useDispatch();
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [cpassVisible, setCpassVisible] = useState(true);
    // const [isChecked, setChecked] = useState(false);
    // const dispatch = useDispatch();
    // const logindata = useSelector(state => state.userData.user);
    // const isLoggedIn = useSelector(state => state.userData.isLoggedIn);
    // // console.log("logged-in ", isLoggedIn)
    // const [login, setLogin] = useState(false)
    // const [passwordVisible, setPasswordVisible] = useState(true);
    const { control, handleSubmit, watch, reset, formState: { errors } } = useForm({
        // defaultValues: {
        //     userName: '',
        //     phone: '',
        //     email: '',
        //     pass: '',
        //     cpass: ''
        // }
    })
    let pwd = watch("pass");
    const timeout = () => {
        setTimeout(() => {
            dispatch(loginActions.otp({ otp: '' }));
            // console.log('otp expired')
        }, (1000 * 60) * 10);
    }

    const onSubmit = async (data) => {
        // console.log("password", data.pass, "confirmPassword", data.cpass)
        console.log("password Matched")
        axios({
            method: 'post',
            url: USER_REGISTER_API,
            data: {
                user_name: data.userName,
                email: data.email,
                phone: data.phone,
                password: data.cpass
            },
            headers: {
                'Content-Type': 'application/json',
                'consumer_key': CONSUMER_KEY
            }
        }).then((res) => {
            // console.log("gghghghgh", res.data)
            if (res.data.status === 200) {
                dd
            }
        })
        reset();
        navigation.navigate('signupOtpScreen', { email: data.email })
        dispatch(loginActions.otp(
            {
                otp: otpTemplate.otp
            }
        ));
        timeout()
        // console.log("respooo111", dd);     

        const dd = await mailer.mailTemplate({
            to: data.email,
            from: "moneymakkar@gmail.com",
            sub: otpTemplate.sub,
            body: otpTemplate.body,
            // otp: otpTemplate.otp
        });
        console.log("respooo111", dd);
        // reset()
        // navigation.navigate('signupOtpScreen', { email: data.email })
        // dispatch(loginActions.otp(
        //     {
        //         otp: otpTemplate.otp
        //     }
        // ));
        // timeout()

    }


    return (
        <View style={styles.rootContainter}>
            <ImageBackground source={require('../../assets/images/login-bg.jpg')} style={styles.loginBg}>
                <BackButton goBack={navigation.goBack} />
                <Image source={require('../../assets/images/logo-image.jpg')} style={styles.logoBackground} />
                <View style={styles.Containterlogin}>
                    <View style={styles.inputWidth}>
                        <Controller
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    style={styles.loginInput}
                                    onChangeText={onChange}
                                    value={value}
                                    label="Name"
                                    returnKeyType="next"
                                    keyboardType="text"
                                />
                            )}
                            name="userName"
                        />
                        {errors.userName && errors.userName.type === 'required' && <Text style={styles.inputError}>This field is required.</Text>}

                        <Controller
                            control={control}
                            rules={{
                                required: true,
                                pattern: { value: /^[0-9]{10,10}$/ }
                            }}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    style={styles.loginInput}
                                    onChangeText={onChange}
                                    value={value}
                                    label="Phone"
                                    returnKeyType="next"
                                    keyboardType="number-pad"
                                />
                            )}
                            name="phone"
                        />
                        {errors.phone && errors.phone.type === 'required' && <Text style={styles.inputError}>This field is required.</Text>}
                        {errors.phone && errors.phone.type === 'pattern' && <Text style={styles.inputError}> Maximum 10 digit limit</Text>}
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                                pattern: { value: /^([A-Za-z0-9_.])+@+[A-Za-z0-9_.]+.+[A-Za-z]{2,4}$/ }
                                // pattern: { value: /^[a-zA-Z ]{2,40}$/ }
                            }}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    style={styles.loginInput}
                                    onChangeText={onChange}
                                    value={value}
                                    label="Email"
                                    returnKeyType="next"
                                    autoCapitalize="none"
                                    autoCompleteType="email"
                                    textContentType="email"
                                    keyboardType="email-address"
                                />
                            )}
                            name="email"
                        />
                        {errors.email && errors.email.type === 'required' && <Text style={styles.inputError}>This field is required.</Text>}
                        {errors.email && errors.email.type === 'pattern' && <Text style={styles.inputError}> Please enter a valid email</Text>}

                        <Controller
                            control={control}
                            rules={{
                                required: true,
                                pattern: { value: /^[A-Za-z0-9!@#\$%\^\&*\)\(+=._-]{8,12}$/ },
                            }}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    style={styles.loginInput}
                                    onChangeText={onChange}
                                    value={value}
                                    label="Password"
                                    returnKeyType="next"
                                    keyboardType="text"
                                    secureTextEntry={passwordVisible}
                                    right={<Input.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} color="#222" style={styles.inputIcon} />}
                                />
                            )}
                            name="pass"
                        />
                        {errors.pass && errors.pass.type === 'pattern' && <Text style={styles.inputError}> Minimum Eight characters, at Least One Letter and One Number</Text>}
                        {errors.pass && errors.pass.type === 'required' && <Text style={styles.inputError}>This field is required.</Text>}

                        <Controller
                            control={control}
                            rules={{
                                required: true,
                                validate: value => value === pwd || "The passwords does not match"
                                // pattern: { value: /^[A-Za-z0-9!@#\$%\^\&*\)\(+=._-]{8,12}$/ },
                            }}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    style={styles.loginInput}
                                    onChangeText={onChange}
                                    value={value}
                                    label="Confirm Password"
                                    returnKeyType="done"
                                    keyboardType="text"
                                    secureTextEntry={cpassVisible}
                                    right={<Input.Icon name={cpassVisible ? "eye" : "eye-off"} onPress={() => setCpassVisible(!cpassVisible)} color="#222" style={styles.inputIcon} />}
                                />
                            )}
                            name="cpass"
                        />

                        {errors.cpass && errors.cpass.type === 'required' && <Text style={styles.inputError}>This field is required.</Text>}
                        {errors.cpass && errors.cpass.type === "validate" && <Text style={styles.inputError}>{errors.cpass.message}</Text>}
                        {/* {errors.cpass && errors.cpass.type === 'pattern' && <Text style={styles.inputError}> Minimum eight characters, at least one letter and one number</Text>} */}

                    </View>
                    <View style={styles.LoginButtong}>
                        <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.buttonStyle}>
                            <Title style={styles.LoginButtongTittle}>Sign Up</Title>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.loginBottom}>
                    <Text style={styles.needHelpBottom}>Already have an account ?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("login")}>
                        <Text style={styles.contactUsBottom}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default SignupScreen;

