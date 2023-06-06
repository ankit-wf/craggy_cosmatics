import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector, } from 'react-redux'
import { Rating } from 'react-native-ratings';
import { productDetailsStyle as pDs } from '../styles/productdetailsStyle';

const ReviewsScreen = ({ navigation }) => {
    const reviewData = useSelector(state => state.reviewData.review);
    const [page, setPage] = useState('1')
    return (
        <View>
            <ScrollView>
                {reviewData.map((value, k) => {
                    return (
                        <View style={styles.root} key={k}>
                            <View style={styles.inner_root} key={k}>
                                <View style={styles.title_root}>
                                    <Text style={styles.review_Name}>{value.title}</Text>
                                    <Text style={styles.review_Date}>{value.date}</Text>
                                </View>
                                <View style={styles.rating_root} key={k} >
                                    <Rating
                                        readonly={true}
                                        ratingCount={5}
                                        startingValue={value.star}
                                        imageSize={28}
                                        style={{ padding: 10 }}
                                    />
                                    <Text style={styles.starReviws}>{value.star}</Text>
                                </View>
                                <Text style={styles.review_Title}>{value.title}</Text>
                                <Text style={styles.review_Review}>{value.description}</Text>
                                <View style={pDs.baseLine} />
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}
export default ReviewsScreen;
const styles = StyleSheet.create({
    root: {
        backgroundColor: 'white'
    },
    inner_root: {
        marginTop: 30,
        width: '90%',
        alignSelf: 'center',
    },
    title_root: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    rating_root: {
        flexDirection: 'row',
        marginLeft: -8
    },
    deliveryText: {
        fontSize: 20,
        alignSelf: 'center',
        paddingTop: 35,
    },
    review_Name: {
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Raleway',
        lineHeight: 19,
    },
    review_Date: {
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'Lato',
        lineHeight: 15
    },
    review_Title: {
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'Raleway',
        lineHeight: 17,
        marginTop: 2
    },
    review_Review: {
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Lato',
        lineHeight: 20,
        marginTop: 5,
        textAlign: 'justify'
    },
    review_empty_root: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    empty_root_text: {
        fontSize: 22,
        fontWeight: '500'
    },
    starReviws: {
        marginTop: 17,
        fontSize: 14,
        lineHeight: 17,
        fontWeight: '700',
        fontFamily: 'Lato'
    },
})