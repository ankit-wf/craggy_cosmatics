import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import { useStyles } from '../styles/orderPlacedResponsive';
import BackButton from '../components/BackButton'

const OrderPlacedScreen = ({ navigation, route }) => {
    const Op_Style = useStyles();
    const AddressData = useSelector(state => state.userData.user_data)
    const wf = route.params.wf;
    const fee = route.params.fee;
    const item = route.params.item;
    return (
        <View style={Op_Style.container_root}>
            <View style={Op_Style.searchRoot}>
                <BackButton goBack={navigation.goBack} />
                <View style={Op_Style.searchImgRoot}>
                </View>
            </View>
            <ScrollView>
                <View style={{ height: '100%' }}>
                    <View style={Op_Style.placed_root}>
                        <View style={Op_Style.inner_text_root}>
                            <Text style={Op_Style.order_placed_text}>Order Placed</Text>
                        </View>
                        <View style={Op_Style.price_root}>
                            {fee ?
                                <Text style={Op_Style.price_text}>Total price for {item} item ₹{(wf + fee).toFixed(2)}</Text>
                                : <Text style={Op_Style.price_text}>Total price for {item} item ₹{wf.toFixed(2)}</Text>
                            }
                        </View>
                        <View style={Op_Style.detail_root}>
                            <Text style={Op_Style.detail_text}>View Details</Text>
                        </View>
                    </View>
                    <View style={Op_Style.delivery_root}>
                        <View style={Op_Style.delivery_inner_root}>
                            <Text style={Op_Style.delivey_text}>Delivery by Tue, Mar 7th '23</Text>
                        </View>
                    </View>
                    <View style={Op_Style.address_root}>
                        <View style={Op_Style.address_inner_root}>
                            <View style={Op_Style.flex_root}>
                                <Text style={Op_Style.full_name}>{AddressData.billing_address.first_name} {AddressData.billing_address.last_name}</Text>
                            </View>
                            <Text style={Op_Style.full_address}>{AddressData.billing_address.address_1}</Text>
                            <Text style={Op_Style.full_address}>{AddressData.billing_address.address_2}</Text>
                            <Text style={Op_Style.full_address}>{AddressData.billing_address.city}</Text>
                            <Text style={Op_Style.full_address}>{AddressData.billing_address.state} - {AddressData.billing_address.postcode}</Text>
                            <Text style={Op_Style.full_address}>Phone number - {AddressData.billing_address.phone}</Text>
                        </View>
                    </View>
                    <View style={Op_Style.btn_root}>
                        <TouchableOpacity style={Op_Style.btn_inner_root} onPress={() => navigation.navigate('Home')}>
                            <Text style={Op_Style.btn_text}>Continue Shopping</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View >
    )
}
export default OrderPlacedScreen
