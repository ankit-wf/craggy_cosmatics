
import { StyleSheet } from "react-native";

export const shopStyle = StyleSheet.create({
    Root: {
        backgroundColor: '#090909',
        height: 80,
        width: '100%',
    },
    searchRoot: {
        width: '95%',
        alignSelf: 'center',
        flexDirection: 'row',
        borderWidth: 1
    },
    searchImgRoot: {
        marginTop: 32,
        marginLeft: '5%',
        // height: 50,
    },
    searchImg: {
        height: 35,
        width: 35,
        resizeMode: 'cover',
        borderRadius: 4
    },
    searchIconRoot: {
        marginTop: 20,
        width: '71%',
        marginLeft: '4%'
    },

    allProductRoot: {
        height: 45,
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between'
    },
    allProduct: {
        height: 15,
        borderBottomColor: '#222222',
        borderBottomWidth: 1,
        marginBottom: 10,
        alignSelf: 'center'
    },
    allProductText: {
        fontSize: 12,
        lineHeight: 14,
        fontWeight: '500',
        fontFamily: 'Raleway500',
        color: '#222222',
    },
    filterImg: {
        alignSelf: 'center',
        height: 40, width: 40
    },


    productsListRoot: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        // borderColor: 'red',
        // borderWidth: 1
    },
    product109: {
        height: 252,
        width: '42.2%',

        marginLeft: '5%',
        marginTop: 20,
        marginBottom: 20,
        // backgroundColor: 'blue',
        // position: 'relative',
    },
    imgRoot: {
        height: 145,
        width: '100%',
        // borderColor: 'red',
        // borderWidth: 1
    },
    productImg: {
        height: '100%',
        width: "100%"
    },
    contentRoot: {
        height: 95,
        width: '100%',
        backgroundColor: '#0D0D0D',
        // borderWidth: 1
    },
    textRoot: {
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
        fontWeight: '600',
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
        lineHeight: 17
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
        fontFamily: 'Raleway700',
        fontWeight: '700',
        fontSize: 10,
        lineHeight: 13,

    },
});