import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import React, { useState } from 'react'
import BackButton from '../components/BackButton';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Controller, useForm } from 'react-hook-form'
import TextInput from '../components/InputHook';
import { useDispatch, useSelector, } from 'react-redux'
import { reviewActions } from '../store/ReviewSlice';
import { useStyles } from '../styles/responsiveStyle';

const WriteReview = ({ navigation }) => {
    const [star, setStar] = useState('');
    // const [text, setText] = useState("");
    const dispatch = useDispatch();
    const Wr_style = useStyles();
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
        <View style={Wr_style.write_root}>
            <View style={Wr_style.write_back_root}>
                <BackButton goBack={navigation.goBack} />
                <Text style={Wr_style.ReviewsTitle}>My Reviews</Text>
            </View>
            <ScrollView>

                <View style={Wr_style.rating_outer_root}>
                    <View style={Wr_style.rating_inner_root}>
                        <Rating
                            onFinishRating={ratingCompleted}
                            ratingCount={5}
                            imageSize={30}
                            fractions={1}
                            jumpValue={1}
                            style={{ padding: 10, }}
                        />

                    </View>
                    <Text style={Wr_style.starReviws}>{star}</Text>
                </View>

                <View style={Wr_style.rating_title_root}>
                    <Controller
                        control={control}

                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                onChangeText={onChange}
                                value={value}
                                label="Title"
                                autoCapitalize="none"
                                autoCompleteType="Title"
                                extContentType="Title"
                                keyboardType="text"
                            />
                        )}
                        name="title"
                    />
                </View>

                <View style={Wr_style.rating_title_root}>
                    <Controller
                        control={control}

                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                onChangeText={onChange}
                                value={value}
                                label="Description"
                                autoCapitalize="none"
                                autoCompleteType="Description"
                                extContentType="Description"
                                keyboardType="text"
                                multiline
                                numberOfLines={6}
                                style={Wr_style.rating_description_height}
                            />
                        )}
                        name="description"
                    />
                </View>

                <View style={Wr_style.rating_button_root}>
                    <Button
                        style={{ width: "100%", }}
                        title="Save"
                        color='#fb641b'
                        onPress={handleSubmit(onSubmit)}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default WriteReview

const styles = StyleSheet.create({
    write_root: {
        backgroundColor: '#fff',
        height: '100%'
    },
    write_back_root: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    ReviewsTitle: {
        paddingTop: '9%',
        fontSize: 20,
        paddingLeft: '10%'
    },
    rating_outer_root: {
        flexDirection: 'row',
        marginTop: '10%'
    },
    rating_inner_root: {
        marginLeft: '5%'
    },
    starReviws: {
        margin: 8,
        fontSize: 15,
        fontWeight: '500'
    },
    rating_title_root: {
        width: "90%",
        alignSelf: 'center'
    },
    rating_description_height: {
        maxHeight: 200,
        paddingBottom: 20,
    },
    rating_button_root: {
        width: "90%",
        alignSelf: 'center',
        marginTop: 20
    }
})