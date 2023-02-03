import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import axios from 'axios'
import { useStyles } from '../styles/responsiveStyle';
import BackgroundImageService from '../components/CatImage'


const CategoriesScreen = ({ navigation }) => {
  const styles = useStyles()
  let imageData = BackgroundImageService();
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(
      `https://craggycosmetic.com/api/products/category/`,
      {
        headers: {
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

      <View style={styles.categoryMainDiv}>
        {data.map((data, i) => {
          // if (data.count > 0)
          return (
            <TouchableOpacity style={styles.CatRoot} onPress={() => { navigation.navigate('ProductListing', { id: data.term_id, name: data.name }) }} key={i} >
              <View style={styles.catMainSec}>
                <Text style={styles.mens_text}> {data.name} </Text>
                {imageData.map((item, id) => {
                  return (
                    (item.name === data.slug) &&
                    <Image style={{ width: '100%', height: 95, }} source={item.image} key={id} />
                  )
                })}
              </View>
            </TouchableOpacity>
          )
        })}

      </View>
      <View>
      </View>

    </View >
  );
};
export default CategoriesScreen;