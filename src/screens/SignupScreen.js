import React from 'react';
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
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            FirstName: '',
            LastName: '',
            email: '',
            PhoneNumber: '',
            Password: ''
        }
    })

    const timeout = () => {
        setTimeout(() => {
            dispatch(loginActions.otp({ otp: '' }));
            // console.log('otp expired')
        }, (1000 * 60) * 10);
    }

    const onSubmit = async (data) => {

        // axios({
        //     method: 'post',
        //     url: 'https://craggycosmetic.com/api/user/add/',
        //     data: {
        //         user_name: data.userName,
        //         email: data.email,
        //         phone: data.phone,
        //         password: data.cpass
        //     },
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'consumer_key': '3b137de2b677819b965ddb7288bd73f62fc6c1f04a190678ca6e72fca3986629'
        //     }
        // }).then((res) => {
        //     // console.log(res.data)
        //     if (res.data.status === 200) {
        //         reset();
        //         navigation.navigate('SignupOtpScreen', { email: data.email })
        //     }
        //     timeout()
        // })

        const dd = await mailer.mailTemplate({
            to: data.email,
            from: "moneymakkar@gmail.com",
            sub: otpTemplate.sub,
            body: otpTemplate.body,
            otp: otpTemplate.otp
        });
        console.log("respooo111", dd);

        // dispatch(loginActions.otp(
        //     {
        //         otp: otpVal
        //     }
        // ));

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
                        {errors.userName && <Text style={styles.inputError}>This field is required.</Text>}

                        <Controller
                            control={control}
                            rules={{ required: true }}
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
                        {errors.phone && <Text style={styles.inputError}>This field is required.</Text>}

                        <Controller
                            control={control}
                            rules={{ required: true }}
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
                        {errors.email && <Text style={styles.inputError}>This field is required.</Text>}

                        <Controller
                            control={control}
                            rules={{ required: true }}
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
                        {errors.pass && <Text style={styles.inputError}>This field is required.</Text>}

                        <Controller
                            control={control}
                            rules={{ required: true }}
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
                        {errors.cpass && <Text style={styles.inputError}>This field is required.</Text>}
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

