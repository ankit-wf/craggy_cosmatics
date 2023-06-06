import { CreateResponsiveStyle, DEVICE_SIZES, maxSize } from 'rn-responsive-styles';

export const useStyles = CreateResponsiveStyle(
    {
        wrapper: {},
        root_container: {
            height: '85%',
            width: '90%',
            borderWidth: 0.5,
            borderRadius: 15,
            marginTop: "8%",
            alignSelf: 'center',
            backgroundColor: '#fff'
        },
        first_last_root: {
            flexDirection: 'row',
            justifyContent: 'space-around'
        },
        first_input: {
            width: '45%',
            height: 40
        },
        btn_root: {
            height: 45,
            width: 200,
            backgroundColor: 'black',
            marginTop: 10,
            borderRadius: 10,
            alignSelf: 'center',
            justifyContent: 'center'
        },
        btn_text: {
            color: '#fff',
            alignSelf: 'center',
            fontSize: 16
        },
        firstname_text: {
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: 0,
            padding: 0,
            fontSize: (Platform.OS === 'ios') ? 12 : 12,
            fontFamily: 'Raleway'
        },
        last_input: {
            width: '45%'
        },
        other_input: {
            width: '95%',
            alignSelf: 'center'
        }
    },
    {
        /** Medium Device Size */

        [maxSize(DEVICE_SIZES.MD)]: {
            root_container: {
                marginTop: 10,
                height: (Platform.OS === 'ios') ? '77%' : '78%',
            },
            btn_root: {
                height: 40,
                width: 200,
                backgroundColor: 'black',
                marginTop: 10,
                borderRadius: 10,
                alignSelf: 'center',
                justifyContent: 'center'
            },
            firstname_text: {
                fontSize: (Platform.OS === 'ios') ? 14 : 14,
            },
        },
        /** Extra Small Device Size */

        [maxSize(DEVICE_SIZES.XS)]: {
            root_container: {
                height: (Platform.OS === 'ios') ? '84%' : '85%',
                marginTop: "8%",
            },
            btn_root: {
                height: 45,
                width: 200,
                backgroundColor: 'black',
                marginTop: 15,
                bottom: (Platform.OS === 'ios') ? 0 : 0,
                borderRadius: 10,
                alignSelf: 'center',
                justifyContent: 'center'
            },
            firstname_text: {
                fontSize: (Platform.OS === 'ios') ? 14 : 14,
            },
        },
    },
)