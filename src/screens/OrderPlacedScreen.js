import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import { useStyles } from '../styles/orderPlacedResponsive';


const OrderPlacedScreen = ({ navigation, route }) => {
    const Op_Style = useStyles();
    const AddData = useSelector(state => state.userData.userAddress);
    const wf = route.params.wf;
    const wof = route.params.wof;
    const fee = route.params.fee;
    const item = route.params.item;
    // console.log("fffffffghhhhh", item)
    return (
        <View style={Op_Style.container_root}>
            <ScrollView>
                <View style={Op_Style.root}>

                </View>
                <View style={Op_Style.placed_root}>
                    <View style={Op_Style.inner_text_root}>
                        <Text style={Op_Style.order_placed_text}>Order Placed</Text>
                    </View>
                    <View style={Op_Style.price_root}>
                        {fee ?
                            <Text style={Op_Style.price_text}>Total price for {item} item ₹{wf}</Text>
                            : <Text style={Op_Style.price_text}>Total price for {item} item ₹{wof}</Text>
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
                            <Text style={Op_Style.full_name}>{AddData[0].firstname} {AddData[0].Lastname}</Text>
                            {/* <View style={Op_Style.change_root}>
                            <Text style={{ color: 'blue' }}>Change</Text>
                        </View> */}
                        </View>

                        <Text style={Op_Style.full_address}>{AddData[0].flate}</Text>
                        <Text style={Op_Style.full_address}>{AddData[0].Apartment}</Text>
                        <Text style={Op_Style.full_address}>{AddData[0].City}</Text>
                        <Text style={Op_Style.full_address}>{AddData[0].State} - {AddData[0].Pincode}</Text>
                        <Text style={Op_Style.full_address}>Phone number - {AddData[0].phone}</Text>
                    </View>
                </View>
                <View style={Op_Style.btn_root}>
                    <TouchableOpacity style={Op_Style.btn_inner_root} onPress={() => navigation.navigate('Home')}>
                        <Text style={Op_Style.btn_text}>Continue Shopping</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View >
    )
}

export default OrderPlacedScreen

const styles = StyleSheet.create({
    // container_root: {
    //     height: '100%',
    //     backgroundColor: '#fff'
    // },
    // root: {
    //     height: 80,
    //     width: '100%',
    //     backgroundColor: '#fff  '
    // },
    // placed_root: {
    //     height: 200,
    //     width: '100%',
    //     backgroundColor: 'blue',

    // },
    // inner_text_root: {
    //     height: 60,
    //     width: '100%',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     marginTop: '10%',
    //     // borderWidth: 2, borderColor: 'red'
    // },
    // order_placed_text: {
    //     color: '#fff',
    //     alignSelf: 'center',
    //     fontSize: 20,
    //     fontWeight: '600'
    // },
    // price_root: {
    //     display: 'flex',
    //     justifyContent: 'center'
    // },
    // price_text: {
    //     color: '#fff',
    //     fontSize: 16,
    //     alignSelf: 'center'
    // },
    // detail_root: {
    //     height: 50,
    //     display: 'flex',
    //     justifyContent: 'center'
    // },
    // detail_text: {
    //     color: '#fff',
    //     fontSize: 16,
    //     alignSelf: 'center'
    // },
    // delivery_root: {
    //     height: 80,
    //     width: '100%',
    //     backgroundColor: '#fff'
    // },
    // delivery_inner_root: {
    //     height: '100%',
    //     width: '90%',
    //     justifyContent: 'center',
    //     alignSelf: 'center'
    // },
    // address_root: {
    //     width: '100%',
    //     backgroundColor: '#fff'
    // },
    // address_inner_root: {
    //     height: 150,
    //     width: '90%',
    //     alignSelf: 'center'
    // },
    // flex_root: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between'
    // },
    // full_name: {
    //     fontSize: 16,
    //     fontWeight: '700'
    // },
    // full_address: {
    //     fontSize: 15,
    //     fontWeight: '500'
    // },
    // change_root: {
    //     height: 30,
    //     width: 70,
    //     borderWidth: 1,
    //     borderColor: 'grey',
    //     borderRadius: 5,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    // btn_root: {
    //     height: 80,
    //     width: '100%',
    //     backgroundColor: '#fff',
    //     marginTop: '1%', justifyContent: 'center'
    // },
    // btn_inner_root: {
    //     height: "60%",
    //     width: '90%',
    //     borderWidth: 1,
    //     borderColor: 'grey',
    //     alignSelf: 'center',
    //     justifyContent: 'center',
    //     borderRadius: 5
    //     // backgroundColor: '#fff',
    //     // marginTop: '1%'
    // },
    // btn_text: {
    //     textAlign: 'center',
    //     color: 'blue'
    // }
})