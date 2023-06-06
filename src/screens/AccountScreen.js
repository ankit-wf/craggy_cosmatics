import { Text, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons'
import { loginActions } from '../store/UserSlice'
import { useFocusEffect } from '@react-navigation/native';
import { useStyles } from '../styles/responsiveStyle'

const AccountScreen = ({ navigation }) => {
  const Ac_Style = useStyles();
  const dispatch = useDispatch();
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
    navigation.reset({
      index: 0,
      routes: [{ name: 'homeScreen' }],
    });
  }
  return (
    <View>
      <ImageBackground source={require('../../assets/imgBackground.png')} resizeMode='stretch' style={{ height: '100%' }}  >
        <ScrollView>
          <View style={Ac_Style.account_Root}>
            <View style={Ac_Style.profileImgRoot}>
              <View style={Ac_Style.ImgRoot_Radius}>
                <Image source={(require('../../assets/images/dummy.png'))} style={Ac_Style.Account_profile_image} />
              </View>
              <View>
                <View style={Ac_Style.display_name}>
                  <Text style={Ac_Style.redTextName}>{userData.display_name}</Text>
                </View>
                <View style={Ac_Style.user_phone}>
                  <Text style={Ac_Style.redText}>{userData.user_phone}</Text>
                </View>
                <View style={Ac_Style.display_name}>
                  <Text style={Ac_Style.redText}>{userData.user_email}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={Ac_Style.CraggyTextRoot}>
            <ScrollView>
              <TouchableOpacity
                activeOpacity={0.5}
                style={Ac_Style.myProfileRoot}
                onPress={() => navigation.navigate('order')}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Ionicons
                    name="newspaper-outline"
                    color='#666666'
                    size={32}
                    style={Ac_Style.icon_style}
                  />
                  <Text style={Ac_Style.profileText}>Orders</Text>
                </View>
                <Ionicons
                  name="chevron-forward"
                  color='#666666'
                  size={25}
                  style={Ac_Style.icon_lineHieght}
                />
              </TouchableOpacity>
              <View style={Ac_Style.bs_Line} />
              <TouchableOpacity
                activeOpacity={0.5}
                style={Ac_Style.myProfileRoot}
                onPress={() => navigation.navigate('address')}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Ionicons
                    name="location-outline"
                    color='#666666'
                    size={32}
                    style={Ac_Style.icon_style}
                  />
                  <Text style={Ac_Style.profileText}> Addresses</Text>
                </View>

                <Ionicons
                  name="chevron-forward"
                  color='#666666'
                  size={25}
                  style={Ac_Style.icon_lineHieght}
                />
              </TouchableOpacity>
              <View style={Ac_Style.bs_Line} />
              <TouchableOpacity
                activeOpacity={0.5}
                style={Ac_Style.myProfileRoot}
                onPress={() => navigation.navigate('wishlist')}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Ionicons
                    name="heart-circle-outline"
                    color='#666666'
                    size={35}
                    style={Ac_Style.icon_style}
                  />
                  <Text style={Ac_Style.profileText}>Wishlist</Text>
                </View>

                <Ionicons
                  name="chevron-forward"
                  color='#666666'
                  size={25}
                  style={Ac_Style.icon_lineHieght}
                />
              </TouchableOpacity>
              <View style={Ac_Style.bs_Line} />
              <TouchableOpacity
                activeOpacity={0.5}
                style={Ac_Style.myProfileRoot}
                onPress={() => navigation.navigate('coupan')}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Ionicons
                    name="headset-outline"
                    color='#666666'
                    size={32}
                    style={Ac_Style.icon_style}
                  />
                  <Text style={Ac_Style.profileText}>Help & Suport</Text>
                </View>

                <Ionicons
                  name="chevron-forward"
                  color='#666666'
                  size={25}
                  style={Ac_Style.icon_lineHieght}
                />
              </TouchableOpacity>
              <View style={Ac_Style.bs_Line} />
              <TouchableOpacity
                activeOpacity={0.5}
                style={Ac_Style.myProfileRoot}
                onPress={() => navigation.navigate('coupan')}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Ionicons
                    name="md-document-text-outline"
                    color='#666666'
                    size={32}
                    style={Ac_Style.icon_style}
                  />
                  <Text style={Ac_Style.profileText}>Terms & Conditions</Text>
                </View>

                <Ionicons
                  name="chevron-forward"
                  color='#666666'
                  size={25}
                  style={Ac_Style.icon_lineHieght}
                />
              </TouchableOpacity>
              <View style={Ac_Style.bs_Line} />
              <TouchableOpacity
                activeOpacity={0.5}
                style={Ac_Style.myProfileRoot}
                onPress={() => navigation.navigate('coupan')}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Ionicons
                    name="heart-circle"
                    color='#666666'
                    size={35}
                    style={Ac_Style.icon_style}
                  />
                  <Text style={Ac_Style.profileText}>About Us</Text>
                </View>

                <Ionicons
                  name="chevron-forward"
                  color='#666666'
                  size={25}
                  style={Ac_Style.icon_lineHieght}
                />
              </TouchableOpacity>
              <View style={Ac_Style.bs_Line} />
              <TouchableOpacity
                activeOpacity={0.5}
                style={Ac_Style.myProfileRoot}
                onPress={() => navigation.navigate('hotOffer')}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Ionicons
                    name="heart-circle"
                    color='#666666'
                    size={35}
                    style={Ac_Style.icon_style}
                  />
                  <Text style={Ac_Style.profileText}>Hot Offers</Text>
                </View>

                <Ionicons
                  name="chevron-forward"
                  color='#666666'
                  size={25}
                  style={Ac_Style.icon_lineHieght}
                />
              </TouchableOpacity>
              <View style={Ac_Style.bs_Line} />
              <TouchableOpacity
                activeOpacity={0.5}
                style={Ac_Style.myProfileRoot}
                onPress={LogoutUserHandler}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Ionicons
                    name="exit-outline"
                    color='#666666'
                    size={32}
                    style={Ac_Style.icon_style}
                  />
                  <Text style={Ac_Style.profileText}>Logout</Text>
                </View>

                <Ionicons
                  name="chevron-forward"
                  color='#666666'
                  size={25}
                  style={Ac_Style.icon_lineHieght}
                />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}
export default AccountScreen;

