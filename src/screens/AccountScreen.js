import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import BackButton from '../components/BackButton';
import { Ionicons } from '@expo/vector-icons'
import { loginActions } from '../store/UserSlice'
import { submitActions } from '../store/dataSlice'
import { useFocusEffect } from '@react-navigation/native';


const AccountScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  // const storeData = useSelector(state => state.cartData.cart);
  const isLoggedIn = useSelector(state => state.userData.isLoggedIn);
  const userData = useSelector(state => state.userData.user_data);


  useFocusEffect(
    React.useCallback(() => {
      if (isLoggedIn === false) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'login' }],
        });
      }
      return;
    }, [])
  );

  const LogoutUserHandler = () => {
    dispatch(loginActions.loginform({ isLoggedIn: false }));
    dispatch(loginActions.userlogin({ user_data: "" }));
    // dispatch(submitActions.price({ cart: "" }));
    navigation.reset({
      index: 0,
      routes: [{ name: 'homeScreen' }],
    });
    // navigation.navigate('login');
  }
  return (
    <View>
      <View style={styles.Root}>
        <ImageBackground source={require('../../assets/imgBackground.png')} resizeMode='stretch' style={{ height: '100%' }}  >
          <View style={styles.profileImgRoot}>
            <View style={styles.ImgRoot_Radius}>
              <Image source={(require('../../assets/images/dummy.png'))} style={styles.image} />
            </View>
            <View style={styles.profileTextRoot}>
              <View style={styles.display_name}>
                <Text style={styles.redTextName}>{userData.display_name}</Text>
              </View>
              <View style={styles.user_phone}>
                <Text style={styles.redText}>{userData.user_phone}</Text>
              </View>
              <View style={styles.display_name}>
                <Text style={styles.redText}>{userData.user_email}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.CraggyTextRoot}>
        <ScrollView>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.myProfileRoot}
            onPress={() => navigation.navigate('order')}
          >
            <View style={{ flexDirection: 'row' }}>
              <Ionicons
                name="newspaper-outline"
                color='#666666'
                size={32}
                style={styles.icon_style}
              />
              <Text style={styles.profileText}>Orders</Text>
            </View>

            <Ionicons
              name="chevron-forward"
              color='#666666'
              size={25}
              style={styles.icon_lineHieght}
            />
          </TouchableOpacity>

          <View style={styles.baseLine} />

          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.myProfileRoot}
            onPress={() => navigation.navigate('address')}
          >
            <View style={{ flexDirection: 'row' }}>
              <Ionicons
                name="location-outline"
                color='#666666'
                size={32}
                style={styles.icon_style}
              />
              <Text style={styles.profileText}> Addresses</Text>
            </View>

            <Ionicons
              name="chevron-forward"
              color='#666666'
              size={25}
              style={styles.icon_lineHieght}
            />
          </TouchableOpacity>

          <View style={styles.baseLine} />

          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.myProfileRoot}
            onPress={() => navigation.navigate('wishlist')}
          >
            <View style={{ flexDirection: 'row' }}>
              <Ionicons
                name="heart-circle-outline"
                color='#666666'
                size={35}
                style={styles.icon_style}
              />
              <Text style={styles.profileText}>Wishlist</Text>
            </View>

            <Ionicons
              name="chevron-forward"
              color='#666666'
              size={25}
              style={styles.icon_lineHieght}
            />
          </TouchableOpacity>

          <View style={styles.baseLine} />

          {/* <TouchableOpacity style={styles.myProfileRoot} onPress={() => navigation.navigate('payment')} >
          <View style={{ flexDirection: 'row' }}>
            <Ionicons
              name="heart-circle-outline"
              color='#666666'
              size={35}
              style={styles.icon_style}
            />
            <Text style={styles.profileText}>Payment Methods</Text>
          </View>

          <Ionicons
            name="chevron-forward"
            color='#666666'
            size={25}
            style={styles.icon_lineHieght}
          />
        </TouchableOpacity>

        <View style={styles.baseLine} /> */}

          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.myProfileRoot}
            onPress={() => navigation.navigate('coupan')}
          >
            <View style={{ flexDirection: 'row' }}>
              <Ionicons
                name="headset-outline"
                color='#666666'
                size={32}
                style={styles.icon_style}
              />
              <Text style={styles.profileText}>Help & Suport</Text>
            </View>

            <Ionicons
              name="chevron-forward"
              color='#666666'
              size={25}
              style={styles.icon_lineHieght}
            />
          </TouchableOpacity>
          <View style={styles.baseLine} />


          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.myProfileRoot}
            onPress={() => navigation.navigate('coupan')}
          >
            <View style={{ flexDirection: 'row' }}>
              <Ionicons
                name="md-document-text-outline"
                color='#666666'
                size={32}
                style={styles.icon_style}
              />
              <Text style={styles.profileText}>Terms & Conditions</Text>
            </View>

            <Ionicons
              name="chevron-forward"
              color='#666666'
              size={25}
              style={styles.icon_lineHieght}
            />
          </TouchableOpacity>
          <View style={styles.baseLine} />


          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.myProfileRoot}
            onPress={() => navigation.navigate('coupan')}
          >
            <View style={{ flexDirection: 'row' }}>
              <Ionicons
                name="heart-circle"
                color='#666666'
                size={35}
                style={styles.icon_style}
              />
              <Text style={styles.profileText}>About Us</Text>
            </View>

            <Ionicons
              name="chevron-forward"
              color='#666666'
              size={25}
              style={styles.icon_lineHieght}
            />
          </TouchableOpacity>

          <View style={styles.baseLine} />
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.myProfileRoot}
            onPress={() => navigation.navigate('hotOffer')}
          >
            <View style={{ flexDirection: 'row' }}>
              <Ionicons
                name="heart-circle"
                color='#666666'
                size={35}
                style={styles.icon_style}
              />
              <Text style={styles.profileText}>Hot Offers</Text>
            </View>

            <Ionicons
              name="chevron-forward"
              color='#666666'
              size={25}
              style={styles.icon_lineHieght}
            />
          </TouchableOpacity>
          <View style={styles.baseLine} />
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.myProfileRoot}
            onPress={LogoutUserHandler}
          >
            <View style={{ flexDirection: 'row' }}>
              <Ionicons
                name="exit-outline"
                color='#666666'
                size={32}
                style={styles.icon_style}
              />
              <Text style={styles.profileText}>Logout</Text>
            </View>

            <Ionicons
              name="chevron-forward"
              color='#666666'
              size={25}
              style={styles.icon_lineHieght}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  )
}
export default AccountScreen;
const styles = StyleSheet.create({
  Root: {
    height: 270,
    // backgroundColor: 'black',
    // position: 'relative'
  },
  profileImgRoot: {
    // height: 100,
    width: "80%",
    // borderRadius: 50,
    alignSelf: 'center',
    marginVertical: '7%',
    marginHorizontal: '10%',
    flexDirection: 'row'
  },
  ImgRoot_Radius: {
    height: 80,
    width: 80,
    borderWidth: 3,
    borderColor: '#CC933B',
    borderRadius: 100,
    alignSelf: 'center'
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
    // flexDirection: 'row',
    // marginTop: 15,
    // alignSelf: 'center',
  },
  display_name: {
    width: 300
  },
  user_phone: {
    width: 300,
    marginTop: 8
  },
  helloText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Raleway500',
    lineHeight: 22
  },
  redTextName: {
    color: '#CC933B',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Raleway500',
    lineHeight: 22,
    paddingLeft: 15
  },
  redText: {
    color: '#CC933B',
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Raleway500',
    lineHeight: 22,
    paddingLeft: 15
  },
  CraggyTextRoot: {
    height: 400,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: '-42%',
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
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#C4C4C4',
    marginTop: 10
  },
  myProfileRoot: {
    height: 45,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  icon_style: {
    marginTop: 8
  },
  profileText: {
    fontSize: 14,
    lineHeight: 42,
    fontWeight: '500',
    fontFamily: 'Raleway500',
    paddingHorizontal: 15,
    paddingTop: 3

  },
  icon_lineHieght: {
    lineHeight: 42
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
  },
  closeIcon: {
    alignSelf: 'flex-end',
    marginRight: 15
  },
  cameraPermissin: {
    height: 30,
    width: 120,
    borderRadius: 10,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 15
  },
  cameraText: {
    alignSelf: 'center',
    fontSize: 16
  }
})

