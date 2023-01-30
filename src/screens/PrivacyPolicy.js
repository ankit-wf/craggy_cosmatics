import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackButton from '../components/BackButton';

const PrivacyPolicy = ({ navigation }) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <BackButton goBack={navigation.goBack} />
                <Text style={styles.ReviewsTitle}>PRIVACY POLICY</Text>
            </View>
            <Text style={{ alignSelf: 'center' }}>Privacy Policy</Text>
        </View>
    )
}

export default PrivacyPolicy

const styles = StyleSheet.create({
    ReviewsTitle: {
        paddingTop: '11%',
        fontSize: 20,
        paddingLeft: '10%'
    },
})
