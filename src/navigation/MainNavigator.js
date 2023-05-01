import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailScreen from '../screens/ProductDetailScreen';
// import BillingAdressDetails from '../screens/BillingAdressDetails';
import ShippingAddressDetails from '../screens/ShippingAddressDetails';
import EditShippingScreen from '../screens/EditShippingScreen';
import PasswordScreen from '../screens/PasswordScreen';
import OtpScreen from '../screens/LoginOtpScreen';
import SignupOtpScreen from '../screens/SignupOtpScreen';
import CheckOutScreen from '../screens/CheckOutScreen';
import OrderScreen from '../screens/OrderScreen';
import WishListScreen from '../screens/WishListScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import AddressesScreen from '../screens/AddressesScreen';
import ReviewsScreen from '../screens/ReviewsScreen';
import CoupanOfferScreen from '../screens/CoupanOfferScreen';
// import ViewAllLatestProduct from '../screens/ViewAllLatestProduct';
import ViewProduct from '../screens/ViewProduct'
import WriteReview from '../screens/WriteReview';
import DrawerScreen from './Drawer';
import HotOfferScreen from '../screens/HotOfferScreen';
import SearchScreen from '../screens/SearchScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import ResetPassword from '../screens/ResetPassword';
import AddAddress from '../screens/AddAdress';
import EditAddress from '../screens/EditAddress';
import MyCartScreen from '../screens/MyCartScreen';
import OrderPlacedScreen from '../screens/OrderPlacedScreen';
// import PaymentScreen from '../screens/PaymentScreen';
import ProductListingScreen from '../screens/ProductListingScreen';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useStyles } from '../styles/responsiveStyle';
import { Badge } from 'react-native-paper';
import { useSelector } from 'react-redux';
const Stack = createStackNavigator();

