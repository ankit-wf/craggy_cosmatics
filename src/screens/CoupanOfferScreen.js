import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import { Appbar, Searchbar, } from 'react-native-paper';

const CoupanOfferScreen = ({ navigation, search }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <View>
            {/* <View style={{ flexDirection: 'row', }}>
                <BackButton goBack={navigation.goBack} Color={'#666666'} />
                <Text style={styles.deliveryText}>OFFERS AND COUPAN</Text>
            </View> */}
            <View style={styles.search_root}>
                <TextInput
                    placeholder="Enter Coupon Code Here"
                    value={searchQuery}
                    onChangeText={onChangeSearch}
                    style={styles.search_style}
                // caretHidden={true}
                // onPress={Keyboard.dismiss}
                // accessible={false}
                // onFocus={search}
                // placeholderTextColor="#7C7C7C"
                />
                <TouchableOpacity style={{ position: 'absolute', alignSelf: 'center', right: '15%' }}>
                    <Text style={{ fontSize: 16, color: 'blue' }}>APPLY</Text>
                </TouchableOpacity>

                {/* <Searchbar
                    placeholder='Enter Coupon Code Here'
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={styles.search_style}
                /> */}
            </View>

            <View style={{ backgroundColor: '#fff', marginTop: '2%', height: '100%' }}>
                <View style={styles.available_coupan_root}>
                    <Text style={styles.coupon_text}>Available Coupon</Text>
                </View>
                <View style={styles.coupon_detail_root}>
                    <View style={styles.inner_coupon_detail}>
                        <Text style={styles.headeing_text}>Craggy Cosmetics</Text>
                        <Text style={styles.flat_off_text}>Flat 20% Off + 5% Prepaid Off</Text>
                        <Text style={styles.flat_799_text}>Shop for 799 & Get Flat 20% Off + 5% Prepaid Off. Not Applicable on kits & Diapers</Text>
                        <View style={styles.coupon_flex_root}>
                            <View style={styles.Save_coupon_root}>
                                <Text style={styles.save_text}>SAVE25</Text>
                            </View>
                            <TouchableOpacity style={{ alignSelf: 'center', }}>
                                <Text style={styles.apply_btn}>APPLY</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default CoupanOfferScreen;

const styles = StyleSheet.create({
    search_root: {
        height: 70,
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    search_style: {
        width: "80%",
        height: 50,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 8,
        paddingLeft: "5%"
    },
    available_coupan_root: {
        height: 60,
        width: '100%',
        // backgroundColor: '#fff',
        // marginTop: '2%',
        justifyContent: 'center'
    },
    coupon_text: {
        fontSize: 17,
        fontWeight: '700',
        paddingLeft: '5%'
    },
    coupon_detail_root: {
        height: 200,
        width: '90%',
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 5
    },
    inner_coupon_detail: {
        height: 180,
        width: '85%',
        alignSelf: 'center'
    },
    headeing_text: {
        fontSize: 18,
        fontWeight: '700',
        // paddingLeft: '8%',
        paddingTop: 10
    },
    flat_off_text: {
        fontSize: 19,
        // paddingLeft: '8%',
        paddingTop: 3
    },
    flat_799_text: {
        fontSize: 15,
        lineHeight: 19,
        color: 'grey'
    },
    coupon_flex_root: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Save_coupon_root: {
        height: 40,
        width: 80,
        borderRadius: 8,
        borderWidth: 1,
        borderStyle: 'dashed',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#cf9e5f'
    },
    save_text: {
        fontSize: 19,
        alignSelf: 'center'
    },
    apply_btn: {
        fontSize: 18,
        color: 'blue'
    }
})