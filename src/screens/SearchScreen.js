import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { submitActions } from '../store/dataSlice'
import { Appbar, Searchbar, Snackbar } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios'
import Heading from '../components/Heading'
import { useStyles } from '../styles/searchResponsive';
import { bestSellingProductStyle as bsP } from '../styles/bestSellingProductStyle'
const placeholderText = require('../../Data/Placeholder.json');
import { shopStyle as sS } from '../styles/shopStyle'
import { SkeletonContainer } from 'react-native-dynamic-skeletons';
import { CONSUMER_KEY, SEARCH_PRODUCT_API, BEST_SELLING_API } from "@env";

const SearchScreen = ({ navigation }) => {
    let bs = "BestSellers";
    let nodata = "Data not Match.."
    const Srch_Style = useStyles();
    const dispatch = useDispatch();
    const cartData = useSelector(state => state.cartData.cart);
    const [loading, setLoading] = useState(true)
    const [visible, setVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const [dataload, setDataload] = useState(true)
    const [searchData, setSearchData] = useState([]);
    // console.log("gggggggg", searchQuery)
    const [bestSeldata, setBestSeldata] = useState([])
    const [newName, setnewName] = useState("");
    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * placeholderText.length);
        setnewName(placeholderText[index]);
    }, []);

    setTimeout(() => {
        setDataload(false)
    }, 1000);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 5000);

        setSearchData()
        onSubmit()
        bestSellingApi()
        setTimeout(() => {
            setLoading(false)

        }, 2000);
        return () => clearInterval(intervalID);
    }, [shuffle, searchQuery])


    const onSubmit = () => {
        axios.get(
            SEARCH_PRODUCT_API,
            {
                params: {
                    s: searchQuery
                },
                headers: {
                    'Content-Type': 'application/json',
                    'consumer_key': CONSUMER_KEY,
                }
            }
        ).then((res) => {
            if (res.data.status = "success") {
                setSearchData(res.data.response)
            }
        })
    }
    const bestSellingApi = () => {
        axios.get(
            BEST_SELLING_API,
            {
                headers: {
                    'consumer_key': CONSUMER_KEY,
                }
            }
        ).then((res) => {
            // console.log("resss", res.data)
            if (res.data.status = "success") {
                setBestSeldata(res.data.response)
                // setTimeout(() => {
                //     setLoading(false)
                // },);
            }
        })
    }
    const CartHolder = (product_title, product_id, image, regular_price, sale_price,) => {

        if (cartData.length !== 0) {
            let ss = false;
            cartData.find(data => {
                if (data.categoriesDetail_id == product_id) {
                    ss = true;
                }
            })
            if (ss == true) {
                // console.log("already in list")
                setVisible(!visible);
            }
            else {
                let Data = [...cartData, {
                    description: product_title,
                    categoriesDetail_id: product_id,
                    images: image,
                    oldprice: regular_price,
                    price: sale_price,
                    quantity: 1
                }];
                dispatch(submitActions.price({ cart: Data }));
                navigation.navigate("cart");
            }
        }
        else {
            let Data = [...cartData, {
                description: product_title,
                categoriesDetail_id: product_id,
                images: image,
                oldprice: regular_price,
                price: sale_price,
                quantity: 1
            }];
            dispatch(submitActions.price({ cart: Data }));
            navigation.navigate("cart");
        }

    }

    const AddCartHolder = (product_title, product_id, image, regular_price, sale_price,) => {

        if (cartData.length !== 0) {
            let ss = false;
            cartData.find(data => {
                if (data.categoriesDetail_id == product_id) {
                    ss = true;
                }
            })
            if (ss == true) {
                // console.log("already in list")
                setVisible(!visible);
            }
            else {
                let Data = [...cartData, {
                    description: product_title,
                    categoriesDetail_id: product_id,
                    images: image,
                    price: regular_price,
                    oldprice: sale_price,
                    quantity: 1
                }];
                dispatch(submitActions.price({ cart: Data }));
                navigation.navigate("cart");
            }
        }
        else {
            let Data = [...cartData, {
                description: product_title,
                categoriesDetail_id: product_id,
                images: image,
                price: regular_price,
                oldprice: sale_price,
                quantity: 1
            }];
            dispatch(submitActions.price({ cart: Data }));
            navigation.navigate("cart");
        }

    }
    const onDismissSnackBar = () => setVisible(false);
    const SearchHandler = (data) => {
        setSearchQuery(data)
    }

    return (
        <View>

            <Appbar.Header style={Srch_Style.header_root}>
                <Appbar.BackAction onPress={navigation.goBack} color="blue" />
                <Searchbar
                    placeholder={newName.placeholder}
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={Srch_Style.searchStyle}
                    onSubmitEditing={onSubmit}
                />
            </Appbar.Header>
            {searchQuery == "" ?
                <ScrollView>
                    <View style={{ height: 600 }}>
                        <View style={{ backgroundColor: 'white', marginTop: 1 }}>
                            <SkeletonContainer isLoading={loading}>
                                <View style={Srch_Style.trending_container}>
                                    <View style={Srch_Style.trending_icon}>
                                        <Ionicons name="trending-up-sharp" color='blue' size={26} />
                                    </View>
                                    <View style={Srch_Style.trending_Text_Container}>
                                        <Text style={Srch_Style.trending_Text}>Trending Searches</Text>
                                    </View>
                                </View>
                            </SkeletonContainer>

                            <View>
                                <View style={Srch_Style.trending_View_container}>
                                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                        <SkeletonContainer isLoading={loading}>
                                            <TouchableOpacity style={Srch_Style.View_Container} onPress={() => SearchHandler("Hair care")}>
                                                <Text style={Srch_Style.view_container_text}>Hair Care</Text>
                                            </TouchableOpacity>
                                        </SkeletonContainer>
                                        <SkeletonContainer isLoading={loading}>
                                            <TouchableOpacity style={Srch_Style.View_Container} onPress={() => SearchHandler("Onion")}>
                                                <Text style={Srch_Style.view_container_text}>Onion</Text>
                                            </TouchableOpacity>
                                        </SkeletonContainer>
                                        <SkeletonContainer isLoading={loading}>
                                            <TouchableOpacity style={Srch_Style.View_Container} onPress={() => SearchHandler("Skin Care")}>
                                                <Text style={Srch_Style.view_container_text}>Skin Care</Text>
                                            </TouchableOpacity>
                                        </SkeletonContainer>
                                        {/* </View> */}
                                        {/* <View style={Srch_Style.trending_View_container}> */}
                                        <SkeletonContainer isLoading={loading}>
                                            <TouchableOpacity style={Srch_Style.View_Container} onPress={() => SearchHandler("Face Care")}>
                                                <Text style={Srch_Style.view_container_text}>Face Care</Text>
                                            </TouchableOpacity>
                                        </SkeletonContainer>
                                        <SkeletonContainer isLoading={loading}>
                                            <TouchableOpacity style={Srch_Style.View_Container} onPress={() => SearchHandler("Keratin")}>
                                                <Text style={Srch_Style.view_container_text}>Karetin</Text>
                                            </TouchableOpacity>
                                        </SkeletonContainer>
                                    </ScrollView>
                                </View>

                            </View>
                        </View>
                        <SkeletonContainer isLoading={loading}>
                            <View style={Srch_Style.bestSellerRoot}>
                                <Heading title=' best selling ' />
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={Srch_Style.viewLatestProduct}
                                    onPress={() => { navigation.navigate('productListing', { name: bs }) }}
                                >
                                    <Text style={Srch_Style.latestProductText}>
                                        View All
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </SkeletonContainer>

                        <SkeletonContainer isLoading={loading} >
                            <View style={Srch_Style.productsListRoot}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                                    {bestSeldata.map((e, i) => {
                                        const rp = e.regular_price;
                                        const sp = e.sale_price;
                                        const regular_price = Number(rp).toFixed(2);
                                        const sale_price = Number(sp).toFixed(2);
                                        return (
                                            <TouchableOpacity
                                                activeOpacity={0.8}
                                                style={Srch_Style.best_touchable}
                                                onPress={() => navigation.navigate('productDetail', e.product_id)}
                                                key={i}
                                            >
                                                <View style={bsP.imgRoot} >
                                                    <Image source={{ uri: e.image }} style={bsP.productImg} />
                                                </View>

                                                <View style={bsP.contentRoot}>
                                                    <View style={bsP.descriptionRoot}>
                                                        <Text style={bsP.descriptionText}>{e.product_title}</Text>
                                                    </View>

                                                    <View style={bsP.baseLine}></View>

                                                    <View style={bsP.priceRoot}>
                                                        <Text style={bsP.oldprice}>₹{regular_price}</Text>
                                                        <Text style={bsP.spaceRoot}>/</Text>
                                                        <Text style={bsP.price}>₹{sale_price}</Text>
                                                    </View>
                                                </View>

                                                {/* Buy Now Button  */}
                                                <TouchableOpacity
                                                    activeOpacity={0.8}
                                                    style={bsP.buyNowButton}
                                                    onPress={() => AddCartHolder(e.product_title, e.product_id, e.image, e.sale_price, e.regular_price)}
                                                >
                                                    <Text style={bsP.buttonText}>BUY NOW</Text>
                                                </TouchableOpacity>

                                            </TouchableOpacity>
                                        )
                                    })}
                                </ScrollView>
                            </View>
                        </SkeletonContainer>
                    </View>
                </ScrollView>
                :
                <View style={Srch_Style.productsListRoot}>
                    {searchData != "" ?
                        <SkeletonContainer isLoading={loading}>
                            <FlatList
                                data={searchData}
                                renderItem={({ item }) => {
                                    const rp = item.regular_price;
                                    const sp = item.sale_price;
                                    const regular_price = Number(rp).toFixed(2);
                                    const sale_price = Number(sp).toFixed(2);
                                    return (
                                        < TouchableOpacity
                                            style={Srch_Style.product109}
                                            activeOpacity={0.8}
                                            onPress={() => navigation.navigate("productDetail", item.product_id)}
                                        >
                                            <View style={sS.imgRoot} >
                                                <Image source={{ uri: item.image }} style={sS.productImg} />
                                            </View>

                                            <View style={sS.contentRoot}>
                                                <View style={sS.textRoot}>
                                                    <Text style={sS.contentText}>{item.product_title}</Text>
                                                </View>
                                                <View style={sS.baseLine}></View>
                                                <View style={sS.priceRoot}>
                                                    <Text style={sS.oldprice}>₹{regular_price}</Text>
                                                    <Text style={sS.spaceRoot}>/</Text>
                                                    <Text style={sS.price}>₹{sale_price}</Text>
                                                </View>
                                            </View>

                                            {/* Buy Now Button  */}
                                            <TouchableOpacity style={sS.buyNowButton}
                                                onPress={() => CartHolder(item.product_title, item.product_id, item.image, item.regular_price, item.sale_price,)}
                                            >
                                                <Text style={sS.buttonText}>BUY NOW</Text>
                                            </TouchableOpacity>
                                        </TouchableOpacity>
                                    )
                                }}
                                numColumns={2}
                                keyExtractor={(item, index) => index}
                            />
                        </SkeletonContainer>
                        :
                        <View style={Srch_Style.noData_root}>
                            <Text style={Srch_Style.noData_text}>{nodata}</Text>
                        </View>
                    }
                </View>
            }
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                duration={2000}
                style={Srch_Style.Snackbar_style}
            >
                <Text style={Srch_Style.Snackbar_text}>Item is already added to the cart. Please Checkout..</Text>
            </Snackbar>
        </View>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    // header_root: {
    //     backgroundColor: 'white'
    // },
    // searchStyle: {
    //     maxWidth: "85%",
    //     maxHeight: 35,
    // },
    // Snackbar_style: {
    //     width: "65%",
    //     height: 55,
    //     alignSelf: 'center',
    //     position: 'absolute',
    //     zIndex: 3,
    //     bottom: 250,
    //     opacity: 0.7
    // },
    // Snackbar_text: {
    //     color: '#fff',
    //     fontSize: 14,
    //     lineHeight: 15,
    //     textAlign: 'center'
    // },
    // trending_container: {
    //     flexDirection: 'row'
    // },
    // trending_icon: {
    //     marginTop: 5,
    //     marginLeft: 17
    // },
    // trending_Text_Container: {
    //     marginTop: 5,
    //     marginLeft: 10
    // },
    // trending_Text: {
    //     fontSize: 17,
    //     color: 'blue'
    // },
    // trending_View_container: {
    //     flexDirection: 'row',
    //     width: '90%',
    //     alignSelf: 'center',
    //     // borderWidth: 1,
    //     // borderColor: 'red'
    // },
    // View_Container: {
    //     height: 35,
    //     width: 90,
    //     borderWidth: 1,
    //     borderColor: 'blue',
    //     margin: 10,
    //     borderRadius: 6
    // },
    // view_container_text: {
    //     textAlign: 'center',
    //     paddingTop: 6,
    //     color: 'blue'
    // },
    // viewLatestProduct: {
    //     height: 25,
    //     width: 70,
    //     borderRadius: 15,
    //     borderWidth: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     marginTop: 10,
    //     marginRight: 20,
    //     alignSelf: 'center'
    // },
    // bestSellerRoot: {
    //     height: 50,
    //     width: '100%',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     marginTop: 20,
    //     marginBottom: 10,
    // },
    // latestProductText: {
    //     fontSize: 12,
    //     lineHeight: 14.09,
    //     fontWeight: '600',
    //     // color: '#00000',
    //     // paddingLeft: 5
    // },
    // noData_root: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     height: '50%'
    // },
    // noData_text: {
    //     fontSize: 18
    // },
    // productsListRoot: {
    //     height: '90%',
    //     width: '100%',
    //     alignSelf: 'center',
    // },
})

