import { Appbar, DarkTheme, DefaultTheme, Provider, Surface, ThemeProvider, } from "react-native-paper";
import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import DropDown from "react-native-paper-dropdown";

const ShippingAddressDetails = () => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [gender, setGender] = useState("");
    const genderList = [
        {
            label: "Male",
            value: "male",
        },
        {
            label: "Female",
            value: "female",
        },
        {
            label: "Others",
            value: "others",
        },
    ];


    return (
        <Provider>
            <SafeAreaView style={styles.safeContainerStyle}>
                <DropDown
                    label={"Gender"}
                    mode={"outlined"}
                    visible={showDropDown}
                    showDropDown={() => setShowDropDown(true)}
                    onDismiss={() => setShowDropDown(false)}
                    value={gender}
                    setValue={setGender}
                    list={genderList}
                />
            </SafeAreaView>
        </Provider>
    );
}
export default ShippingAddressDetails;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
    spacerStyle: {
        marginBottom: 15,
    },
    safeContainerStyle: {
        marginTop: 25,
        alignSelf: 'center',
        width: '90%'
        // flex: 1,
        // margin: 20,
        // justifyContent: "center",
    },
});

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const ShippingAddressDetails = () => {

//     return (
//         <View>
//             <Text>ShippingAddressDetails</Text>
//         </View>
//     )
// }

// export default ShippingAddressDetails;

// const styles = StyleSheet.create({})