import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import BackButton from '../components/BackButton';
import { Ionicons } from '@expo/vector-icons'
import { Badge, Button } from 'react-native-paper';
import { loginActions } from '../store/UserSlice'
import * as ImagePicker from 'expo-image-picker';
import RBSheet from "react-native-raw-bottom-sheet";

const AccountScreen = ({ navigation }) => {

  const storeData = useSelector(state => state.cartData.cart);
  const isLoggedIn = useSelector(state => state.userData.isLoggedIn);
  const logindata = useSelector(state => state.userData.user);

  const dispatch = useDispatch();

  const LogoutUserHandler = () => {
    dispatch(loginActions.loginform({ isLoggedIn: false }));
    navigation.reset({
      index: 0,
      routes: [{ name: 'HomeScreen' }],
    });
    // navigation.navigate('login');
  }


  // image picker
  const refRBSheet = useRef();
  const [pickedImagePath, setPickedImagePath] = useState('');

  const showImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync();
    console.log(result);
    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  }

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();
    console.log(result);
    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  }



  return (
    <View>
      <View style={styles.Root}>
        <ImageBackground source={require('../../assets/imgBackground.png')} resizeMode='stretch' style={{ height: '100%' }} onPress={openCamera} >
          <View style={styles.profileImgRoot}>
            <TouchableOpacity style={{ height: 100, width: 100, borderWidth: 2, borderColor: 'red', borderRadius: 100, alignSelf: 'center' }}
              onPress={() => refRBSheet.current.open()}
            >
              {
                pickedImagePath !== '' && <Image
                  source={{ uri: pickedImagePath }}
                  style={styles.image}
                />
              }
            </TouchableOpacity>

            <View style={styles.iconStyle}>
              <Ionicons
                name="pencil"
                color='#000'
                size={22}
              />
            </View>

            {logindata.map((name, i) => {
              return (
                <View style={styles.profileTextRoot} key={i}>
                  <Text style={styles.helloText}>Hello </Text>
                  <Text style={styles.redText}>{name.email}</Text>
                </View>
              )
            })}
          </View>

          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            customStyles={{
              wrapper: {
                backgroundColor: "transparent",
              },
              draggableIcon: {
                backgroundColor: "#000"
              }
            }}
          >
            <View style={styles.screen}>
              <View style={styles.buttonContainer}>
                <View>
                  <Button onPress={showImagePicker} title="Select an image" />
                </View>
                <View style={{ marginTop: 10 }} >
                  <Button onPress={openCamera} title="Open camera" />
                </View>
              </View>
            </View>
          </RBSheet>
        </ImageBackground>
      </View>
      <View style={{ position: 'absolute' }}>
        <BackButton goBack={navigation.goBack} Color={'#666666'} />
      </View>

      <View style={styles.CraggyTextRoot}>
        <View style={styles.textRoot}>
          <TouchableOpacity style={styles.myOrderRoot} onPress={() => navigation.navigate('my_order')}>
            <Image source={require('../../assets/myorder.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.myWishlistRoot} onPress={() => navigation.navigate('my_wishlist')}>
            <Image source={require('../../assets/wishlist.png')} />
          </TouchableOpacity>

          {storeData.length < 1 ?
            <TouchableOpacity style={styles.myNotificationRoot} onPress={() => navigation.navigate('Cart')}>
              <Image source={require('../../assets/notification.png')} />
            </TouchableOpacity>

            : <TouchableOpacity style={styles.myNotificationRoot} onPress={() => navigation.navigate('Cart')}>
              <Image source={require('../../assets/notification.png')} />
              <Badge style={styles.badgeStyle}>{storeData.length}</Badge>
            </TouchableOpacity>
          }
        </View>
        <View style={styles.baseLine2} />

        <TouchableOpacity style={styles.myProfileRoot} onPress={() => navigation.navigate('my_profile')}>
          <Text style={styles.profileText}>MY PROFILE</Text>
          <Ionicons
            name="chevron-forward"
            color='#666666'
            size={25}
            style={{ lineHeight: 42 }}
          />
        </TouchableOpacity>

        <View style={styles.baseLine} />

        <TouchableOpacity style={styles.myProfileRoot} onPress={() => navigation.navigate('Addresses')}>
          <Text style={styles.profileText}>MANAGE ADDRESSES</Text>
          <Ionicons
            name="chevron-forward"
            color='#666666'
            size={25}
            style={{ lineHeight: 42 }}
          />
        </TouchableOpacity>

        <View style={styles.baseLine} />

        {/* <TouchableOpacity style={styles.myProfileRoot} onPress={() => navigation.navigate('reviews')} >
          <Text style={styles.profileText}>MY REVIEWS</Text>
          <Ionicons
            name="chevron-forward"
            color='#666666'
            size={25}
            style={{ lineHeight: 42 }}
          />
        </TouchableOpacity>

        <View style={styles.baseLine} /> */}

        <TouchableOpacity style={styles.myProfileRoot} onPress={() => navigation.navigate('offer_coupan')} >
          <Text style={styles.profileText}>OFFER AND COUPAN</Text>
          <Ionicons
            name="chevron-forward"
            color='#666666'
            size={25}
            style={{ lineHeight: 42 }}
          />
        </TouchableOpacity>

        <Button style={styles.checkoutButton} onPress={LogoutUserHandler}>
          <Text style={styles.checkoutText}>LOG OUT</Text>
        </Button>
      </View>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <View style={styles.screen}>

          <View style={styles.buttonContainer}>
            <View>
              <Button onPress={showImagePicker} title="Select an image" />
            </View>
            <View style={{ marginTop: 10 }} >
              <Button onPress={openCamera} title="Open camera" />
            </View>
          </View>

        </View>
      </RBSheet>
    </View>
  )
}
export default AccountScreen;
const styles = StyleSheet.create({
  Root: {
    height: 320,
    // backgroundColor: 'black',
    // position: 'relative'
  },
  profileImgRoot: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginVertical: '22%'
  },
  imgStyle: {
    height: '100%',
    width: '100%'
  },
  iconStyle: {
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: -1,
    position: 'absolute'
  },

  profileTextRoot: {
    flexDirection: 'row',
    marginTop: 15,
    alignSelf: 'center',
  },
  helloText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Raleway500',
    lineHeight: 22
  },
  redText: {
    color: '#CC933B',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Raleway500',
    lineHeight: 22
  },
  CraggyTextRoot: {
    height: 105,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: '-22%',
    position: 'relative'

  },
  textRoot: {
    flexDirection: 'row',
    width: "100%",
  },
  myOrderRoot: {
    height: 50,
    width: 100,
    borderRadius: 30,
    marginTop: 35,
    marginLeft: "3%"
  },
  myWishlistRoot: {
    height: 50,
    width: 100,
    borderRadius: 30,
    marginTop: 35,
    marginLeft: "14%"
  },
  myNotificationRoot: {
    // height: 30,
    // borderRadius: 40,
    marginTop: 35,
    marginLeft: '13%'
  },
  badgeStyle: {
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: -10
  },
  baseLine2: {
    height: 1,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#DDDDDD',
    marginTop: 20
  },
  baseLine: {
    height: 1,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#C4C4C4',
    marginTop: 10
  },
  myProfileRoot: {
    height: 35,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  profileText: {
    fontSize: 14,
    lineHeight: 42,
    fontWeight: '500',
    fontFamily: 'Raleway500',

  },
  craggyText: {
    fontSize: 20,
    fontWeight: '450',
    lineHeight: 25,
  },
  checkoutButton: {
    height: 45,
    width: '90%',
    backgroundColor: '#C68625',
    marginTop: 19,
    alignSelf: 'center',
    borderRadius: 20
  },
  countinueButton: {
    height: 45,
    width: '90%',
    backgroundColor: '#222222',
    marginTop: 19,
    alignSelf: 'center',
    borderRadius: 20
  },
  checkoutText: {
    fontSize: 12,
    color: '#fff',
    lineHeight: 23,
    fontWeight: '700',
    fontFamily: 'Raleway700'
  },
  screen: {
    marginTop: -100,
    zIndex: 9999,
    position: 'relative'
  },
  buttonContainer: {
    width: "50%",
    alignSelf: 'center'
  },
  imageContainer: {
    padding: 30
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  }
})

