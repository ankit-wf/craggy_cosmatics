import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const HotOfferScreen = () => {
    const [details, setDetails] = useState(false)
    const detailsHandle = () => {
        setDetails(!details);
    }

    return (
        <View style={styles.root_container}>
            <View style={styles.inner_root}>

                <View style={styles.off_root}>
                    <View style={{ width: '35%', borderRightWidth: 2, borderRightColor: '#D3D3D3', justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ color: 'green', fontSize: 23, fontWeight: '800' }}>1000</Text>
                        <Text style={{ color: 'green', fontSize: 23, fontWeight: '800' }}>OFF</Text>
                    </View>
                    <View style={{ width: '65%', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 20 }} >
                        <Text>On minimum purchase of Rs.0</Text>
                        <Text>Code: XYZ1000 </Text>
                    </View>
                </View>

                <View style={{ backgroundColor: 'white', height: 40, width: '100%', flexDirection: 'row', }}>
                    <View style={{ width: '65%', justifyContent: 'center', alignItems: 'center', borderTopColor: '#D3D3D3', borderTopWidth: 2, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15, }}>Expiry :</Text>
                        <Text style={{ fontSize: 15, fontWeight: '600', }}> JAN 31 2023</Text>
                    </View>
                    <View style={{ width: '35%', justifyContent: 'center', alignItems: 'center', borderTopColor: '#D3D3D3', borderTopWidth: 2, }} >
                        <TouchableOpacity onPress={detailsHandle} >
                            <Text style={{ color: 'blue', fontSize: 15, fontWeight: '700', }}>{details ? "Hide" : "Details"} </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {(details) &&
                    <View style={{ marginLeft: 50, marginBottom: 10, flexDirection: 'row', }}>
                        <Text>{"\u25CF" + " "}</Text>
                        <Text>1000 Off</Text>
                    </View>
                }

            </View>

        </View>
    )
}

export default HotOfferScreen

const styles = StyleSheet.create({
    root_container: {
        alignItems: 'center',
        marginTop: "10%"
    },
    inner_root: {
        backgroundColor: 'white',
        width: '90%'
    },
    off_root: {
        backgroundColor: 'white',
        height: 90,
        width: '100%',
        flexDirection: 'row'
    }
})