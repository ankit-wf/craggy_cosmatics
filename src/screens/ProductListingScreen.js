import { Text, View, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState, useRef, } from 'react'
import axios from 'axios'
import { Snackbar } from 'react-native-paper';
import { useStyles } from '../styles/responsiveStyle'
import { useStyles as h_Style } from '../styles/homeResponsive'
import { useDispatch, useSelector } from 'react-redux'
import { submitActions } from '../store/dataSlice'
import { ScrollView } from 'react-native-virtualized-view';
import BottomSheet from 'react-native-gesture-bottom-sheet'
import { SkeletonContainer } from 'react-native-dynamic-skeletons';
import { RadioButton } from 'react-native-paper';
import { CONSUMER_KEY, ALL_PRODUCT_API, BEST_SELLING_API, HOME_API } from "@env";
import SocialIcon from '../components/SocialIcon'

const ProductListingScreen = ({ navigation, route }) => {
    const Pl_Style = useStyles()
    const home_Style = h_Style()
    const dispatch = useDispatch();
    const cartData = useSelector(state => state.cartData.cart);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const name = route.params.name;
    const id = route.params.id;
    const banner = route.params.banner;
    const [checked, setChecked] = useState('Popularity');
    const [visible, setVisible] = useState(false);
    const bs = useRef();

    useEffect(() => {
        if (id) {
            allProductsApi()
            setTimeout(() => {
                setLoading(false)
            },);
        }
        if (name == "BestSellers") {
            bestSellingApi()
            setTimeout(() => {
                setLoading(false)
            },);
        }
        if (name == "latest Product") {
            latestProductApi()
            setTimeout(() => {
                setLoading(false)
            },);
        }
    }, [id])

    const allProductsApi = () => {
        axios.get(
            ALL_PRODUCT_API,
            {
                params: {
                    category_id: id
                },
                headers: {
                    'Content-Type': 'application/json',
                    'consumer_key': CONSUMER_KEY,
                }
            }
        ).then((res) => {
            setData(res.data)
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
                setData(res.data.response)
            }
        })
    }

    const latestProductApi = () => {
        axios.get(
            HOME_API,
            {
                headers: {
                    'consumer_key': CONSUMER_KEY,
                }
            }
        ).then((res) => {
            setData(res.data.latest_products)
        })
    }
    const onDismissSnackBar = () => setVisible(false);
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
    const latestData = () => {
        setChecked('Latest')
        data.sort((a, b) => b.publish_data.localeCompare(a.publish_data));
        setData(data)
    }
    const LowestData = () => {
        setChecked('Low to High')
        data.sort((a, b) => a.sale_price.localeCompare(b.sale_price));
        setData(data)
    }
    const HighestData = () => {
        setChecked("High to Low")
        data.sort((a, b) => b.sale_price.localeCompare(a.sale_price));
        setData(data)
    }
    return (
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
            >
                <SkeletonContainer isLoading={loading}>
                    <View style={Pl_Style.banner_img_root}>
                        <Image source={{ uri: banner }} style={Pl_Style.banner_img} />
                    </View>
                </SkeletonContainer>
                <SafeAreaView style={Pl_Style.container}>
                    <SkeletonContainer isLoading={loading}>
                        <View style={Pl_Style.Cat_Seller_Root}>
                            <Text style={Pl_Style.productListing_name}>{name}</Text>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                style={Pl_Style.touchable_sort}
                                onPress={() => bs.current.show()}
                            >
                                <Text style={Pl_Style.sort_Text}>Sort</Text>
                                <Text style={Pl_Style.dots}>:</Text>
                                <Text style={Pl_Style.sort_Text}>{checked}</Text>
                            </TouchableOpacity>
                        </View>
                    </SkeletonContainer>
                    <BottomSheet hasDraggableIcon ref={bs} height={220}   >
                        <View style={Pl_Style.panel}>
                            <View style={Pl_Style.sort_align_root}>
                                <Text style={Pl_Style.panelTitle}>Sort By</Text>
                            </View>
                            <View style={Pl_Style.panel_btnText_Root}>
                                <Text style={Pl_Style.panel_select_text}>Popularity</Text>
                                <RadioButton
                                    value="Popularity"
                                    status={checked === 'Popularity' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('Popularity')}
                                />
                            </View>
                            <View style={Pl_Style.panel_btnText_Root}>
                                <Text style={Pl_Style.panel_select_text}>Latest</Text>
                                <RadioButton
                                    value="Latest"
                                    status={checked === 'Latest' ? 'checked' : 'unchecked'}
                                    onPress={latestData}
                                />
                            </View>
                            <View style={Pl_Style.panel_btnText_Root}>
                                <Text style={Pl_Style.panel_select_text}>Price - Low to High</Text>
                                <RadioButton
                                    value="Low"
                                    status={checked === 'Low' ? 'checked' : 'unchecked'}
                                    onPress={LowestData}
                                />
                            </View>
                            <View style={Pl_Style.panel_btnText_Root}>
                                <Text style={Pl_Style.panel_select_text}>Price - High to Low</Text>
                                <RadioButton
                                    value="High"
                                    status={checked === 'High' ? 'checked' : 'unchecked'}
                                    onPress={HighestData}
                                />
                            </View>
                        </View>
                    </BottomSheet>
                </SafeAreaView>
                <View style={Pl_Style.flatList_Root}>
                    <SkeletonContainer isLoading={loading}>
                        <FlatList
                            removeClippedSubviews
                            data={data}
                            initialNumToRender={5}
                            renderItem={({ item }) => {
                                const rp = item.regular_price;
                                const sp = item.sale_price;
                                const regular_price = Number(rp).toFixed(2);
                                const sale_price = Number(sp).toFixed(2);
                                return (
                                    <SkeletonContainer isLoading={loading}>
                                        < TouchableOpacity
                                            style={Pl_Style.flatList_tochable_root}
                                            activeOpacity={0.8}
                                            onPress={() => navigation.navigate("productDetail", item.product_id)}
                                        >
                                            <View style={Pl_Style.flatList_imgRoot} >
                                                <Image source={{ uri: item.image }} style={Pl_Style.flatList_Img} />
                                            </View>
                                            <View style={Pl_Style.flatList_contentRoot}>
                                                <View style={Pl_Style.flatList_textRoot}>
                                                    <Text style={Pl_Style.flatList_contentText}>{item.product_title}</Text>
                                                </View>
                                                <View style={Pl_Style.flatList_baseLine}></View>
                                                <View style={Pl_Style.flatList_priceRoot}>
                                                    <Text style={Pl_Style.flatList_oldprice}>₹{regular_price}</Text>
                                                    <Text style={Pl_Style.flatList_spaceRoot}></Text>
                                                    <Text style={Pl_Style.flatList_price}>₹{sale_price}</Text>
                                                </View>
                                            </View>

                                            {/* Buy Now Button  */}
                                            <View style={Pl_Style.btn_btn}>
                                                <TouchableOpacity style={Pl_Style.flatList_buyNowButton}
                                                    onPress={() => CartHolder(item.product_title, item.product_id, item.image, item.sale_price, item.regular_price)}
                                                >
                                                    <Text style={Pl_Style.flatList_buttonText}>BUY NOW</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </TouchableOpacity>
                                    </SkeletonContainer>
                                )
                            }}
                            numColumns={2}
                            keyExtractor={(item, index) => index}
                        />
                    </SkeletonContainer>
                    <SkeletonContainer isLoading={loading}>
                        <SocialIcon />
                    </SkeletonContainer>
                </View>
            </ScrollView >
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                duration={2000}
                style={Pl_Style.Snackbar_style}
            >
                <Text style={Pl_Style.Snackbar_text}>Item is already added to the cart. Please Checkout..</Text>
            </Snackbar>
        </View>
    )
}
export default ProductListingScreen