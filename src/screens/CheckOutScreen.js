import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
// import BackButton from '../../src/components/BackButton'
// import { RadioButton } from 'react-native-paper'

const CheckOutScreen = ({ navigation }) => {
    // const [checked, setChecked] = useState('ok');
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View>
                {/* <BackButton goBack={navigation.goBack} Color={'#666666'} /> */}
                <Text style={styles.pymentHeading}>GetPyment Method</Text>
            </View>
            {/* <View style={styles.RadioButtonRoot}>
                <View style={styles.btnTextRoot}>
                    <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                    />
                    <Text>Okkk</Text>
                </View>
                <View>
                    <RadioButton
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                    />
                    <Text>Okkk</Text>
                </View>
            </View> */}
        </View>
    )
}

export default CheckOutScreen;

const styles = StyleSheet.create({
    pymentHeading: {
        fontSize: 20,
        alignSelf: 'flex-end',
        paddingLeft: 20,
        lineHeight: 35
    },
    RadioButtonRoot: {
        margin: 20,

    },
    btnTextRoot: {

    }
})