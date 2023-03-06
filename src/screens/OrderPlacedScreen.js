import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const OrderPlacedScreen = ({ navigation, route }) => {
    const wf = route.params.wf;
    const wof = route.params.wof;
    // console.log("fffffffghhhhh", wf, wof)
    return (
        <View>
            <View style={styles.root}>

            </View>
            <View style={styles.placed_root}>
                <View style={styles.inner_text_root}>
                    <Text style={styles.order_placed_text}>Order Placed</Text>
                </View>
                <View style={styles.price_root}>
                    <Text style={styles.price_text}>Total price for 1 item ₹{wof}</Text>
                </View>
                <View style={styles.detail_root}>
                    <Text style={styles.detail_text}>View Details</Text>
                </View>
            </View>

            <View style={styles.delivery_root}>
                <View style={styles.delivery_inner_root}>
                    <Text style={{ fontSize: 17 }}>Delivery by Tue, Mar 7th '23</Text>
                </View>
            </View>
            <View style={styles.address_root}>
                <View style={styles.address_inner_root}>
                    <View style={styles.flex_root}>
                        <Text>Karan Kumar</Text>
                        {/* <View style={styles.change_root}>
                            <Text style={{ color: 'blue' }}>Change</Text>
                        </View> */}
                    </View>

                    <Text>plot 209</Text>
                    <Text>om sai interprises, shahi mazra,</Text>
                    <Text>Mohali</Text>
                    <Text>Punjab - 160059</Text>
                    <Text>Phone number - 1234567890</Text>
                </View>
            </View>
            <View style={styles.btn_root}>
                <TouchableOpacity style={styles.btn_inner_root} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.btn_text}>Continue Shopping</Text>
                </TouchableOpacity>
            </View>

        </View >
    )
}

export default OrderPlacedScreen

const styles = StyleSheet.create({
    root: {
        height: 80,
        width: '100%',
        backgroundColor: '#fff  '
    },
    placed_root: {
        height: 200,
        width: '100%',
        backgroundColor: 'blue',

    },
    inner_text_root: {
        height: 60,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10%',
        // borderWidth: 2, borderColor: 'red'
    },
    order_placed_text: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '600'
    },
    price_root: {
        display: 'flex',
        justifyContent: 'center'
    },
    price_text: {
        color: '#fff',
        fontSize: 16,
        alignSelf: 'center'
    },
    detail_root: {
        height: 50,
        display: 'flex',
        justifyContent: 'center'
    },
    detail_text: {
        color: '#fff',
        fontSize: 16,
        alignSelf: 'center'
    },
    delivery_root: {
        height: 80,
        width: '100%',
        backgroundColor: '#fff'
    },
    delivery_inner_root: {
        height: '100%',
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    address_root: {
        width: '100%',
        backgroundColor: '#fff'
    },
    address_inner_root: {
        height: 150,
        width: '90%',
        alignSelf: 'center'
    },
    flex_root: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    change_root: {
        height: 30,
        width: 70,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn_root: {
        height: 80,
        width: '100%',
        backgroundColor: '#fff',
        marginTop: '1%', justifyContent: 'center'
    },
    btn_inner_root: {
        height: "60%",
        width: '90%',
        borderWidth: 1,
        borderColor: 'grey',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 5
        // backgroundColor: '#fff',
        // marginTop: '1%'
    },
    btn_text: {
        textAlign: 'center',
        color: 'blue'
    }
})