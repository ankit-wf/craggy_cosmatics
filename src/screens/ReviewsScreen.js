import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector, } from 'react-redux'
import { Rating, AirbnbRating } from 'react-native-ratings';
import { productDetailsStyle as pDs } from '../styles/productdetailsStyle';

const ReviewsScreen = ({ navigation }) => {
    const newData = useSelector(state => state.reviewData.review);
    const [page, setPage] = useState('1')
    return (
        <View>
            {/* <View style={{ backgroundColor: 'white' }}>

                <Text style={styles.deliveryText}>REVIEWS</Text>
            </View> */}

            {newData.map((value, k) => {
                // console.log("rewviewData", newData)

                let ending = parseInt(page) * 3;
                let starting = ending - 2;
                if (k >= starting && k <= ending) {
                    return (
                        <View style={{ backgroundColor: 'white' }}>
                            <View style={{ marginTop: 30, width: '90%', alignSelf: 'center', }} key={k}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                                    <Text style={styles.review_Name}>{value.title}</Text>
                                    <Text style={styles.review_Date}>{value.date}</Text>
                                </View>

                                <View style={{ flexDirection: 'row', marginLeft: -8 }} >

                                    <Rating
                                        readonly={true}
                                        ratingCount={5}
                                        startingValue={value.star}
                                        imageSize={28}
                                        style={{ padding: 10 }}
                                    // tintColor="white"

                                    />
                                    <Text style={styles.starReviws}>{value.star}</Text>
                                </View>

                                <Text style={styles.review_Title}>{value.title}</Text>
                                <Text style={styles.review_Review}>{value.description}</Text>
                                <View style={pDs.baseLine} />
                            </View>
                        </View>

                    )
                }
            })}

        </View>
    )
}

export default ReviewsScreen;

const styles = StyleSheet.create({
    deliveryText: {
        fontSize: 20,
        alignSelf: 'center',
        paddingTop: 35,
    },
    review_Name: {
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Raleway400',
        lineHeight: 19,
    },
    review_Date: {
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'Lato400',
        lineHeight: 15
    },
    review_Title: {
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'Raleway700',
        lineHeight: 17,
        marginTop: 2
    },
    review_Review: {
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Lato400',
        lineHeight: 20,
        marginTop: 5,
        textAlign: 'justify'
    },
    starReviws: {
        marginTop: 17,
        fontSize: 14,
        lineHeight: 17,
        fontWeight: '700',
        fontFamily: 'Lato700'
    },

})