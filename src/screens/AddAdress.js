import { StyleSheet, Text, TouchableOpacity, View, Select, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Controller, useForm } from 'react-hook-form'
import TextInput from '../components/AccountInputHook'
import { ScrollView } from 'react-native-gesture-handler'
import { loginActions } from '../store/UserSlice'
import { useStyles } from '../styles/addadressResponsive';
import CustomDropDown from '../components/CustomDropDown';
import Dropdown from '../../Data/allState.json'
import { USER_LOGIN_API, CONSUMER_KEY } from "@env";

const AddAddress = ({ navigation }) => {
    const add_Style = useStyles()
    const userAdd = useSelector(state => state.userData.userAddress);
    const dispatch = useDispatch();
    // console.log("userAdd", userAdd)
    const { control, handleSubmit, reset, formState: { errors } } = useForm({

    })
    // let AddData = []
    const onSubmit = data => {
        axios({
            method: 'post',
            url: USER_LOGIN_API,
            data: {
                // username: data.userName,
                // password: data.password
                first_name: data.first_name,
                last_name: data.last_name,
                address_1: data.address_1,
                address_2: data.address_2,
                city: data.city,
                state: data.state,
                // "country": "IN",
                postcode: data.postcode,
                phone: data.phone
            },
            headers: {
                'Content-Type': 'application/json',
                'consumer_key': CONSUMER_KEY
            }
        }).then((res) => {
            // console.log("gghghghgh", res.config.data)
            if (res.status === 200) {
                const e = res.config.data
                const d = JSON.parse(e)
                let AddData = [...userAdd, {
                    first_name: d.first_name,
                    last_name: d.last_name,
                    address_1: d.address_1,
                    address_2: d.address_2,
                    state: d.state,
                    city: d.city,
                    postcode: d.postcode,
                    phone: d.phone
                }];
                // console.log("AddData", AddData)
                dispatch(loginActions.useraddress(
                    {
                        userAddress: AddData
                    }
                ));
                reset();
                navigation.navigate('address')
            }
        })
        // console.log("ggggggg", data.State);
        // let AddData = [...userAdd, {
        //     firstname: res.config.data.firstname,
        //     Lastname: res.config.data.last_name,
        //     flate: res.config.data.address_1,
        //     Apartment: res.config.data.address_2,
        //     State: res.config.data.state,
        //     City: res.config.data.city,
        //     Pincode: res.config.data.postcode,
        //     phone: res.config.data.phone
        // }];

        // dispatch(loginActions.useraddress(
        //     {
        //         userAddress: AddData
        //     }
        // ));
        // reset();
        // navigation.navigate('address')
    }
    return (
        <View>
            <View style={add_Style.root_container}>
                <ScrollView>
                    <View style={add_Style.first_last_root}>
                        <View style={add_Style.first_input}>
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
                                        keyboardType="text"
                                        style={add_Style.firstname_text}
                                    />
                                )}
                                name="first_name"
                            />
                            {errors.first_name && errors.first_name.type === 'required' && <Text> this is required !</Text>}
                            {errors.first_name && errors.first_name.type === 'pattern' && <Text> please enter correct !</Text>}
                        </View>
                        <View style={add_Style.last_input}>
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
                                        autoCompleteType="Lastname"
                                        textContentType="Lastname"
                                        keyboardType="text"
                                        style={add_Style.firstname_text}
                                    />
                                )}
                                name="last_name"
                            />
                            {errors.last_name && errors.last_name.type === 'required' && <Text> this is required !</Text>}
                            {errors.last_name && errors.last_name.type === 'pattern' && <Text> please enter correct !</Text>}
                        </View>
                    </View>

                    <View style={add_Style.other_input}>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                                pattern: { value: /^[0-9]{10,10}$/ }
                            }} Pincode
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    onChangeText={onChange}
                                    value={value}
                                    label="Phone Number"
                                    returnKeyType="next"
                                    autoCapitalize="none"
                                    autoCompleteType="phone"
                                    textContentType="phone"
                                    keyboardType="numeric"
                                    style={add_Style.firstname_text}
                                />
                            )}
                            name="phone"
                        />
                        {errors.phone && errors.phone.type === 'required' && <Text> this is required !</Text>}
                        {errors.phone && errors.phone.type === 'pattern' && <Text> please enter correct !</Text>}
                    </View>

                    <View style={add_Style.other_input}>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                                pattern: { value: /^[a-zA-Z,0-9 ]{2,10}$/ }
                            }}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    onChangeText={onChange}
                                    value={value}
                                    label="Flate/House Number"
                                    returnKeyType="next"
                                    autoCapitalize="none"
                                    autoCompleteType="flate"
                                    textContentType="flate"
                                    style={add_Style.firstname_text}
                                />
                            )}
                            name="address_1"
                        />
                        {errors.address_1 && errors.address_1.type === 'required' && <Text> this is required !</Text>}
                        {errors.address_1 && errors.address_1.type === 'pattern' && <Text> please enter correct !</Text>}
                    </View>

                    <View style={add_Style.other_input}>
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
                                    label="Apartment/Area/Locality/Road"
                                    returnKeyType="next"
                                    autoCapitalize="none"
                                    autoCompleteType="Apartment"
                                    textContentType="Apartment"
                                    style={add_Style.firstname_text}
                                />
                            )}
                            name="address_2"
                        />
                        {errors.address_2 && errors.address_2.type === 'required' && <Text> this is required !</Text>}
                        {errors.address_2 && errors.address_2.type === 'pattern' && <Text> please enter correct !</Text>}
                    </View>

                    <View style={add_Style.other_input}>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                                pattern: { value: /^[0-9 ]{6,6}$/ }
                            }}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    onChangeText={onChange}
                                    value={value}
                                    label="Pincode"
                                    returnKeyType="next"
                                    autoCapitalize="none"
                                    autoCompleteType="Pincode"
                                    keyboardType="numeric"
                                    style={add_Style.firstname_text}
                                />
                            )}
                            name="postcode"
                        />
                        {errors.postcode && errors.postcode.type === 'required' && <Text> this is required !</Text>}
                        {errors.postcode && errors.postcode.type === 'pattern' && <Text> please enter correct !</Text>}
                    </View>

                    <View style={add_Style.other_input}>
                        <Controller
                            name="state"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value } }) => (
                                < CustomDropDown
                                    setSelected={onChange}
                                    data={Dropdown}
                                    save="value"

                                />
                            )}
                        />

                        {/* {errors.state && errors.state.type === 'required' && <Text> this is required !</Text>}
                        {errors.state && errors.state.type === 'pattern' && <Text> please enter correct !</Text>} */}
                    </View>

                    <View style={add_Style.other_input}>
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
                                    label="City"
                                    returnKeyType="next"
                                    autoCapitalize="none"
                                    autoCompleteType="City"
                                    textContentType="City"
                                    style={add_Style.firstname_text}
                                />
                            )}
                            name="city"
                        />
                        {errors.city && errors.city.type === 'required' && <Text> this is required !</Text>}
                        {errors.city && errors.city.type === 'pattern' && <Text> please enter correct !</Text>}
                    </View>
                </ScrollView>
            </View>

            <TouchableOpacity style={add_Style.btn_root} onPress={handleSubmit(onSubmit)}>
                <Text style={add_Style.btn_text}>Save And Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddAddress;