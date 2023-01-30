import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import TextInput from '../components/InputHook';
import { useDispatch, useSelector, } from 'react-redux';
import { loginActions } from '../store/UserSlice';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput as Input, Title } from 'react-native-paper';
import Checkbox from 'expo-checkbox';
import { useStyles } from '../styles/responsiveStyle';

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
                <View style={styles.Containters}>
                    <View style={styles.reset_container}>
                        <Text style={styles.loginText}> customer signup </Text>
                    </View>
                    <ScrollView style={styles.containerInner}>
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
                                        label="PhoneNumber"
                                        returnKeyType="done"
                                        keyboardType="numeric"
                                    // secureTextEntry={passwordVisible}
                                    // right={<Input.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} color="#fff" style={styles.inputIcon} />}

                                    />
                                )}
                                name="PhoneNumber"
                            />
                            {errors.PhoneNumber && <Text style={styles.inputError}>This field is required.</Text>}

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
                                    // secureTextEntry={passwordVisible}
                                    // right={<Input.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} color="#fff" style={styles.inputIcon} />}

                                    />
                                )}
                                name="Password"
                            />
                            {errors.Password && <Text style={styles.inputError}>This field is required.</Text>}

                        </View>

                        <View style={styles.LoginButtong}>
                            <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.buttonStyle}>
                                <Title style={styles.LoginButtongTittle}>SignUp</Title>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={skipHandler}><Title style={styles.creatAccount}>Skip</Title></TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>

            </ImageBackground>
        </View>

    )
}

export default SignupScreen;



// <View>
        //     <View style={{ flexDirection: 'row' }}>
        //         <BackButton goBack={navigation.goBack} Color={'#666666'} />
        //         <Text style={styles.signUpHeading}>Register</Text>
        //     </View>
        //     <View style={{ height: 50, marginTop: 20, alignItems: 'center' }}>
        //         <Text style={{ fontSize: 20, paddingTop: 15 }}>Sign Up Here !</Text>
        //     </View>
        //     <View style={{ marginTop: 10, width: '90%', alignSelf: 'center' }}>
        //         <Controller
        //             control={control}
        //             rules={{
        //                 required: true,
        //                 pattern: { value: /^([A-Za-z0-9_.]){3,12}$/ }
        //             }}
        //             render={({ field: { onChange, value } }) => (
        //                 <TextInput
        //                     onChangeText={onChange}
        //                     value={value}
        //                     label="First Name"
        //                     returnKeyType="next"
        //                     autoCapitalize="none"
        //                     autoCompleteType="FirstName"
        //                     textContentType="FirstName"
        //                     keyboardType="FirstName"

        //                 />
        //             )}
        //             name="FirstName"
        //         />
        //         {errors.FirstName && errors.FirstName.type === 'required' && <Text> this is required !</Text>}
        //         {errors.FirstName && errors.FirstName.type === 'pattern' && <Text> Please enter a valid First Name</Text>}

        //         <Controller
        //             control={control}
        //             rules={{
        //                 required: true,
        //                 pattern: { value: /^([A-Za-z0-9_.]){4,10}$/ }
        //             }}
        //             render={({ field: { onChange, value } }) => (
        //                 <TextInput
        //                     onChangeText={onChange}
        //                     value={value}
        //                     label="Last Name"
        //                     returnKeyType="next"
        //                     autoCapitalize="none"
        //                     autoCompleteType="LastName"
        //                     textContentType="LastName"
        //                     keyboardType="LastName"
        //                 />
        //             )}
        //             name="LastName"
        //         />
        //         {errors.LastName && errors.LastName.type === 'required' && <Text> this is required !</Text>}
        //         {errors.LastName && errors.LastName.type === 'pattern' && <Text> Please enter a valid Last Name </Text>}

        //         <Controller
        //             control={control}
        //             rules={{
        //                 required: true,
        //                 pattern: { value: /^([A-Za-z0-9_.])+@+[A-Za-z0-9_.]+.+[A-Za-z]{2,4}$/ }
        //             }}
        //             render={({ field: { onChange, value } }) => (
        //                 <TextInput
        //                     onChangeText={onChange}
        //                     value={value}
        //                     label="Email"
        //                     returnKeyType="next"
        //                     autoCapitalize="none"
        //                     autoCompleteType="email"
        //                     textContentType="emailAddress"
        //                     keyboardType="email-address"
        //                 />
        //             )}
        //             name="email"
        //         />
        //         {errors.email && errors.email.type === 'required' && <Text> this is required !</Text>}
        //         {errors.email && errors.email.type === 'pattern' && <Text> Please enter a valid email</Text>}

        //         <Controller
        //             control={control}
        //             rules={{
        //                 required: true,
        //                 pattern: { value: /^([0-9_.]){10,10}$/ }
        //             }}
        //             render={({ field: { onChange, value } }) => (
        //                 <TextInput
        //                     onChangeText={onChange}
        //                     value={value}
        //                     label="Phone Number"
        //                     returnKeyType="next"
        //                     autoCapitalize="none"
        //                     autoCompleteType="PhoneNumber"
        //                     textContentType="PhoneNumber"
        //                     keyboardType="numeric"
        //                 />
        //             )}
        //             name="PhoneNumber"
        //         />
        //         {errors.PhoneNumber && errors.PhoneNumber.type === 'required' && <Text> this is required !</Text>}
        //         {errors.PhoneNumber && errors.PhoneNumber.type === 'pattern' && <Text> Maximum 10 digit  Phone Number </Text>}

        //     </View>
        //     <View style={{ width: "90%", alignSelf: 'center', marginTop: 20, }}>
        //         <Button
        //             title="Register"
        //             color='#fb641b'
        //             onPress={handleSubmit(onSubmit)}
        //         />
        //     </View>
        // </View>