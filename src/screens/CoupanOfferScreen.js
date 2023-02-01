import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackButton from '../components/BackButton'

const CoupanOfferScreen = ({ navigation }) => {
    return (
        <View>
            {/* <View style={{ flexDirection: 'row', }}>

                <BackButton goBack={navigation.goBack} Color={'#666666'} />
                <Text style={styles.deliveryText}>OFFERS AND COUPAN</Text>
            </View> */}
            <Text style={styles.deliveryText}>OFFERS AND COUPAN</Text>

        </View>
    )
}

export default CoupanOfferScreen;

const styles = StyleSheet.create({
    deliveryText: {
        fontSize: 20,
        alignSelf: 'center',
        paddingTop: 35,
        paddingLeft: '12%'
    }

})