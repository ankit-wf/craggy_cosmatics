import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, ScrollView } from 'react-native'
import { Drawer } from 'react-native-paper';

const CustomeSidebar = ({ navigation }) => {
    return (
        <View>
            <ScrollView>
                <View style={{ height: 50 }}>
                </View>
                <Drawer.Section >
                    <Drawer.Item
                    />
                    <Drawer.Item
                        label="TERM AND CONDITION"
                        style={styles.homeNavigation}
                        onPress={navigation.navigate('TermAndCondition')}
                        icon={() => <Ionicons name="home" size={23} style={styles.iconMooved} />}
                    />
                    <Drawer.Item
                        label="PRIVACY POLICY"
                        style={styles.homeNavigation}
                        icon={() => <Ionicons name="ios-phone-portrait-sharp" size={23} style={styles.iconMooved} />}
                    />
                </Drawer.Section>
            </ScrollView>
        </View>
    )
}
export default CustomeSidebar;
const styles = StyleSheet.create({
    root: {
    },
    firstRoot: {
        flex: 0.3,
        paddingTop: 50,
        paddingHorizontal: 25,
        backgroundColor: '#636ed6'
    },
    imageRoot: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginTop: 30,
        marginLeft: 20
    },
    profilePic: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 15,
        paddingTop: 10,
        paddingLeft: 30
    },
    homeNavigation: {
        height: 50,
        paddingTop: 7,
        paddingLeft: 0,
    },
    iconMooved: {
        transform: [{ translateX: 25 }]
    },
    logoutView: {
        flex: 0.19,

    },
    profilePicDimention: {
        height: 100,
        width: 100,
        borderRadius: 50
    }
})



