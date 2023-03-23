import { CreateResponsiveStyle, DEVICE_SIZES, maxSize } from 'rn-responsive-styles';
// import { theme } from '../../src/core/theme';

export const useStyles = CreateResponsiveStyle(
    {
        wrapper: {},


        root_container: {
            // flex: 1,
            // justifyContent: 'center',
            // alignItems: 'center',
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
            // height: 40,
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: 0,
            padding: 0,
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
                height: '78%',
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


        },
        /** Extra Small Device Size */

        [maxSize(DEVICE_SIZES.XS)]: {
            root_container: {
                height: '85%',
                marginTop: "8%",
            },

            btn_root: {
                height: 45,
                width: 200,
                backgroundColor: 'black',
                marginTop: 15,
                borderRadius: 10,
                alignSelf: 'center',
                justifyContent: 'center'
            },


        },
    },
)