const MainNavigator = () => {
  const gs = useStyles();
  const cart = useSelector(state => state.cartData.cart);

  return (
    <Stack.Navigator initialRouteName='homeScreen'
      screenOptions={({ navigation, route }) => ({
        headerStyle: {
          height: 80,
          backgroundColor: 'black', //Set Header color 
        },
        headerTintColor: '#C68625', //Set Header text color
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        headerTitleAlign: 'left',
        headerTitle: () => <Image style={styles.header_title} source={require('../../assets/logo.png')} />,
        // headerTitle: () => (route.params.offsetYvalue) > 260 ? <Text style={{ color: '#C68625', fontSize: 20, fontWeight: '700' }} >{route.params.name}</Text> : <Image style={{ width: 100, height: 25 }} source={require('../../assets/logo.png')} />,
        headerRight: () => (
          <View style={gs.headerNotification}>
            <TouchableOpacity onPress={() => navigation.navigate('searchPage')} activeOpacity={0.8} style={styles.header_right}>
              <Ionicons name='search' color='#CC933B' size={25} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('cart')} activeOpacity={0.8} style={styles.header_right}>
              <Ionicons name='cart-outline' color='#CC933B' size={25} />
              {cart.length > 0 ?
                <Badge size={15} style={styles.Badge_length}>
                  <Text style={styles.text_color}>{cart.length}</Text></Badge>
                : ""
              }
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
              <Ionicons name="notifications-outline" color='#CC933B' size={20} style={{ marginRight: 10 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Reward')}>
              <Ionicons name="gift-outline" color='#CC933B' size={20} style={{ marginRight: 10 }} />
            </TouchableOpacity> */}
          </View>
        ),
      })}
    >
      <Stack.Screen name='homeScreen' component={DrawerScreen} options={{ headerShown: false, headerShadowVisible: false }} />
      <Stack.Screen name="productDetail" component={ProductDetailScreen} />
      {/* <Stack.Screen name="billingaddressDetails" component={BillingAdressDetails} options={{ headerShown: true, headerTitle: 'Billing Address' }} /> */}
      <Stack.Screen name='shippingaddressDetails' component={ShippingAddressDetails} options={{ headerShown: true, headerTitle: 'Shipping Address' }} />
      <Stack.Screen name='editShipping' component={EditShippingScreen} options={{ headerShown: true, headerTitle: 'EditShipping' }} />
      <Stack.Screen name='passwordScreen' component={PasswordScreen} options={{ headerShown: false }} />
      <Stack.Screen name='otpScreen' component={OtpScreen} options={{ headerShown: false }} />
      <Stack.Screen name='signupOtpScreen' component={SignupOtpScreen} options={{ headerShown: false }} />
      <Stack.Screen name='forgetPassword' component={ForgetPasswordScreen} options={{ headerShown: false }} />
      <Stack.Screen name='resetPassword' component={ResetPassword} options={{ headerShown: false }} />
      <Stack.Screen name='checkOut' component={CheckOutScreen} options={{ headerTitle: 'Check-Out' }} />
      <Stack.Screen name='order' component={OrderScreen} options={{ headerShown: true, headerTitle: 'ORDERS' }} />
      <Stack.Screen name='wishlist' component={WishListScreen} options={{ headerShown: true, headerTitle: 'My Wishlist' }} />
      <Stack.Screen name='profile' component={MyProfileScreen} options={{ headerShown: true, headerTitle: "MY PROFILE" }} />
      <Stack.Screen name='address' component={AddressesScreen} options={{ headerShown: true, headerTitle: 'ADDRESS' }} />
      <Stack.Screen name='reviews' component={ReviewsScreen} options={{ headerShown: true, headerTitle: 'REVIEWS' }} />
      <Stack.Screen name='coupan' component={CoupanOfferScreen} options={{ headerShown: true, headerTitle: 'Apply Offers', headerShadowVisible: false }} />
      <Stack.Screen name='viewProduct' component={ViewProduct} options={{ headerTitle: 'All Product' }} />
      <Stack.Screen name='writeReview' component={WriteReview} options={{ headerShown: false }} />
      <Stack.Screen name='hotOffer' component={HotOfferScreen} options={{ headerTitle: 'Reward' }} />
      <Stack.Screen name='searchPage' component={SearchScreen} options={{ headerShown: false }} />
      <Stack.Screen name='productListing' component={ProductListingScreen}
      // options={({ navigation, route }) => ({
      //   headerTitle: () => (route.params.offsetYvalue) > 260 ? <Text style={{ color: '#C68625', fontSize: 20, fontWeight: '700' }} >{route.params.name}</Text> : <Image style={{ width: 100, height: 25 }} source={require('../../assets/logo.png')} />,
      //   headerRight: () => (
      //     <View style={gs.headerNotification}>
      //       <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
      //         <Ionicons name="notifications-outline" color='#CC933B' size={20} style={{ marginRight: 10 }} />
      //       </TouchableOpacity>
      //       <TouchableOpacity onPress={() => navigation.navigate('Reward')}>
      //         <Ionicons name="gift-outline" color='#CC933B' size={20} style={{ marginRight: 10 }} />
      //       </TouchableOpacity>
      //     </View>
      //   ),
      // })}
      />
      <Stack.Screen name='addAddress' component={AddAddress} options={{ headerTitle: 'AddAddress' }} />
      <Stack.Screen name='editAddress' component={EditAddress} options={{ headerTitle: 'EditBilling' }} />
      <Stack.Screen name='cart' component={MyCartScreen} options={{ headerShown: false, }} />
      <Stack.Screen name='orderPlaced' component={OrderPlacedScreen} options={{ headerShown: false }} />
      {/* <Stack.Screen name='payment' component={PaymentScreen} options={{ headerTitle: 'My Payments' }} /> */}
    </Stack.Navigator>
  );
}
export default MainNavigator;
const styles = StyleSheet.create({
  header_title: {
    width: 100,
    height: 25
  },
  header_right: {
    marginRight: 20,
  },
  Badge_length: {
    position: 'absolute',
    marginTop: -7,
    backgroundColor: '#CC933B',
  },
  text_color: {
    color: '#000'
  }
})