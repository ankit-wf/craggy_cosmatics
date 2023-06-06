import { Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Controller, useForm } from 'react-hook-form'
import { loginActions } from '../store/UserSlice'
import { ScrollView } from 'react-native-gesture-handler'
import TextInput from '../components/AccountInputHook'
import { useRoute } from '@react-navigation/native'
import { useStyles } from '../styles/addResponsive';
import CustomDropDown from '../components/CustomDropDown';
import DropDown from '../../Data/allState.json'

const EditAddress = ({ navigation }) => {
    const Edit_Style = useStyles();
    const route = useRoute();
    const index = route.params;
    const bllingData = useSelector(state => state.userData.user_data)
    const dispatch = useDispatch();
    const { control, handleSubmit, reset, formState: { errors } } = useForm({})
    useEffect(() => {
        {
            reset({
                first_name: bllingData.billing_address.first_name,
                last_name: bllingData.billing_address.last_name,
                address_1: bllingData.billing_address.address_1,
                address_2: bllingData.billing_address.address_2,
                state: bllingData.billing_address.state,
                city: bllingData.billing_address.city,
                postcode: bllingData.billing_address.postcode,
                phone: bllingData.billing_address.phone
            })
        }
    }, [])
    const onSubmit = data => {
        let AddData = [{
            index: index,
            first_name: data.first_name,
            last_name: data.last_name,
            address_1: data.address_1,
            address_2: data.address_2,
            state: data.state,
            city: data.city,
            postcode: data.postcode,
            phone: data.phone
        }];
        dispatch(loginActions.useraddress(
            {
                userAddress: AddData
            }
        ));
        navigation.goBack();
    }
    return (
        <View >
            <View style={Edit_Style.edit_container}>
                <ScrollView>
                    <View >
                        <View style={Edit_Style.width_container}>
                            <View style={Edit_Style.half_width}>
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
                                            keyboardType="text"
                                            style={Edit_Style.firstname_text}
                                        />
                                    )}
                                    name="first_name"
                                />
                                {errors.first_name && errors.first_name.type === 'required' && <Text style={Edit_Style.input_error}> this is required !</Text>}
                                {errors.first_name && errors.first_name.type === 'pattern' && <Text style={Edit_Style.input_error}> please enter correct !</Text>}
                            </View>
                            <View style={Edit_Style.half_width}>
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
                                            style={Edit_Style.firstname_text}
                                        />
                                    )}
                                    name="last_name"
                                />
                                {errors.last_name && errors.last_name.type === 'required' && <Text style={Edit_Style.input_error}> this is required !</Text>}
                                {errors.last_name && errors.last_name.type === 'pattern' && <Text style={Edit_Style.input_error}> please enter correct !</Text>}
                            </View>
                        </View>
                        <View style={Edit_Style.full_width}>
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
                                        keyboardType="numeric"
                                        style={Edit_Style.firstname_text}
                                    />
                                )}
                                name="phone"
                            />
                            {errors.phone && errors.phone.type === 'required' && <Text style={Edit_Style.input_error}> this is required !</Text>}
                            {errors.phone && errors.phone.type === 'pattern' && <Text style={Edit_Style.input_error}> please enter correct !</Text>}
                        </View>

                        <View style={Edit_Style.full_width}>
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
                                        style={Edit_Style.firstname_text}
                                    />
                                )}
                                name="address_1"
                            />
                            {errors.address_1 && errors.address_1.type === 'required' && <Text style={Edit_Style.input_error}> this is required !</Text>}
                            {errors.address_1 && errors.address_1.type === 'pattern' && <Text style={Edit_Style.input_error}> please enter correct !</Text>}
                        </View>

                        <View style={Edit_Style.full_width}>
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
                                        style={Edit_Style.firstname_text}
                                    />
                                )}
                                name="address_2"
                            />
                            {errors.address_2 && errors.address_2.type === 'required' && <Text style={Edit_Style.input_error}> this is required !</Text>}
                            {errors.address_2 && errors.address_2.type === 'pattern' && <Text style={Edit_Style.input_error}> please enter correct !</Text>}
                        </View>

                        <View style={Edit_Style.full_width}>
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
                                        style={Edit_Style.firstname_text}
                                    />
                                )}
                                name="postcode"
                            />
                            {errors.postcode && errors.postcode.type === 'required' && <Text style={Edit_Style.input_error}> this is required !</Text>}
                            {errors.postcode && errors.postcode.type === 'pattern' && <Text style={Edit_Style.input_error}> please enter correct !</Text>}
                        </View>

                        <View style={Edit_Style.full_width}>
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field: { onChange, value } }) => (
                                    < CustomDropDown
                                        defaultOption={{ key: value, value: value }}
                                        setSelected={onChange}
                                        data={DropDown}
                                        save="value"
                                        fontFamily='Lato'
                                    />
                                )}
                                name="state"
                            />
                        </View>
                        <View style={Edit_Style.full_width}>
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
                                        style={Edit_Style.firstname_text}
                                    />
                                )}
                                name="city"
                            />
                            {errors.city && errors.city.type === 'required' && <Text style={Edit_Style.input_error}> this is required !</Text>}
                            {errors.city && errors.city.type === 'pattern' && <Text style={Edit_Style.input_error}> please enter correct !</Text>}
                        </View>
                    </View>
                </ScrollView>
            </View>

            <TouchableOpacity style={Edit_Style.btn_root} onPress={handleSubmit(onSubmit)}>
                <Text style={Edit_Style.edit_btn_text}>Update</Text>
            </TouchableOpacity>
        </View>
    )
}
export default EditAddress
