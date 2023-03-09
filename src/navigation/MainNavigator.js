import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import BillingAdressDetails from '../screens/BillingAdressDetails';
import ShippingAddressDetails from '../screens/ShippingAddressDetails';
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
import ViewAllLatestProduct from '../screens/ViewAllLatestProduct';
import ViewProduct from '../screens/ViewProduct'
import WriteReview from '../screens/WriteReview';
import DrawerScreen from './Drawer';
import NotificationScreen from '../screens/NotificationScreen';
import RewardScreen from '../screens/RewardScreen';
import SearchScreen from '../screens/SearchScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import ResetPassword from '../screens/ResetPassword';
import AddAddress from '../screens/AddAdress';
import EditAddress from '../screens/EditAddress';
import MyCartScreen from '../screens/MyCartScreen';
// import PaymentScreen from '../screens/PaymentScreen';
import ProductListingScreen from '../screens/ProductListingScreen';
import { View, TouchableOpacity, Text, Image, } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useStyles } from '../styles/responsiveStyle';
import { Badge } from 'react-native-paper';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const MainNavigator = () => {
  const gs = useStyles();
  const cart = useSelector(state => state.cartData.cart);


  return (
    <Stack.Navigator initialRouteName='HomeScreen'
      screenOptions={({ navigation, route }) => ({
        headerStyle: {
          backgroundColor: 'black', //Set Header color 
        },
        headerTintColor: '#C68625', //Set Header text color
        headerBackTitleVisible: false,
        headerTitle: () => <Image style={{ width: 100, height: 25 }} source={require('../../assets/logo.png')} />,

        // headerTitle: () => (route.params.offsetYvalue) > 260 ? <Text style={{ color: '#C68625', fontSize: 20, fontWeight: '700' }} >{route.params.name}</Text> : <Image style={{ width: 100, height: 25 }} source={require('../../assets/logo.png')} />,
        headerRight: () => (
          <View style={gs.headerNotification}>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ marginRight: 20, }}>
              <Ionicons name='cart-outline' color='#CC933B' size={25} />
              {cart.length > 0 ?
                <Badge size={15} style={{ position: 'absolute', marginTop: -7, backgroundColor: '#CC933B', }}>
                  <Text style={{ color: '#000' }}>{cart.length}</Text></Badge>
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
      <Stack.Screen name='HomeScreen' component={DrawerScreen} options={{ headerShown: false, headerShadowVisible: false }} />
      <Stack.Screen name="Product" component={ProductDetailScreen} />
      {/* <Stack.Screen name="billingaddressDetails" component={BillingAdressDetails} options={{ headerShown: true, headerTitle: 'Billing Address' }} />
      <Stack.Screen name='shippingaddressDetails' component={ShippingAddressDetails} options={{ headerShown: true, headerTitle: 'Shipping Address' }} /> */}
      <Stack.Screen name='PasswordScreen' component={PasswordScreen} options={{ headerShown: false }} />
      <Stack.Screen name='OtpScreen' component={OtpScreen} options={{ headerShown: false }} />
      <Stack.Screen name='SignupOtpScreen' component={SignupOtpScreen} options={{ headerShown: false }} />
      <Stack.Screen name='forgetPassword' component={ForgetPasswordScreen} options={{ headerShown: false }} />
      <Stack.Screen name='reset_password' component={ResetPassword} options={{ headerShown: false }} />
      <Stack.Screen name='checkOut' component={CheckOutScreen} options={{ headerTitle: 'Check-Out' }} />
      <Stack.Screen name='my_order' component={OrderScreen} options={{ headerShown: true, headerTitle: 'ORDERS' }} />
      <Stack.Screen name='my_wishlist' component={WishListScreen} options={{ headerShown: true, headerTitle: 'My Wishlist' }} />
      <Stack.Screen name='my_profile' component={MyProfileScreen} options={{ headerShown: true, headerTitle: "MY PROFILE" }} />
      <Stack.Screen name='Addresses' component={AddressesScreen} options={{ headerShown: true, headerTitle: 'ADDRESS' }} />
      <Stack.Screen name='offers' component={ReviewsScreen} options={{ headerShown: true, headerTitle: 'REVIEWS' }} />
      <Stack.Screen name='offer_coupan' component={CoupanOfferScreen} options={{ headerShown: true, headerTitle: 'Apply Offers', headerShadowVisible: false }} />
      <Stack.Screen name='AllLatestProduct' component={ViewAllLatestProduct} options={{ headerShown: true, }} />
      <Stack.Screen name='ViewProduct' component={ViewProduct} options={{ headerTitle: 'All Product' }} />
      <Stack.Screen name='write_review' component={WriteReview} options={{ headerShown: false }} />
      {/* <Stack.Screen name='skinCare_product' component={SkinCareProduct} options={{ headerShown: true }} /> */}
      <Stack.Screen name='NotificationScreen' component={NotificationScreen} options={{ headerTitle: 'Notification' }} />
      <Stack.Screen name='Reward' component={RewardScreen} options={{ headerTitle: 'Reward' }} />
      <Stack.Screen name='SearchPage' component={SearchScreen} options={{ headerShown: false }} />
      <Stack.Screen name='ProductListing' component={ProductListingScreen}
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
      <Stack.Screen name='AddAddress' component={AddAddress} options={{ headerTitle: 'AddAddress' }} />
      <Stack.Screen name='editAddress' component={EditAddress} options={{ headerTitle: 'EditAdress' }} />
      <Stack.Screen name='Cart' component={MyCartScreen} options={{ headerShown: false, }} />
      {/* <Stack.Screen name='payment' component={PaymentScreen} options={{ headerTitle: 'My Payments' }} /> */}
    </Stack.Navigator>
  );
}
export default MainNavigator;