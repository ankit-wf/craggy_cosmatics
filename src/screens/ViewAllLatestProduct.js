// import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native'
// import React from 'react'
// import BackButton from '../components/BackButton'
// import { shopStyle as sS } from '../styles/shopStyle'
// const latestProduct = require('../../Data/latestProduct.json')

// const ViewAllLatestProduct = ({ navigation }) => {
//     return (
//         <View>
//             {/* 
//                 <BackButton goBack={navigation.goBack} Color={'#666666'} />
//                 <Text style={styles.deliveryText}>View AllLatestProduct</Text> */}

//             <SafeAreaView style={sS.productsListRoot}>
//                 <FlatList
//                     data={latestProduct}
//                     renderItem={({ item }) => (

//                         <TouchableOpacity style={sS.product109} onPress={() => navigation.navigate("Product", item.product_id)} >
//                             <View style={sS.imgRoot} >
//                                 <Image source={{ uri: item.images }} style={sS.productImg} />
//                             </View>

//                             <View style={sS.contentRoot}>

//                                 <View style={sS.textRoot}>
//                                     <Text style={sS.contentText}>{item.description}</Text>
//                                 </View>

//                                 <View style={sS.baseLine}></View>

//                                 <View style={sS.priceRoot}>
//                                     <Text style={sS.price}>₹{item.price}</Text>
//                                     <Text style={sS.spaceRoot}>/ </Text>
//                                     <Text style={sS.oldprice}>₹{item.oldprice}</Text>
//                                 </View>

//                             </View>

//                             {/* Buy Now Button  */}

//                             <TouchableOpacity style={sS.buyNowButton}
//                                 onPress={() => AddToCartHolder(item.description, item.product_id, item.images, item.price, item.oldprice, item.quantity)}
//                             >
//                                 <Text style={sS.buttonText}>BUY NOW</Text>
//                             </TouchableOpacity>
//                         </TouchableOpacity>
//                     )}
//                     numColumns={2}
//                     keyExtractor={(item, index) => index}
//                 />
//             </SafeAreaView>

//         </View>
//     )
// }

// export default ViewAllLatestProduct;

// const styles = StyleSheet.create({
//     deliveryText: {
//         fontSize: 20,
//         alignSelf: 'center',
//         paddingTop: 35,
//         paddingLeft: 20
//     },
// })