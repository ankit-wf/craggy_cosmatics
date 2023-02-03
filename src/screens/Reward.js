import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Reward = () => {
    return (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
            <View style={{ backgroundColor: 'white', height: 150, width: '90%', borderColor: 'red', borderWidth: 2, }}>

                <View style={{ backgroundColor: 'white', height: 90, width: '100%', flexDirection: 'row', borderBottomColor: 'red', borderBottomWidth: 2, }}>

                    <View style={{ height: 90, width: '35%', borderRightWidth: 2, borderRightColor: 'red' }}>
                        <Text>fvdnsfvsd</Text>
                    </View>
                    <View >
                        <Text>dfhsdfshfgjl</Text>
                    </View>

                </View>

                <View style={{ flexDirection: 'row', margin: 20, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', }}>
                        <Text >Expiry : </Text>
                        <Text>JAN 31 22023</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text style={{ color: 'blue', fontSize: 25, fontWeight: '400' }}>Details</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        </View>
    )
}

export default Reward

const styles = StyleSheet.create({})