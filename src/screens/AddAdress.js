import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import TextInput from '../components/AccountInputHook'

const AddAddress = () => {
    const { control, handleSubmit, reset, formState: { errors } } = useForm({

    })

    const onSubmit = (data) => {
        console.log("accountData", data);

        reset();
    }

    return (
        <View>

            <View style={styles.root_container}>
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
                                    style={{ height: 40 }}
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
                            pattern: { value: /^[a-zA-Z ]{2,40}$/ }
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                onChangeText={onChange}
                                value={value}
                                label="Phone Number"
                                returnKeyType="next"
                                autoCapitalize="none"
                                autoCompleteType="phone"
                                textContentType="phone"
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
                            pattern: { value: /^[a-zA-Z ]{2,40}$/ }
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
                            pattern: { value: /^[a-zA-Z ]{2,40}$/ }
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                onChangeText={onChange}
                                value={value}
                                label="Pincode"
                                returnKeyType="next"
                                autoCapitalize="none"
                                autoCompleteType="Pincode"
                                textContentType="Pincode"
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
            </View>
        </View>
    )
}

export default AddAddress

const styles = StyleSheet.create({
    root_container: {
        height: '90%',
        width: '90%',
        borderWidth: 0.5,
        borderRadius: 15,
        marginTop: 15,
        alignSelf: 'center'
    }
})