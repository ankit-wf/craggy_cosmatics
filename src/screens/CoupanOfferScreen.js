import { Text, TouchableOpacity, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useStyles } from '../styles/couponResponsive'

const CoupanOfferScreen = ({ navigation, search }) => {
    const coupon_Style = useStyles()
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <View>
            <View style={coupon_Style.search_root}>
                <TextInput
                    placeholder="Enter Coupon Code Here"
                    value={searchQuery}
                    onChangeText={onChangeSearch}
                    style={coupon_Style.search_style}
                />
                <TouchableOpacity style={coupon_Style.apply_root_text}>
                    <Text style={coupon_Style.apply_text}>APPLY</Text>
                </TouchableOpacity>
            </View>
            <View style={coupon_Style.available_coupan_outer_root}>
                <View style={coupon_Style.available_coupan_root}>
                    <Text style={coupon_Style.coupon_text}>Available Coupon</Text>
                </View>
                <View style={coupon_Style.coupon_detail_root}>
                    <View style={coupon_Style.inner_coupon_detail}>
                        <Text style={coupon_Style.headeing_text}>Craggy Cosmetics</Text>
                        <Text style={coupon_Style.flat_off_text}>Flat 20% Off + 5% Prepaid Off</Text>
                        <Text style={coupon_Style.flat_799_text}>Shop for 799 & Get Flat 20% Off + 5% Prepaid Off. Not Applicable on kits & Diapers</Text>
                        <View style={coupon_Style.coupon_flex_root}>
                            <View style={coupon_Style.Save_coupon_root}>
                                <Text style={coupon_Style.save_text}>SAVE25</Text>
                            </View>
                            <TouchableOpacity style={{ alignSelf: 'center', }}>
                                <Text style={coupon_Style.apply_btn}>APPLY</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default CoupanOfferScreen;

