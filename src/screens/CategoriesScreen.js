import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions, FlatList, StyleSheet, ScrollView } from 'react-native'
import axios from 'axios'
import { useStyles } from '../styles/responsiveStyle';
import { SkeletonContainer } from 'react-native-dynamic-skeletons';
import { ALL_CATEGORIES_API, CONSUMER_KEY } from "@env";

const CategoriesScreen = ({ navigation }) => {
  const styles = useStyles()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  let Cat = "Categories";

  useEffect(() => {
    const sF = navigation.addListener('focus', () => {
      axios.get(
        ALL_CATEGORIES_API,
        {
          headers: {
            'consumer_key': CONSUMER_KEY,
          }
        }
      ).then((res) => {
        if (res.data.status = "success") {
          setData(res.data.response)
          setTimeout(() => {
            setLoading(false)
          },);
        }
      })
    });
    return sF;
  }, [])

  return (
    <View>
      <View style={styles.categories_root}>
        <Text style={styles.categories_text}>{Cat}</Text>
      </View>
      <ScrollView>
        <View style={styles.categoryMainDiv}>
          {data.map((data, i) => {
            return (
              <SkeletonContainer isLoading={loading} key={i} >
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles1.touchable_style}
                  onPress={() => { navigation.navigate('productListing', { id: data.term_id, name: data.name, banner: data.app_banner_image }) }}
                  key={i}
                >
                  <View style={styles.catMainSec}>
                    <Text style={styles.mens_text}> {data.name} </Text>
                    <Image style={{ width: '100%', height: 95, }} source={{ uri: data.app_banner_image }} />
                  </View>
                </TouchableOpacity>
              </SkeletonContainer>
            )
          })}
        </View>
      </ScrollView>
    </View >
  );
};
export default CategoriesScreen;
const styles1 = StyleSheet.create({
  img_style: {
    width: '100%',
    height: 95
  },
  touchable_style: {
    backgroundColor: ['#e1e1e1', '#f2f2f2', '#e1e1e1'],
    width: '100%',
    height: 95,
    marginBottom: 8
  }
})