import { StyleSheet, Dimensions } from "react-native";

export const bestSellingProductStyle = StyleSheet.create({
    productsListRoot: {
        height: 252,
        width: '95%',
        alignSelf: 'center',
    },

    touchable: {
        height: 252,
        width: 145,
        marginRight: 15,
        position: 'relative',
    },

    imgRoot: {
        height: 145,
        width: 145,
    },
    productImg: {
        height: '100%',
        width: "100%"
    },
    contentRoot: {
        height: 95,
        width: 145,
        backgroundColor: '#0D0D0D',
    },
    descriptionRoot: {
        height: 36,
        width: 130,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    descriptionText: {
        fontSize: 10,
        fontWeight: '300',
        fontFamily: 'Lato',
        lineHeight: 12,
        color: '#FFFFFF',
        alignSelf: 'center',
    },
    baseLine: {
        height: 1,
        width: 145,
        backgroundColor: '#272727',
        marginTop: 10
    },
    priceRoot: {
        flexDirection: 'row',
        display: 'flex',
        height: 17,
        width: 103,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 7,
    },
    price: {
        color: 'white',
        fontSize: 12,
        fontWeight: '300',
        fontFamily: 'Lato',
        textAlign: 'center',
        lineHeight: 15
    },
    spaceRoot: {
        color: 'white',
        marginLeft: 3,
        marginRight: 3,
        fontSize: 12,
        lineHeight: 15
    },
    oldprice: {
        color: '#666666',
        textDecorationLine: 'line-through',
        fontSize: 12,
        fontWeight: '600',
        fontFamily: 'Lato',
        lineHeight: 15
    },
    buyNowButton: {
        height: 27,
        width: 98,
        borderRadius: 4,
        backgroundColor: '#C68625',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#0D0D0D',
        textAlign: 'center',
        paddingTop: 7,
        fontSize: 10,
        fontFamily: 'Raleway',
        fontWeight: '700',
        lineHeight: 13
    },

})