
// import { TouchableOpacity, } from 'react-native'
// import Ionicons from '@expo/vector-icons/Ionicons';

import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import MyCartScreen from '../../src/screens/MyCartScreen'
import BillingAdressDetails from '../screens/BillingAdressDetails';
import ShippingAddressDetails from '../screens/ShippingAddressDetails';
import LoginScreen from '../screens/LoginScreen';
import PasswordScreen from '../screens/PasswordScreen';
import OtpScreen from '../screens/LoginOtpScreen';
import SignupOtpScreen from '../screens/SignupOtpScreen';
import CheckOutScreen from '../screens/CheckOutScreen';
import SignupScreen from '../screens/SignupScreen';
import OrderScreen from '../screens/OrderScreen';
import WishListScreen from '../screens/WishListScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import AddressesScreen from '../screens/AddressesScreen';
import ReviewsScreen from '../screens/ReviewsScreen';
import CoupanOfferScreen from '../screens/CoupanOfferScreen';
import ViewAllBestsellers from '../screens/ViewAllBestsellers';
import ViewAllLatestProduct from '../screens/ViewAllLatestProduct';
import ViewProduct from '../screens/ViewProduct'
import WriteReview from '../screens/WriteReview';
import SkinCareProduct from '../screens/SkinCareProduct';
import DrawerScreen from './Drawer';
// import searchPage from '../screens/searchPage';
import Logo from '../components/Logo';
import HomeScreen from './HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import Reward from '../screens/Reward';
import SearchScreen from '../screens/SearchScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import ResetPassword from '../screens/ResetPassword';
// import ProductListingScreen from '../screens/ProductListingScreen';
import ProductListingScreen from '../screens/ProductListingScreen';
import { View, TouchableOpacity, Text, Image, } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useStyles } from '../styles/responsiveStyle';

import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const MainNavigator = () => {
  const gs = useStyles()
  const Catname = useSelector(state => state.cartData.name);
  // const name = route.params;
  // console.log("catName", name);
  return (
    <Stack.Navigator initialRouteName='HomeScreen'
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black', //Set Header color 
        },
        headerTintColor: '#C68625', //Set Header text color
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name='HomeScreen' component={DrawerScreen} options={{ headerShown: false, headerShadowVisible: false }} />
      <Stack.Screen name="Product" component={ProductDetailScreen} options={{ headerShown: false }} />
      <Stack.Screen name="billingaddressDetails" component={BillingAdressDetails} options={{ headerShown: true, headerTitle: 'Billing Address' }} />
      <Stack.Screen name='shippingaddressDetails' component={ShippingAddressDetails} options={{ headerShown: true, headerTitle: 'Shipping Address' }} />
      <Stack.Screen name='PasswordScreen' component={PasswordScreen} options={{ headerShown: false }} />
      <Stack.Screen name='OtpScreen' component={OtpScreen} options={{ headerShown: false }} />
      <Stack.Screen name='SignupOtpScreen' component={SignupOtpScreen} options={{ headerShown: false }} />
      <Stack.Screen name='forgetPassword' component={ForgetPasswordScreen} options={{ headerShown: false }} />
      <Stack.Screen name='reset_password' component={ResetPassword} options={{ headerShown: false }} />
      <Stack.Screen name='checkOut' component={CheckOutScreen} options={{ headerShown: false }} />
      <Stack.Screen name='my_order' component={OrderScreen} options={{ headerShown: true, headerTitle: 'MY ORDERS' }} />
      <Stack.Screen name='my_wishlist' component={WishListScreen} options={{ headerShown: true, headerTitle: 'MY WISHLIST' }} />
      <Stack.Screen name='my_profile' component={MyProfileScreen} options={{ headerShown: true, headerTitle: "MY PROFILE" }} />
      <Stack.Screen name='Addresses' component={AddressesScreen} options={{ headerShown: true, headerTitle: 'ADDRESS' }} />
      <Stack.Screen name='reviews' component={ReviewsScreen} options={{ headerShown: true, headerTitle: 'REVIEWS' }} />
      <Stack.Screen name='offer_coupan' component={CoupanOfferScreen} options={{ headerShown: true, headerTitle: 'OFFERS AND COUPAN' }} />
      <Stack.Screen name='AllBestseller' component={ViewAllBestsellers} options={{ headerShown: true, headerTitle: 'Bestsellers' }} />
      <Stack.Screen name='AllLatestProduct' component={ViewAllLatestProduct} options={{ headerShown: true, headerTitle: 'LatestProducts' }} />
      <Stack.Screen name='ViewProduct' component={ViewProduct} options={{ headerShown: true, headerTitle: 'AllProducts' }} />
      <Stack.Screen name='write_review' component={WriteReview} options={{ headerShown: false }} />
      <Stack.Screen name='skinCare_product' component={SkinCareProduct} options={{ headerShown: true }} />
      <Stack.Screen name='NotificationScreen' component={NotificationScreen} options={{ headerShown: true }} />
      <Stack.Screen name='Reward' component={Reward} options={{ headerShown: true }} />
      <Stack.Screen name='SearchPage' component={SearchScreen} options={{ headerShown: false }} />
      <Stack.Screen name='ProductListing' component={ProductListingScreen}
        options={({ navigation, route }) => ({
          headerTitle: () => (route.params.offsetYvalue) > 260 ? <Text style={{ color: '#C68625', fontSize: 20, fontWeight: '700' }} >{route.params.name}</Text> : <Image style={{ width: 100, height: 25 }} source={require('../../assets/logo.png')} />,
          headerRight: () => (
            <View style={gs.headerNotification}>
              <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
                <Ionicons name="notifications-outline" color='#CC933B' size={20} style={{ marginRight: 10 }} />
              </TouchableOpacity>


              <TouchableOpacity onPress={() => navigation.navigate('Reward')}>
                <Ionicons name="gift-outline" color='#CC933B' size={20} style={{ marginRight: 10 }} />
              </TouchableOpacity>
            </View>
          ),
        })}

      />


    </Stack.Navigator>
  );
}
export default MainNavigator;