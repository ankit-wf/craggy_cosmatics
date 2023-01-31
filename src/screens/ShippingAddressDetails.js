import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import BackButton from '../components/BackButton'
import Input from '../components/InputHook'
import TextInput from '../components/AccountInputHook'

const ShippingAddressDetails = ({ navigation }) => {

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        // defaultValues: {
        //     FirstName: '',
        //     LastName: '',
        //     CompanyName: '',
        //     StreetName: '',
        //     Apartment: '',
        //     TownCity: '',
        //     Pincode: '',
        //     PhoneNumber: '',
        //     email: '',
        // }
    })

    const onSubmit = data => {
        console.log("datatata", data);
        reset();
    }

    return (
        <View>

            <ScrollView>
                <View style={{ marginTop: 20, width: '90%', alignSelf: 'center' }}>

                    <View style={{ height: 940 }}>

                        {/* First Name */}
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
                                    autoCompleteType="FirstName"
                                    textContentType="FirstName"
                                    keyboardType="FirstName"
                                />
                            )}
                            name="FirstName"
                        />
                        {errors.FirstName && errors.FirstName.type === 'required' && <Text> this is required !</Text>}
                        {errors.FirstName && errors.FirstName.type === 'pattern' && <Text> Please enter a valid FirstName</Text>}

                        {/* Last Name */}
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
                                    autoCompleteType="LastName"
                                    textContentType="LastName"
                                    keyboardType="LastName"
                                />
                            )}
                            name="LastName"
                        />
                        {errors.LastName && errors.LastName.type === 'required' && <Text> this is required !</Text>}
                        {errors.LastName && errors.LastName.type === 'pattern' && <Text> Please enter a valid LastName</Text>}

                        {/* Company Name */}
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
                                    label="Company Name (Optional)"
                                    returnKeyType="next"
                                    autoCapitalize="none"
                                    autoCompleteType="CompanyName"
                                    textContentType="CompanyName"
                                    keyboardType="CompanyName"
                                />
                            )}
                            name="CompanyName"
                        />
                        {errors.CompanyName && errors.CompanyName.type === 'required' && <Text> this is required !</Text>}
                        {errors.CompanyName && errors.CompanyName.type === 'pattern' && <Text> Please enter a valid CompanyName</Text>}

                        {/* Street Address  */}
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
                                    label="House number and street name"
                                    returnKeyType="next"
                                    autoCapitalize="none"
                                    autoCompleteType="StreetName"
                                    textContentType="StreetName"
                                    keyboardType="StreetName"
                                />
                            )}
                            name="StreetName"
                        />
                        {errors.StreetName && errors.StreetName.type === 'required' && <Text> this is required !</Text>}
                        {errors.StreetName && errors.StreetName.type === 'pattern' && <Text> Please enter a valid StreetName</Text>}

                        {/* Apartment  */}
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
                                    label="Apartment, suite, unit, etc.(optional)"
                                    returnKeyType="next"
                                    autoCapitalize="none"
                                    autoCompleteType="Apartment"
                                    textContentType="Apartment"
                                    keyboardType="Apartment"
                                />
                            )}
                            name="Apartment"
                        />
                        {errors.Apartment && errors.Apartment.type === 'required' && <Text> this is required !</Text>}
                        {errors.Apartment && errors.Apartment.type === 'pattern' && <Text> Please enter a valid Apartment</Text>}

                        {/* Town / City   */}
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
                                    label="Town / City "
                                    returnKeyType="next"
                                    autoCapitalize="none"
                                    autoCompleteType="TownCity"
                                    textContentType="TownCity"
                                    keyboardType="TownCity"
                                />
                            )}
                            name="TownCity"
                        />
                        {errors.TownCity && errors.TownCity.type === 'required' && <Text> this is required !</Text>}
                        {errors.TownCity && errors.TownCity.type === 'pattern' && <Text> Please enter a valid TownCity</Text>}

                        {/* Postcode / ZIP */}
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                                pattern: { value: /^[0-9]{6,6}$/ }
                            }}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    onChangeText={onChange}
                                    value={value}
                                    label="Postcode / ZIP"
                                    returnKeyType="next"
                                    autoCapitalize="none"
                                    autoCompleteType="Pincode"
                                    textContentType="Pincode"
                                    keyboardType="numeric"
                                />
                            )}
                            name="Pincode"
                        />
                        {errors.Pincode && errors.Pincode.type === 'required' && <Text> this is required !</Text>}
                        {errors.Pincode && errors.Pincode.type === 'pattern' && <Text> Please enter a valid Pincode</Text>}


                        <View style={styles.handleBtnRoot}>
                            <Button
                                style={{ width: "100%", }}
                                title="Save Address"
                                color='#fb641b'
                                onPress={handleSubmit(onSubmit)}
                            />
                        </View>
                    </View>

                </View>
            </ScrollView>

        </View >

    );
}
export default ShippingAddressDetails;

const styles = StyleSheet.create({
    handleBtnRoot: {
        // width: "100%",
        // marginHorizontal: '5%',
        marginTop: 20
    }

});
