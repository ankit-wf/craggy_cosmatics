import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import TextInput from '../components/AccountInputHook'
import { TextInput as Input } from 'react-native-paper'

const MyProfileScreen = ({ navigation }) => {
    const [passwordVisible, setPasswordVisible] = useState(true);
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            firstname: '',
            lastname: '',
            displayname: '',
            email: '',
            passwordchange: '',
            newpassword: '',
            confirmNewPassword: '',
        }
    })
    const onSubmit = (data) => {
        console.log("accountData", data);
        reset();
    }

    return (
        <View>
            <ScrollView>
                <View style={styles.controllerRoot}>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                            pattern: { value: /^[a-zA-Z ]{2,40}$/ }
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                onChangeText={onChange}
                                value={value}
                                label="First Name"
                                returnKeyType="next"
                                autoCapitalize="none"
                                autoCompleteType="firstname"
                                textContentType="firstname"
                            />
                        )}
                        name="firstname"
                    />
                    {errors.firstname && errors.firstname.type === 'required' && <Text> this is required !</Text>}
                    {errors.firstname && errors.firstname.type === 'pattern' && <Text> please enter correct !</Text>}
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                            pattern: { value: /^[a-zA-Z ]{2,40}$/ }
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                onChangeText={onChange}
                                value={value}
                                label="Last Name"
                                returnKeyType="next"
                                autoCapitalize="none"
                                autoCompleteType="lastname"
                                textContentType="lastname"
                                keyboardType="lastname"
                            />
                        )}
                        name="lastname"
                    />
                    {errors.lastname && errors.lastname.type === 'required' && <Text> this is required !</Text>}
                    {errors.lastname && errors.lastname.type === 'pattern' && <Text> please enter correct last name!</Text>}
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                            pattern: { value: /^[a-zA-Z ]{8,40}$/ }
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                onChangeText={onChange}
                                value={value}
                                label="Display Name"
                                returnKeyType="next"
                                autoCapitalize="none"
                                autoCompleteType="displayname"
                                textContentType="displayname"
                                keyboardType="displayname"
                            />
                        )}
                        name="displayname"
                    />
                    <Text>This will be how your name will be displayed in the account section and in reviews</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                            pattern: { value: /^([A-Za-z0-9_.])+@+[A-Za-z0-9_.]+.+[A-Za-z]{2,4}$/ }
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                onChangeText={onChange}
                                value={value}
                                label="Email Address"
                                returnKeyType="next"
                                autoCapitalize="none"
                                autoCompleteType="email"
                                textContentType="email"
                                keyboardType="email-address"
                            />
                        )}
                        name="email"
                    />
                    {errors.email && errors.email.type === 'required' && <Text> this is required !</Text>}
                    {errors.email && errors.email.type === 'pattern' && <Text> please enter valid email!</Text>}
                    <Text style={styles.changePassword}>Password change</Text>
                    <Controller
                        control={control}
                        rules={{
                            maxLength: 100,
                            required: true,
                            pattern: { value: /[0-9]{8,}$/ }
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                onChangeText={onChange}
                                value={value}
                                autoCorrect={false}
                                label="Current Password"
                                returnKeyType="done"
                                autoCompleteType="passwordchange"
                                textContentType="passwordchange"
                                keyboardType="numeric"
                                secureTextEntry={passwordVisible}
                                right={<Input.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
                            />
                        )}
                        name="passwordchange"
                    />
                    <Text style={styles.changePassword}>New Password</Text>
                    <Controller
                        control={control}
                        rules={{
                            maxLength: 100,
                            required: true,
                            pattern: { value: /[0-9]{8,}$/ }
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                onChangeText={onChange}
                                value={value}
                                autoCorrect={false}
                                label="New Password"
                                returnKeyType="done"
                                autoCompleteType="newpassword"
                                textContentType="newpassword"
                                keyboardType="numeric"
                                secureTextEntry={passwordVisible}
                                right={<Input.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
                            />
                        )}
                        name="newpassword"
                    />
                    <Text style={styles.changePassword}>Confirm New Password</Text>
                    <Controller
                        control={control}
                        rules={{
                            maxLength: 100,
                            required: true,
                            pattern: { value: /[0-9]{8,}$/ }
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                onChangeText={onChange}
                                value={value}
                                autoCorrect={false}
                                label="Confirm New Password"
                                returnKeyType="done"
                                autoCompleteType="confirmNewPassword"
                                textContentType="confirmNewPassword"
                                keyboardType="numeric"
                                secureTextEntry={passwordVisible}
                                right={<Input.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
                            />
                        )}
                        name="confirmNewPassword"
                    />
                    <View style={styles.btnRoot}>
                        <Button
                            title="Save changes"
                            color='#fb641b'
                            onPress={handleSubmit(onSubmit)}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
export default MyProfileScreen;
const styles = StyleSheet.create({
    controllerRoot: {
        width: '90%',
        alignSelf: 'center',
        height: 870,
    },
    changePassword: {
        fontSize: 16,
        fontWeight: '500'
    },
    btnRoot: {
        width: "40%",
        marginTop: 10,
        marginBottom: 20
    },
    searchRoot: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    searchImgRoot: {
        marginTop: 35,
        marginRight: '35%',
        height: 50,
        width: '80%',
    },
    mycartText: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 18,
        color: '#333333',
        paddingTop: 13
    },
})