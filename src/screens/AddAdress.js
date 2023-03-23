import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Controller, useForm } from 'react-hook-form'
import TextInput from '../components/AccountInputHook'
import { ScrollView } from 'react-native-gesture-handler'
import { loginActions } from '../store/UserSlice'
import { useStyles } from '../styles/addadressResponsive';


const AddAddress = ({ navigation }) => {
    const add_Style = useStyles()
    const userAdd = useSelector(state => state.userData.userAddress);
    const dispatch = useDispatch();
    // console.log("recieved", userAdd)
    const { control, handleSubmit, reset, formState: { errors } } = useForm({

    })
    const onSubmit = data => {
        // console.log("datatata", data);
        let AddData = [...userAdd, {
            firstname: data.firstname,
            Lastname: data.Lastname,
            flate: data.flate,
            Apartment: data.Apartment,
            State: data.State,
            City: data.City,
            Pincode: data.Pincode,
            phone: data.phone
        }];

        dispatch(loginActions.useraddress(
            {
                userAddress: AddData
            }
        ));
        reset();
        navigation.navigate('address')
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
                                name="firstname"
                            />
                            {errors.firstname && errors.firstname.type === 'required' && <Text> this is required !</Text>}
                            {errors.firstname && errors.firstname.type === 'pattern' && <Text> please enter correct !</Text>}
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
                                name="Lastname"
                            />
                            {errors.Lastname && errors.Lastname.type === 'required' && <Text> this is required !</Text>}
                            {errors.Lastname && errors.Lastname.type === 'pattern' && <Text> please enter correct !</Text>}
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
                            name="flate"
                        />
                        {errors.flate && errors.flate.type === 'required' && <Text> this is required !</Text>}
                        {errors.flate && errors.flate.type === 'pattern' && <Text> please enter correct !</Text>}
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
                            name="Apartment"
                        />
                        {errors.Apartment && errors.Apartment.type === 'required' && <Text> this is required !</Text>}
                        {errors.Apartment && errors.Apartment.type === 'pattern' && <Text> please enter correct !</Text>}
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
                            name="Pincode"
                        />
                        {errors.Pincode && errors.Pincode.type === 'required' && <Text> this is required !</Text>}
                        {errors.Pincode && errors.Pincode.type === 'pattern' && <Text> please enter correct !</Text>}
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
                                    label="State"
                                    returnKeyType="next"
                                    autoCapitalize="none"
                                    autoCompleteType="State"
                                    textContentType="State"
                                    style={add_Style.firstname_text}
                                />
                            )}
                            name="State"
                        />
                        {errors.State && errors.State.type === 'required' && <Text> this is required !</Text>}
                        {errors.State && errors.State.type === 'pattern' && <Text> please enter correct !</Text>}
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
                            name="City"
                        />
                        {errors.City && errors.City.type === 'required' && <Text> this is required !</Text>}
                        {errors.City && errors.City.type === 'pattern' && <Text> please enter correct !</Text>}
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