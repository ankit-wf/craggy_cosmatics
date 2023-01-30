
import { StyleSheet } from "react-native";

export const productDetailsStyle = StyleSheet.create({
    productsListRoot: {
        height: 252,
        width: '95%',
        alignSelf: 'center'
    },
    product109: {
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
    textRoot1: {
        height: 36,
        width: 130,
        alignSelf: 'center',
        // borderColor: 'red', 
        // borderWidth: 1,
        marginTop: 5
    },
    contentText: {
        fontSize: 10,
        fontWeight: '300',
        fontFamily: 'Lato300',
        lineHeight: 12,
        color: '#FFFFFF',
        alignSelf: 'center'
    },
    viewLatestProduct: {
        // alignItems: 'center',
        marginHorizontal: 97,
        height: 15,
        borderBottomColor: '#999999',
        borderBottomWidth: 1,
        marginBottom: 30,
        marginTop: 30,
        alignSelf: 'center'
    },
    latestProductText: {
        fontSize: 14,
        lineHeight: 14.09,
        fontWeight: '600',
        color: '#999999',
    },
    buyNowButton1: {
        height: 27,
        width: 98,
        borderRadius: 4,
        backgroundColor: '#C68625',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        alignItems: 'center',
    },
    buttonText1: {
        color: '#0D0D0D',
        textAlign: 'center',
        paddingTop: 7,
        fontFamily: 'Raleway700',
        fontWeight: '700',
        fontSize: 10,
        lineHeight: 13
    },
    priceRoot: {
        flexDirection: 'row',
    },
    price: {
        color: '#444444',
        fontSize: 18,
        fontWeight: "700",
        fontFamily: 'Lato700',
        lineHeight: 22
    },
    spaceRoot: {
        color: '#444444',
        marginLeft: 5,
        fontSize: 12,
        marginTop: 2,
        fontFamily: 'Lato300',
        fontWeight: '300',
        lineHeight: 17,
        letterSpacing: 1
    },
    oldprice: {
        color: '#666666',
        textDecorationLine: 'line-through',
        fontSize: 14,
        marginTop: 3,
        fontFamily: 'Lato300',
        fontWeight: '300',
        lineHeight: 17
    },
    baseLine2: {
        height: 1,
        width: '100%',
        alignSelf: 'center',
        backgroundColor: '#C4C4C4',
        marginTop: 20
    },
    baseLine: {
        height: 1,
        // width: '100%',
        // alignSelf: 'center',
        backgroundColor: '#C4C4C4',
        marginTop: 5
    },
    productRoot: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    },

});