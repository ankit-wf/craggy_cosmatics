import React, { useState, useEffect } from 'react'
import { View, Text, Button, Image, ScrollView, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import BackButton from '../components/BackButton'
import SearchBar from '../components/SearchBar'
import Heading from '../components/Heading'
import { defaultStyles as ds } from '../styles/defaultStyle'
import { useSelector, useDispatch } from 'react-redux';
import { categoriesStyle as cS } from '../styles/categoriesStyle'
import { searchBarStyle as sBs } from '../styles/searchBarStyle'
import axios from 'axios'
import BackgroundImageService from '../components/CatImage'


const CategoriesScreen = ({ navigation }) => {
  // const storeData = useSelector(state => state.cartData.cart);
  // const dispatch = useDispatch();
  // const [searchQuery, setSearchQuery] = useState('');

  const [data, setData] = useState([])
  let imageData = BackgroundImageService();

  useEffect(() => {
    axios.get(
      `https://craggycosmetic.com/api/products/category/`,
      {
        headers: {
          // 'Content-Type': 'application/json',
          'consumer_key': '3b137de2b677819b965ddb7288bd73f62fc6c1f04a190678ca6e72fca3986629',
        }
      }
    ).then((res) => {
      if (res.data.status = "success") {
        setData(res.data.response)
      }

    })
  }, [])

  return (
    <View>

      <View style={styles.categories_root}>
        <Text style={styles.categories_text}>Categories</Text>
      </View>

      <View>
        <View style={{ height: 10, }}></View>
        {data.map((data, i) => {
          if (data.count > 0)
            return (
              <TouchableOpacity style={styles.Root} onPress={() => { navigation.navigate('ProductListing', { id: data.term_id, name: data.name }) }} key={i} >
                <View style={styles.mens_rooot} >

                  <Text style={styles.mens_text}> {data.name} </Text>

                  <View >
                    {imageData.map((item, id) => {
                      return (
                        (item.name === data.slug) &&
                        <Image source={item.image} style={{ height: 40, width: 40 }} key={id} />
                      )
                    })}
                  </View>

                </View>
              </TouchableOpacity>
            )
        })}
      </View>

    </View >
  );
};
export default CategoriesScreen;
const styles = StyleSheet.create({
  Root: {
    margin: 5,

  },
  categories_root: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 70,

  },
  categories_text: {
    fontSize: 25,
    paddingTop: 15
  },
  mens_rooot: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80,
    width: '100%',
    // backgroundColor: '#cc933b',
    // alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10
  },
  mens_text: {
    fontSize: 20,
    // color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    // paddingTop: 30
  },
  margin_root: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20
  }
})

