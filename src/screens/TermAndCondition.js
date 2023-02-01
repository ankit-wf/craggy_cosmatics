import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackButton from '../components/BackButton';

const TermAndCondition = ({ navigation }) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <BackButton goBack={navigation.goBack} Color={'#666666'} />
                <Text style={styles.ReviewsTitle}>TERM AND CONDITION</Text>
            </View>
            <Text style={{ alignSelf: 'center' }}>Term And Condition</Text>
        </View>
    )
}

export default TermAndCondition

const styles = StyleSheet.create({
    ReviewsTitle: {
        paddingTop: '11%',
        fontSize: 20,
        paddingLeft: '10%'
    },
})