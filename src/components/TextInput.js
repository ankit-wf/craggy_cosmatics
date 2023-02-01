import { View, Image, Text } from 'react-native';
import React from 'react'
import { Searchbar, TextInput } from 'react-native-paper'

export default TextInput = ({ navigation, props }) => {

    const searchPageHandler = () => {
        navigation.navigate("searchPage");
    }




    return (
        <View >
            <TextInput
                label="Search here"
                value={props.value}
                onChangeText={props.onChangeText}
                onFocus={searchPageHandler}
            />
            {/* <Searchbar
                placeholder="Search here"
                onChangeText={props.onChangeText}
                value={props.value}
                onFocus={searchPageHandler}
              
                iconColor='#CC933B'
                clearIcon
                loading="true"
                style={{
                    backgroundColor: '#222222',
                    maxWidth: '100%',
                    height: 30,
                    marginTop: 15,
                    flexDirection: 'row-reverse',
                    // alignSelf: 'center',
                    borderRadius: 4,
                    padding: 5,
                    fontSize: 15,


                }}
                theme={{
                    colors: {
                        placeholder: '#7C7C7C',
                        text: '#7C7C7C',
                        primary: '#7C7C7C',
                        underlineColor: 'transparent',

                    }
                }}
            /> */}
        </View>
    )
}


