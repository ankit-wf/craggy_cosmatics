// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ShopScreen from '../screens/ShopScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import MyCartScreen from '../screens/MyCartScreen';
import AccountScreen from '../screens/AccountScreen';
import { Image } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

const TabNav = () => {

    return (

        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'red',
                labelPosition: 'below-icon',
            }}
            initialRouteName="Home"
            activeColor="#C68625"
            inactiveColor='#444444'
            // lableStyle={{fontSize:50}}
            shifting={false}
            barStyle={{ backgroundColor: 'black', height: 75, paddingTop: 10 }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
              
                options={{
                    tabBarLabel: 'Home',

                    tabBarIcon: ({ focused }) => (
                        focused ? <Image source={require('../../assets/Vector1.png')} style={{ padding: 2, marginTop: -5 }} size={25} />
                            : <Image style={{ padding: 2, marginTop: -5 }} source={require('../../assets/Vector.png')} />

                    ),
                }}
            />
            <Tab.Screen
                name="Shop"
                component={ShopScreen}
                options={{
                    tabBarLabel: 'SHOP',
                    tabBarIcon: ({ focused }) => (
                        focused ? <Image source={require('../../assets/soap1.png')} style={{ padding: 2, marginTop: -5 }} size={30} />
                            : <Image style={{ padding: 2, marginTop: -5 }} source={require('../../assets/soap.png')} />

                    ),
                }}
            />
            <Tab.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    tabBarLabel: 'CATEGORIES',
                    tabBarIcon: ({ focused, color }) => (
                        focused ? <Image source={require('../../assets/categories.png')} style={{ padding: 2, marginTop: -5 }} />
                            : <Image source={require('../../assets/categories.png')} style={{ padding: 2, marginTop: -5 }} />

                    ),
                }}
            />

            <Tab.Screen
                name="MY CART"
                component={MyCartScreen}
                options={{
                    tabBarLabel: 'MY CART',
                    tabBarIcon: ({ focused }) => (
                        focused ? <Image source={require('../../assets/cart2.png')} style={{ padding: 2, marginTop: -5 }} />
                            : <Image source={require('../../assets/cart.png')} style={{ padding: 2, marginTop: -5 }} />
                    ),
                }}
            />
            <Tab.Screen
                name="ACCOUNT"
                component={AccountScreen}
                options={{
                    tabBarLabel: 'ACCOUNT',
                    tabBarIcon: ({ focused }) => (
                        focused ? <Image source={require('../../assets/account.png')} style={{ padding: 2, marginTop: -5 }} />
                            : <Image source={require('../../assets/account.png')} style={{ padding: 2, marginTop: -5 }} />
                    ),
                }}
            />


        </Tab.Navigator>
    )
}

export default TabNav;

