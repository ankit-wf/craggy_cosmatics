import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import axios from 'axios'

const CategoriesScreen = ({ navigation }) => {
  const styles = useStyles()
  let imageData = BackgroundImageService();
  const [data, setData] = useState([])
  let imageData = BackgroundImageService();

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

      <View>
        {/* <ScrollView > */}
        <View>
          {data.map((data, i) => {
            if (data.count > 0)
              return (
                <TouchableOpacity style={styles.Root} onPress={() => { navigation.navigate('ProductListing', { id: data.term_id, name: data.name }) }} key={i} >
                  <View style={styles.mens_rooot} >
                    <Text style={styles.mens_text}> {data.name} </Text>
                    <View >
                      <Image source={require('../../assets/images/for-mens.png')} style={{ height: 50, width: 50, }} />
                    </View>
                  </View>
                </TouchableOpacity>
              )
          })}
        </View>
        {/* </ScrollView> */}
      </View>
    </View >
  );
};
export default CategoriesScreen;
const styles = StyleSheet.create({
  Root: {
    margin: 20
  },
  categories_root: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 80
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

