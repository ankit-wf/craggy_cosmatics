import React, { useRef } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput as Input, Title } from 'react-native-paper';
import { useStyles } from '../styles/otpSignupResponsive';
import BackButton from '../components/BackButton';

const OtpScreen = ({ navigation }) => {
    const styles = useStyles()
    const firstInput = useRef();
    const seconInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const verifyHandler = () => {
        navigation.navigate('resetPassword')
    }
    return (
        <View style={styles.rootContainter}>
            <ImageBackground source={require('../../assets/images/login-bg.jpg')} resizeMode="cover" style={styles.loginBg}>
                <BackButton goBack={navigation.goBack} />
                <Image source={require('../../assets/images/logo-image.jpg')} style={styles.logoBackground} />
                <View style={styles.Containterlogin}>
                    <View style={styles.checkboxPassword}>
                        <View style={styles.Textinput_root}>
                            <TextInput
                                ref={firstInput}
                                onChangeText={text => { text && seconInput.current.focus() }}
                                maxLength={1}
                                keyboardType="number-pad"
                                style={styles.input_Style}
                            />
                            <TextInput
                                ref={seconInput}
                                onChangeText={text => { text ? thirdInput.current.focus() : firstInput.current.focus() }}
                                maxLength={1}
                                keyboardType="number-pad"
                                style={styles.input_Style}
                            />
                            <TextInput
                                ref={thirdInput}
                                onChangeText={text => { text ? fourthInput.current.focus() : seconInput.current.focus() }}
                                maxLength={1}
                                keyboardType="number-pad"
                                style={styles.input_Style}
                            />
                            <TextInput
                                ref={fourthInput}
                                onChangeText={text => { text ? fourthInput.current.focus() : thirdInput.current.focus() }}
                                maxLength={1}
                                keyboardType="number-pad"
                                style={styles.input_Style}
                            />
                        </View>
                    </View>
                    <View style={styles.LoginButtong}>
                        <TouchableOpacity style={styles.buttonStyle} onPress={verifyHandler}>
                            <Title style={styles.LoginButtongTittle}>VERIFY OTP</Title>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.loginBottom}>
                    <Text style={styles.needHelpBottom}>Need Help?</Text>
                    <TouchableOpacity><Text style={styles.contactUsBottom}> Contact us</Text></TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}
export default OtpScreen;
const styles = StyleSheet.create({
    borderStyleBase: {
        width: 30,
        height: 45
    },
    borderStyleHighLighted: {
        borderColor: "#03DAC6",
    },
    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
    },
    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
    },
    box: {
        width: 300,
        height: 55,
        marginVertical: 20,
        borderColor: 'red',
        borderWidth: 1,
    },
    styleInput: {
        height: 50,
        width: 50,
        borderRadius: 10,
        borderWidth: 0.5,
        fontWeight: "600",
        alignSelf: 'center',
        fontSize: 20,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        backgroundColor: '#f5f4f2',
    }
});
