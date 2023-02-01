import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
import ShopScreen from '../screens/ShopScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import MyCartScreen from '../screens/MyCartScreen';
import AccountScreen from '../screens/AccountScreen';
import { Image } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            tabBarPosition='bottom'
            initialRouteName="Home"
            headerMode='screen'
            screenOptions={{
                headerShown: false,
                swipeEnabled: false,
                tabBarActiveTintColor: '#C68625',
                tabBarInactiveTintColor: '#444444',
                tabBarLabelStyle: { fontSize: 8, fontFamily: 'Raleway600', fontWeight: '600', lineHeight: 10, width: "90%", alignSelf: 'center' },
                tabBarStyle: { backgroundColor: 'black', height: 80, paddingTop: 10 },
                tabBarIndicatorStyle: {
                    // position: 'absolute',
                    // left: 10,
                    height: 4,
                    // width: 65,
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
                screenOptions={{
                    headerShown: true,
                }}
                options={{
                    tabBarLabel: 'Categories',
                    tabBarIcon: ({ focused }) => (
                        focused ? <Image source={require('../../assets/categories_color.png')} style={{ padding: 2, marginTop: -5 }} />
                            : <Image source={require('../../assets/categories.png')} style={{ padding: 2, marginTop: -5 }} />

                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={MyCartScreen}
                options={{
                    tabBarLabel: 'Cart',
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
