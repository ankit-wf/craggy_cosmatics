import { View } from 'react-native';
import React from 'react'
import { TextInput } from 'react-native-paper'

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
        </View>
    )
}


