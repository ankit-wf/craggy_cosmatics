import React, { useState } from 'react'
import { View, Text, Button, Image, ScrollView, TouchableOpacity, FlatList, SafeAreaView } from 'react-native'
import BackButton from '../components/BackButton'
// import { Colors, Searchbar } from 'react-native-paper'
import SearchBar from '../components/SearchBar'
import { defaultStyles as ds } from '../styles/defaultStyle'
import { submitActions } from '../store/dataSlice'
import { useSelector, useDispatch } from 'react-redux';
import { shopStyle as sS } from '../styles/shopStyle'
// import { defaultStyles as ds } from '../styles/defaultStyle'
// const imgData = require('../../imgData.json');
const allProduct = require('../../Data/allProduct.json')


const ShopScreen = ({ navigation }) => {
  const storeData = useSelector(state => state.cartData.cart);
  const dispatch = useDispatch();

  // const dataSource = require('../../imgData.json');
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => {
    setSearchQuery(query)
    console.log('first', query)
  }
  const AddToCartHolder = (description, product_id, images, price, oldprice, quantity) => {

    let Data = [...storeData, {
      description: description,
      product_id: product_id,
      images: images,
      price: price,
      oldprice: oldprice,
      quantity: quantity
    }];
    dispatch(submitActions.price(
      {
        cart: Data
      }
    ));
    navigation.navigate('cart', product_id);
  }
  return (
    <View>
      <View style={sS.Root}>

        <View style={sS.searchRoot}>
          <View style={{ marginTop: 0 }}>
            <BackButton goBack={navigation.goBack} Color={'#CC933B'} />
          </View>

          <View style={sS.searchImgRoot}>
            <Image source={require('../../assets/group.png')} style={sS.searchImg} />
          </View>

          <View style={sS.searchIconRoot} >
            <SearchBar onChangeText={onChangeSearch} value={searchQuery} />
          </View>
        </View>

      </View>


      <View style={sS.allProductRoot}>
        <TouchableOpacity style={sS.allProduct} onPress={() => console.log("first")} >
          <Text style={sS.allProductText}>
            All Products
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log("first")}>
          <Image source={require('../../assets/FILTER.png')} style={sS.filterImg} />
        </TouchableOpacity>
      </View>

      <SafeAreaView style={sS.productsListRoot}>
        <FlatList
          data={allProduct}
          renderItem={({ item }) => (

            <TouchableOpacity style={sS.product109} onPress={() => navigation.navigate("productDetail", item.product_id)} >
              <View style={sS.imgRoot} >
                <Image source={{ uri: item.images }} style={sS.productImg} />
              </View>

              <View style={sS.contentRoot}>

                <View style={sS.textRoot}>
                  <Text style={sS.contentText}>{item.description}</Text>
                </View>

                <View style={sS.baseLine}></View>

                <View style={sS.priceRoot}>
                  <Text style={sS.price}>₹{item.price}</Text>
                  <Text style={sS.spaceRoot}>/ </Text>
                  <Text style={sS.oldprice}>₹{item.oldprice}</Text>
                </View>

              </View>

              {/* Buy Now Button  */}

              <TouchableOpacity style={sS.buyNowButton}
                onPress={() => AddToCartHolder(item.description, item.product_id, item.images, item.price, item.oldprice, item.quantity)}
              >
                <Text style={sS.buttonText}>BUY NOW</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
      </SafeAreaView>
    </View>
  )
}

export default ShopScreen;