import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import BackButton from '../components/BackButton';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Controller, useForm } from 'react-hook-form'
import TextInput from '../components/InputHook';
import { useDispatch, useSelector, } from 'react-redux'
import { reviewActions } from '../store/ReviewSlice';

const WriteReview = ({ navigation }) => {
    const [star, setStar] = useState('');
    // const [text, setText] = useState("");
    const dispatch = useDispatch();
    const reviewData = useSelector(state => state.reviewData.review);

    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const d = new Date();
    let name = month[d.getMonth()];
    let FullDate = name + "-" + d.getDate() + "-" + d.getFullYear()
    // console.log("date", FullDate);
    const ratingCompleted = (rating) => {
        setStar(rating);
        // console.log("Rating is: " + star)
    }

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        // defaultValues: {
        //     title: '',
        //     description: '',
        // }
    })

    const onSubmit = (data) => {
        // console.log("dataaaaa", data)
        let Data = [...reviewData, {
            star: star,
            description: data.description,
            title: data.title,
            date: FullDate
        }];

        dispatch(reviewActions.reviews(
            {
                review: Data
            }
        ));
        navigation.goBack()
        reset();
    }

    return (
        <View style={{ backgroundColor: '#fff', height: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <BackButton goBack={navigation.goBack} />
                <Text style={styles.ReviewsTitle}>My Reviews</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: '10%' }}>
                <View style={styles.ratingRoot}>
                    <Rating
                        onFinishRating={ratingCompleted}
                        ratingCount={5}
                        imageSize={30}
                        fractions={1}
                        jumpValue={1}
                        style={{ padding: 10, }}

                    />

                </View>
                <Text style={styles.starReviws}>{star}</Text>
            </View>

            <View style={{ width: "90%", alignSelf: 'center' }}>
                <Controller
                    control={control}

                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            onChangeText={onChange}
                            value={value}
                            label="Title"
                            returnKeyType="next"
                            autoCapitalize="none"
                            autoCompleteType="Title"
                            extContentType="Title"
                            keyboardType="text"
                        />
                    )}
                    name="title"
                />
            </View>

            <View style={{ width: "90%", alignSelf: 'center' }}>
                <Controller
                    control={control}

                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            onChangeText={onChange}
                            value={value}
                            label="Description"
                            returnKeyType="next"
                            autoCapitalize="none"
                            autoCompleteType="Description"
                            extContentType="Description"
                            keyboardType="text"
                            multiline
                            numberOfLines={6}
                            style={
                                {
                                    maxHeight: 200,
                                    paddingBottom: 20,
                                }
                            }
                        />
                    )}
                    name="description"
                />
            </View>

            <View style={{ width: "90%", alignSelf: 'center', marginTop: 20 }}>
                <Button
                    style={{ width: "100%", }}
                    title="Save"
                    color='#fb641b'
                    onPress={handleSubmit(onSubmit)}
                />
            </View>

        </View>
    )
}

export default WriteReview

const styles = StyleSheet.create({
    ReviewsTitle: {
        paddingTop: '9%',
        fontSize: 20,
        paddingLeft: '10%'
    },
    ratingRoot: {
        marginLeft: '5%'
    },
    starReviws: {
        margin: 8,
        fontSize: 15,
        fontWeight: '500'
    }
})