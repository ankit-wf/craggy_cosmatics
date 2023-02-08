import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import axios from 'axios'
import { useStyles } from '../styles/responsiveStyle';
import BackgroundImageService from '../components/CatImage'
import { SkeletonContainer } from 'react-native-dynamic-skeletons';

const CategoriesScreen = ({ navigation }) => {
  const styles = useStyles()
  let imageData = BackgroundImageService();
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);

  console.log('category', loading);

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
      setTimeout(() => {
        setLoading(false)
      }, 5000);
    })
  }, [])

  return (
    <View>
      <View style={styles.categories_root}>
        <Text style={styles.categories_text}>Categories</Text>
      </View>

      <View style={styles.categoryMainDiv}>
        {data.map((data, i) => {
          if (data.count > 0)
            return (
              <SkeletonContainer isLoading={loading} key={i} >
                <TouchableOpacity style={{
                  backgroundColor: ['#e1e1e1', '#f2f2f2', '#e1e1e1'],
                  width: '100%',
                  height: 95,
                  marginBottom: 8
                }}
                  onPress={() => { navigation.navigate('ProductListing', { id: data.term_id, name: data.name }) }} key={i}
                >
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
              </SkeletonContainer>
            )
        })}
      </View>
    </View >
  );
};
export default CategoriesScreen;