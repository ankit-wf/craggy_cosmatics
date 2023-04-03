import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Controller, useForm } from 'react-hook-form'
import { loginActions } from '../store/UserSlice'
import { ScrollView } from 'react-native-gesture-handler'
import TextInput from '../components/AccountInputHook'
import { useRoute } from '@react-navigation/native'
import { useStyles } from '../styles/addResponsive';

const EditAddress = ({ navigation }) => {
    const Edit_Style = useStyles();
    const route = useRoute();
    const index = route.params;
    // console.log("iiiinnnnddddxxx", index)
    const userAdd = useSelector(state => state.userData.userAddress);
    const dispatch = useDispatch();
    // console.log("recieved", userAdd)
    const { control, handleSubmit, reset, formState: { errors } } = useForm({

    })
    useEffect(() => {
        {
            userAdd.map((v, i) => {
                // console.log("vvvgggg", v)
                reset({
                    firstname: v.firstname,
                    Lastname: v.Lastname,
                    flate: v.flate,
                    Apartment: v.Apartment,
                    State: v.State,
                    City: v.City,
                    Pincode: v.Pincode,
                    phone: v.phone
                })
            })
        }
    }, [])
    const onSubmit = data => {
        // console.log("datatata", data);
        let AddData = [{
            index: index,
            firstname: data.firstname,
            Lastname: data.Lastname,
            flate: data.flate,
            Apartment: data.Apartment,
            State: data.State,
            City: data.City,
            Pincode: data.Pincode,
            phone: data.phone
        }];
        // console.log("dddddd", AddData)

        dispatch(loginActions.useraddress(
            {
                userAddress: AddData
            }
        ));
        navigation.goBack();
        // navigation.navigate('address')
        // reset();
    }
    return (
        <View >
            <View style={Edit_Style.edit_container}>
                <ScrollView>
                    {userAdd.map((v, i) => {
                        return (

                            <View key={i}>
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
                                                    // textContentType="firstname"
                                                    keyboardType="text"
                                                    style={Edit_Style.firstname_text}
                                                />
                                            )}
                                            name="firstname"
                                        />
                                        {errors.firstname && errors.firstname.type === 'required' && <Text style={Edit_Style.input_error}> this is required !</Text>}
                                        {errors.firstname && errors.firstname.type === 'pattern' && <Text style={Edit_Style.input_error}> please enter correct !</Text>}
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
                                                    // style={{ height: 40 }}
                                                    style={Edit_Style.firstname_text}
                                                />
                                            )}
                                            name="Lastname"
                                        />
                                        {errors.Lastname && errors.Lastname.type === 'required' && <Text style={Edit_Style.input_error}> this is required !</Text>}
                                        {errors.Lastname && errors.Lastname.type === 'pattern' && <Text style={Edit_Style.input_error}> please enter correct !</Text>}
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
                                                // textContentType="phone"
                                                keyboardType="numeric"
                                                // style={{ height: 40 }}
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
                                                // style={{ height: 40 }}
                                                style={Edit_Style.firstname_text}
                                            />
                                        )}
                                        name="flate"
                                    />
                                    {errors.flate && errors.flate.type === 'required' && <Text style={Edit_Style.input_error}> this is required !</Text>}
                                    {errors.flate && errors.flate.type === 'pattern' && <Text style={Edit_Style.input_error}> please enter correct !</Text>}
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
                                                // style={{ height: 40 }}
                                                style={Edit_Style.firstname_text}
                                            />
                                        )}
                                        name="Apartment"
                                    />
                                    {errors.Apartment && errors.Apartment.type === 'required' && <Text style={Edit_Style.input_error}> this is required !</Text>}
                                    {errors.Apartment && errors.Apartment.type === 'pattern' && <Text style={Edit_Style.input_error}> please enter correct !</Text>}
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
                                                // style={{ height: 40 }}
                                                style={Edit_Style.firstname_text}
                                            />
                                        )}
                                        name="Pincode"
                                    />
                                    {errors.Pincode && errors.Pincode.type === 'required' && <Text style={Edit_Style.input_error}> this is required !</Text>}
                                    {errors.Pincode && errors.Pincode.type === 'pattern' && <Text style={Edit_Style.input_error}> please enter correct !</Text>}
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
                                                label="State"
                                                returnKeyType="next"
                                                autoCapitalize="none"
                                                autoCompleteType="State"
                                                textContentType="State"
                                                // style={{ height: 40 }}
                                                style={Edit_Style.firstname_text}
                                            />
                                        )}
                                        name="State"
                                    />
                                    {errors.State && errors.State.type === 'required' && <Text style={Edit_Style.input_error}> this is required !</Text>}
                                    {errors.State && errors.State.type === 'pattern' && <Text style={Edit_Style.input_error}> please enter correct !</Text>}
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
                                                // style={{ height: 40 }}
                                                style={Edit_Style.firstname_text}
                                            />
                                        )}
                                        name="City"
                                    />
                                    {errors.City && errors.City.type === 'required' && <Text style={Edit_Style.input_error}> this is required !</Text>}
                                    {errors.City && errors.City.type === 'pattern' && <Text style={Edit_Style.input_error}> please enter correct !</Text>}
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>

            <TouchableOpacity style={Edit_Style.btn_root} onPress={handleSubmit(onSubmit)}>
                <Text style={Edit_Style.edit_btn_text}>Update</Text>
            </TouchableOpacity>
        </View>
    )
}
export default EditAddress

// const styles = StyleSheet.create({
    // root_container: {
    //     height: '88%',
    //     width: '90%',
    //     borderWidth: 0.5,
    //     borderRadius: 15,
    //     marginTop: 15,
    //     alignSelf: 'center',
    //     backgroundColor: '#fff'
    // },
    // btn_root: {
    //     height: 45,
    //     width: 200,
    //     backgroundColor: 'black',
    //     marginTop: 10,
    //     borderRadius: 10,
    //     alignSelf: 'center',
    //     justifyContent: 'center'
    // },
    // btn_text: {
    //     color: '#fff',
    //     alignSelf: 'center',
    //     fontSize: 16
    // },
    // firstname_text: {
    //     // height: 40,
    //     borderTopWidth: 0,
    //     borderLeftWidth: 0,
    //     borderRightWidth: 0,
    //     borderBottomWidth: 0,
    //     padding: 0,
    // }
// })