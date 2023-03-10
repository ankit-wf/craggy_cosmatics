import { StyleSheet, Dimensions } from "react-native";

export const bestSellingProductStyle = StyleSheet.create({
    productsListRoot: {
        height: 252,
        width: '95%',
        alignSelf: 'center',
        // bottom: 1
    },
    touchable: {
        height: 252,
        width: 145,
        marginRight: 15,
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
        justifyContent: 'center'
        // borderColor: 'red',
        // borderWidth: 5,
        // marginTop: 5
    },
    descriptionText: {
        fontSize: 10,
        fontWeight: '300',
        fontFamily: 'Lato300',
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
        // borderColor: 'red',
        // borderWidth: 1,
    },
    price: {
        color: 'white',
        fontSize: 12,
        fontWeight: '600',
        fontFamily: 'Lato600',
        textAlign: 'center'
    },
    spaceRoot: {
        color: 'white',
        marginLeft: 5,
        fontSize: 12
    },
    oldprice: {
        color: '#666666',
        textDecorationLine: 'line-through',
        fontSize: 12,
        fontWeight: '600',
        fontFamily: 'Lato600',
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
        fontFamily: 'Raleway700',
        fontWeight: '700',
        lineHeight: 13
    },

})