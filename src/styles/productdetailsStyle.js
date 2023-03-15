
import { StyleSheet } from "react-native";

export const productDetailsStyle = StyleSheet.create({
    productsListRoot: {
        height: 252,
        width: '95%',
        alignSelf: 'center',
        marginBottom: "10%"
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
        fontFamily: 'Lato',
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
        fontFamily: 'Raleway',
        fontWeight: '700',
        fontSize: 10,
        lineHeight: 13
    },
    priceRoot: {
        flexDirection: 'row',
        height: 17,
        width: 103,
        alignSelf: 'center',
        marginTop: 7,
    },
    price: {
        color: 'white',
        fontSize: 12,
        fontWeight: '600',
        fontFamily: 'Lato'
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
        fontFamily: 'Lato',
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