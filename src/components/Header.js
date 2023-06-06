import { Text, View, Image, TextInput, Button, ScrollView, ImageBackground, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import ResponsiveImage from "react-native-responsive-image";
import { useStyles } from '../styles/responsiveStyle'
import React, { useState } from 'react'
import { Badge } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';

export default function Header({ navigation, onPress, notification, Gift, search, CartHandler }) {
    const styles = useStyles()
    const BadgeData = useSelector(state => state.cartData.cart);
    return (
        <View style={styles.headerN}>
            <View style={styles.container}>
                <View style={styles.searchbar_root}>
                    <View style={styles.inner_search_root}>
                        <TextInput
                            caretHidden={true}
                            placeholder="Search here..."
                            onPress={Keyboard.dismiss}
                            accessible={false}
                            onFocus={search}
                            placeholderTextColor="#7C7C7C"
                            style={styles.search_style}
                        />
                    </View>
                </View>

            </View>
        </View>
    )
}