import React from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import Skeleton from '../components/Skeleton';


const WIDTH = Dimensions.get('screen').width;

const SkeletonTestScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.avatar}>
                    <Skeleton width={60} height={60} />
                </View>
                <View>
                    <View style={styles.upperText}>
                        <Skeleton width={200} height={14} />
                    </View>
                    <View style={styles.lowerText}>
                        <Skeleton width={120} height={14} />
                    </View>
                </View>
            </View>
            <Skeleton width={WIDTH} height={140} />
        </View>
    )
}

export default SkeletonTestScreen

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // marginVertical: 40,
        marginTop: 100
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        margin: 8,
    },
    avatar: { borderRadius: 30, width: 60, overflow: 'hidden' },
    upperText: { marginLeft: 8, marginTop: 14 },
    lowerText: { marginLeft: 8, marginTop: 4 },
});