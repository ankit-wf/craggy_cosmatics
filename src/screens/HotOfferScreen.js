import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useStyles } from '../styles/hotofferResponsive'

const HotOfferScreen = () => {
    const offer_Style = useStyles()
    const [details, setDetails] = useState(false)
    const detailsHandle = () => {
        setDetails(!details);
    }

    return (
        <View style={offer_Style.root_container}>
            <View style={offer_Style.inner_root}>

                <View style={offer_Style.off_root}>
                    <View style={offer_Style.left_off_root}>
                        <Text style={offer_Style.left_text}>1000</Text>
                        <Text style={offer_Style.left_text}>OFF</Text>
                    </View>
                    <View style={offer_Style.right_off_root} >
                        <Text style={offer_Style.right_text}>On minimum purchase of Rs.0</Text>
                        <Text style={offer_Style.right_text} >Code: XYZ1000 </Text>
                    </View>
                </View>

                <View style={offer_Style.expiry_outer_root}>
                    <View style={offer_Style.expiry_left_root}>
                        <Text style={offer_Style.expiry_text}>Expiry :</Text>
                        <Text style={offer_Style.expiry_date}> JAN 31 2023</Text>
                    </View>
                    <View style={offer_Style.details_right} >
                        <TouchableOpacity onPress={detailsHandle} >
                            <Text style={offer_Style.details_hide}>{details ? "Hide" : "Details"} </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {(details) &&
                    <View style={offer_Style.hide_offer}>
                        <Text>{"\u25CF" + " "}</Text>
                        <Text>1000 Off</Text>
                    </View>
                }

            </View>

        </View>
    )
}

export default HotOfferScreen
