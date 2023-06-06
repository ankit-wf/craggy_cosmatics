import { Text, View, TouchableOpacity, ScrollView, Image, FlatList, Platform } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { submitActions } from '../store/dataSlice'
import { Appbar, Searchbar, Snackbar } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios'
import Heading from '../components/Heading'
import { useStyles } from '../styles/searchResponsive';
const placeholderText = require('../../Data/Placeholder.json');
import { useStyles as H_Style } from '../styles/homeResponsive';
import { SkeletonContainer } from 'react-native-dynamic-skeletons';
import { CONSUMER_KEY, SEARCH_PRODUCT_API, BEST_SELLING_API } from "@env";

const SearchScreen = ({ navigation }) => {
    let bs = "BestSellers";
    let nodata = "Data not Match.."
    const Srch_Style = useStyles();
    const hm = H_Style();
    const dispatch = useDispatch();
    const cartData = useSelector(state => state.cartData.cart);
    const [loading, setLoading] = useState(true)
    const [visible, setVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const [dataload, setDataload] = useState(true)
    const [searchData, setSearchData] = useState([]);
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
            if (res.data.status = "success") {
                setBestSeldata(res.data.response)
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
                                        <Ionicons name="trending-up-sharp" color='blue' size={(Platform.OS === 'ios') ? 20 : 26} />
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
                                    <Text style={hm.latestProductText}>
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
                                                style={hm.best_touchable}
                                                onPress={() => navigation.navigate('productDetail', e.product_id)}
                                                key={i}
                                            >
                                                <View style={hm.imgRoot} >
                                                    <Image source={{ uri: e.image }} style={hm.productImg} />
                                                </View>
                                                <View style={hm.contentRoot}>
                                                    <View style={hm.descriptionRoot}>
                                                        <Text style={hm.descriptionText}>{e.product_title}</Text>
                                                    </View>
                                                    <View style={hm.baseLine}></View>
                                                    <View style={hm.priceRoot}>
                                                        <Text style={hm.oldprice}>₹{regular_price}</Text>
                                                        <Text style={hm.spaceRoot}></Text>
                                                        <Text style={hm.price}>₹{sale_price}</Text>
                                                    </View>
                                                </View>

                                                {/* Buy Now Button  */}
                                                <TouchableOpacity
                                                    activeOpacity={0.8}
                                                    style={hm.buyNowButton}
                                                    onPress={() => AddCartHolder(e.product_title, e.product_id, e.image, e.sale_price, e.regular_price)}
                                                >
                                                    <Text style={hm.buttonText}>BUY NOW</Text>
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
                                            <View style={hm.imgRoot} >
                                                <Image source={{ uri: item.image }} style={hm.productImg} />
                                            </View>
                                            <View style={hm.contentRoot}>
                                                <View style={hm.textRoot}>
                                                    <Text style={hm.contentText}>{item.product_title}</Text>
                                                </View>
                                                <View style={hm.baseLine}></View>
                                                <View style={hm.priceRoot}>
                                                    <Text style={hm.oldprice}>₹{regular_price}</Text>
                                                    <Text style={hm.spaceRoot}></Text>
                                                    <Text style={hm.price}>₹{sale_price}</Text>
                                                </View>
                                            </View>

                                            {/* Buy Now Button  */}
                                            <TouchableOpacity style={hm.buyNowButton}
                                                onPress={() => CartHolder(item.product_title, item.product_id, item.image, item.regular_price, item.sale_price,)}
                                            >
                                                <Text style={hm.buttonText}>BUY NOW</Text>
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
                style={hm.Snackbar_style}
            >
                <Text style={hm.Snackbar_text}>Item is already added to the cart. Please Checkout..</Text>
            </Snackbar>
        </View>
    )
}
export default SearchScreen;
