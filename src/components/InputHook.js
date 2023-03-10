import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-paper'
import { useStyles } from '../styles/responsiveStyle';

export default function TextInput({ errorText, description, ...props }) {
    const styles = useStyles()
    return (
        <View style={styles.containerInput}>
            <Input
                style={styles.formInput}
                outlineColor="#000"
                activeOutlineColor="#CC933B"
                activeUnderlineColor="#CC933B"
                mode="outlined"
                theme={{
                    colors: {
                        placeholder: '#222',
                        text: '#222',
                    }
                }}
                {...props}
            />
            {description && !errorText ? (
                <Text style={styles.description}>{description}</Text>
            ) : null}
            {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
        </View>
    )
}
