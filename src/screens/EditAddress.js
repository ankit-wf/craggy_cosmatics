import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Controller, useForm } from 'react-hook-form'
import { loginActions } from '../store/UserSlice'
import { ScrollView } from 'react-native-gesture-handler'
import TextInput from '../components/AccountInputHook'
import { useRoute } from '@react-navigation/native'
import { useStyles } from '../styles/addResponsive';
import CustomDropDown from '../components/CustomDropDown';
import DropDown from '../../Data/allState.json'
import { USER_LOGIN_API, CONSUMER_KEY } from "@env";

const EditAddress = ({ navigation }) => {
    const Edit_Style = useStyles();
    const route = useRoute();
    const index = route.params;
    // console.log("iiiinnnnddddxxx", index)
    // const userAdd = useSelector(state => state.userData.userAddress);
    const bllingData = useSelector(state => state.userData.user_data)
    const dispatch = useDispatch();
    // console.log("recieved", userAdd)
    const { control, handleSubmit, reset, formState: { errors } } = useForm({

    })
    // let d = {}
    useEffect(() => {
        {
            // userAdd.map((v, i) => {
            // console.log("vvvgggg", v.State)
            // d = DropDown.find((el) =>
            //     el.value == v.State
            //     // el.City === "mohali"
            //     // el.id == ab.id
            //     // console.log("jjhhgg", el.value == v.State)
            // )
            // console.log("jjhhgg", d.label)
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
            // })
        }
    }, [])
    // console.log("dddddddd", d)
    const onSubmit = data => {
        // console.log("datatata", data.State);
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
        // console.log("dddddd", AddData)
        dispatch(loginActions.useraddress(
            {
                userAddress: AddData
            }
        ));
        navigation.goBack();
        // navigation.navigate('address')
        // reset();

        // axios({
        //     method: 'post',
        //     url:USER_LOGIN_API,
        //     data: {
        //         ID: index,
        //         first_name: data.first_name,
        //         last_name: data.last_name,
        //         address_1: data.address_1,
        //         address_2: data.address_2,
        //         state: data.state,
        //         city: data.city,
        //         postcode: data.postcode,
        //         phone: data.phone

        //     },
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'consumer_key': CONSUMER_KEY
        //     }


        // }).then((res) => {
        //     console.log("send",res.data);
        //     if (res.data.data === "Data saved successfully") {
        //         Alert.alert(
        //             "Alert Title",
        //             "Data Updated Successfully",
        //             [
        //                 {
        //                     text: "Cancel",
        //                     onPress: () => console.log("Cancel Pressed"),
        //                     style: "cancel"
        //                 },
        //                 { text: "OK", onPress: () => navigation.navigate("dash") }
        //             ])

        //     }
        // })
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
                                    // pattern: { value: /^[a-zA-Z ]{2,40}$/ }
                                }}
                                render={({ field: { onChange, value } }) => (
                                    // <View style={{ width: '100%', borderWidth: 1 }}>
                                    < CustomDropDown
                                        defaultOption={{ key: value, value: value }}
                                        setSelected={onChange}
                                        data={DropDown}
                                        save="value"
                                        fontFamily='Lato'
                                    />
                                    // </View>
                                )}
                                name="state"
                            />
                            {/* {errors.state && errors.state.type === 'required' && <Text style={Edit_Style.input_error}> this is required !</Text>}
                                    {errors.state && errors.state.type === 'pattern' && <Text style={Edit_Style.input_error}> please enter correct !</Text>} */}
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
                    {/* ) */}
                    {/* })} */}
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