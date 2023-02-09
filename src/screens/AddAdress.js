import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Controller, useForm } from 'react-hook-form'
import TextInput from '../components/AccountInputHook'
import { ScrollView } from 'react-native-gesture-handler'
import { loginActions } from '../store/UserSlice'


const AddAddress = ({ navigation }) => {
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
        navigation.navigate('Addresses')
    }
    return (
        <View>
            <View style={styles.root_container}>
                <ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ width: '45%' }}>
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
                                        State style={{ height: 40 }}
                                    />
                                )}
                                name="firstname"
                            />
                            {errors.firstname && errors.firstname.type === 'required' && <Text> this is required !</Text>}
                            {errors.firstname && errors.firstname.type === 'pattern' && <Text> please enter correct !</Text>}
                        </View>
                        <View style={{ width: '45%' }}>
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
                                        style={{ height: 40 }}
                                    />
                                )}
                                name="Lastname"
                            />
                            {errors.Lastname && errors.Lastname.type === 'required' && <Text> this is required !</Text>}
                            {errors.Lastname && errors.Lastname.type === 'pattern' && <Text> please enter correct !</Text>}
                        </View>
                    </View>

                    <View style={{ width: '95%', alignSelf: 'center' }}>
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
                                    style={{ height: 40 }}
                                />
                            )}
                            name="phone"
                        />
                        {errors.phone && errors.phone.type === 'required' && <Text> this is required !</Text>}
                        {errors.phone && errors.phone.type === 'pattern' && <Text> please enter correct !</Text>}
                    </View>

                    <View style={{ width: '95%', alignSelf: 'center' }}>
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
                                    style={{ height: 40 }}
                                />
                            )}
                            name="flate"
                        />
                        {errors.flate && errors.flate.type === 'required' && <Text> this is required !</Text>}
                        {errors.flate && errors.flate.type === 'pattern' && <Text> please enter correct !</Text>}
                    </View>

                    <View style={{ width: '95%', alignSelf: 'center' }}>
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
                                    style={{ height: 40 }}
                                />
                            )}
                            name="Apartment"
                        />
                        {errors.Apartment && errors.Apartment.type === 'required' && <Text> this is required !</Text>}
                        {errors.Apartment && errors.Apartment.type === 'pattern' && <Text> please enter correct !</Text>}
                    </View>

                    <View style={{ width: '95%', alignSelf: 'center' }}>
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
                                    style={{ height: 40 }}
                                />
                            )}
                            name="Pincode"
                        />
                        {errors.Pincode && errors.Pincode.type === 'required' && <Text> this is required !</Text>}
                        {errors.Pincode && errors.Pincode.type === 'pattern' && <Text> please enter correct !</Text>}
                    </View>

                    <View style={{ width: '95%', alignSelf: 'center' }}>
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
                                    style={{ height: 40 }}
                                />
                            )}
                            name="State"
                        />
                        {errors.State && errors.State.type === 'required' && <Text> this is required !</Text>}
                        {errors.State && errors.State.type === 'pattern' && <Text> please enter correct !</Text>}
                    </View>

                    <View style={{ width: '95%', alignSelf: 'center' }}>
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
                                    style={{ height: 40 }}
                                />
                            )}
                            name="City"
                        />
                        {errors.City && errors.City.type === 'required' && <Text> this is required !</Text>}
                        {errors.City && errors.City.type === 'pattern' && <Text> please enter correct !</Text>}
                    </View>
                </ScrollView>
            </View>

            <TouchableOpacity style={styles.btn_root} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.btn_text}>Save And Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddAddress;
const styles = StyleSheet.create({
    root_container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        height: '85%',
        width: '90%',
        borderWidth: 0.5,
        borderRadius: 15,
        marginTop: "8%",
        alignSelf: 'center',
        backgroundColor: '#fff'
    },
    btn_root: {
        height: 45,
        width: 200,
        backgroundColor: 'black',
        marginTop: 10,
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    btn_text: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 16
    }
})