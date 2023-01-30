
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
                outlineColor="transparent"
                activeOutlineColor="transparent"
                activeUnderlineColor="#fff"
                mode="outlined"
                textColor="#fff"
                selectionColor='#ffff'
                theme={{
                    colors: {
                        placeholder: '#fff',
                        text: '#fff',
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



// import React from 'react'
// import { View, StyleSheet, Text } from 'react-native'
// import { TextInput as Input } from 'react-native-paper'
// import { theme } from '../core/theme'

// export default function TextInput({ errorText, description, ...props }) {
//     return (
//         <View style={styles.container}>
//             <Input
//                 style={styles.input}
//                 selectionColor={theme.colors.primary}
//                 underlineColor="transparent"
//                 mode="outlined"
//                 // theme={{ colors: { text: 'blue' } }}
//                 {...props}
//             />
//             {description && !errorText ? (
//                 <Text style={styles.description}>{description}</Text>
//             ) : null}
//             {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         width: '100%',
//         marginVertical: 12,
//     },
//     input: {
//         backgroundColor: theme.colors.bgColor,
//     },
//     description: {
//         fontSize: 13,
//         color: theme.colors.secondary,
//         paddingTop: 8,
//     },
//     error: {
//         fontSize: 13,
//         color: theme.colors.error,
//         paddingTop: 8,
//     },
// })
