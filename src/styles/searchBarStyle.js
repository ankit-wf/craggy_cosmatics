import { StyleSheet } from "react-native";

export const searchBarStyle = StyleSheet.create({
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

});