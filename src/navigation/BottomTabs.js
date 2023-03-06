import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import MyCartScreen from '../screens/MyCartScreen';
import AccountScreen from '../screens/AccountScreen';
import HotOfferScreen from '../screens/HotOfferScreen';
import { Image } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            tabBarPosition='bottom'
            initialRouteName="Home"

            screenOptions={{
                swipeEnabled: false,
                tabBarActiveTintColor: '#C68625',
                tabBarInactiveTintColor: '#444444',
                tabBarLabelStyle: { fontSize: 8, fontFamily: 'Raleway600', fontWeight: '600', lineHeight: 10, width: "90%", alignSelf: 'center' },
                tabBarStyle: { backgroundColor: 'black', height: 80, paddingTop: 10 },
                tabBarIndicatorStyle: {
                    height: 4,
                    backgroundColor: '#C68625',
                    alignSelf: 'center'
                },
            }}

        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => (
                        focused ? <Image source={require('../../assets/home_color.png')} style={{ padding: 2, marginTop: -5 }} size={25} />
                            : <Image source={require('../../assets/home.png')} style={{ padding: 2, marginTop: -5 }} />
                    ),
                }}
            />
            <Tab.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    tabBarLabel: 'Categories',
                    tabBarIcon: ({ focused }) => (
                        focused ? <Image source={require('../../assets/categories_color.png')} style={{ padding: 2, marginTop: -5 }} />
                            : <Image source={require('../../assets/categories.png')} style={{ padding: 2, marginTop: -5 }} />
                    ),
                }}
            />
            <Tab.Screen
                name="hotOffer`"
                component={HotOfferScreen}
                options={{
                    tabBarLabel: 'Hot-Offers',
                    tabBarIcon: ({ focused }) => (
                        focused ? <Image source={require('../../assets/cart_color.png')} style={{ padding: 2, marginTop: -5 }} />
                            : <Image source={require('../../assets/cart.png')} style={{ padding: 2, marginTop: -5 }} />
                    ),
                }}
            />
            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ focused }) => (
                        focused ? <Image source={require('../../assets/account_color.png')} style={{ padding: 2, marginTop: -5 }} />
                            : <Image source={require('../../assets/account.png')} style={{ padding: 2, marginTop: -5 }} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
