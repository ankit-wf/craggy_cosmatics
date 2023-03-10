import { StyleSheet, Dimensions } from "react-native";

export const letestProductStyle = StyleSheet.create({
    productsListRoot: {
        height: 252,
        width: '95%',
        alignSelf: 'center'
    },
    touchable: {
        height: 252,
        width: 145,
        marginRight: 15,
        // backgroundColor: 'blue'
        position: 'relative'
    },
    imgRoot: {
        height: 145,
        width: 145,
        // borderColor: 'red',
        // borderWidth: 1
    },
    productImg: {
        height: '100%',
        width: "100%"
    },
    contentRoot: {
        height: 95,
        width: 145,
        backgroundColor: '#0D0D0D',
        // borderWidth: 1
    },
    descriptionRoot: {
        height: 36,
        width: 130,
        alignSelf: 'center',
        // borderColor: 'red', 
        // borderWidth: 1,
        marginTop: 5
    },
    descriptionText: {
        fontSize: 10,
        fontWeight: '300',
        fontFamily: 'Lato300',
        lineHeight: 12,
        color: '#FFFFFF',
        alignSelf: 'center'
    },
    baseLine: {
        height: 1,
        width: 145,
        backgroundColor: '#272727',
        marginTop: 10
    },
    priceRoot: {
        flexDirection: 'row',
        height: 17,
        width: 103,
        alignSelf: 'center',
        // borderColor: 'red', 
        // borderWidth: 1, 
        marginTop: 7,
    },
    price: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Lato600',
        lineHeight: 15
    },
    spaceRoot: {
        color: 'white',
        marginLeft: 5,
        fontSize: 12
    },
    oldprice: {
        color: '#666666',
        textDecorationLine: 'line-through',
        fontSize: 14,
        fontFamily: 'Lato300',
        fontWeight: '300',
        lineHeight: 16

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
        lineHeight: 13,
        fontFamily: 'Raleway700',
        fontWeight: '700'
    },

})