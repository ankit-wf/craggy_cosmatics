import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from './BottomTabs';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import TermAndCondition from '../screens/TermAndCondition';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import Logo from '../components/Logo';
const Drawer = createDrawerNavigator();

export default function DrawerScreen(props) {
    return (
        <Drawer.Navigator initialRouteName="mainScreen"
            screenOptions={{
                headerStyle: {
                    height: 70,
                    backgroundColor: 'black',
                    borderBottomColor: 'black'
                },
                headerTintColor: '#CC933B',
            }}
        >
            <Drawer.Screen name='mainScreen' component={BottomTabs} options={{ headerShown: false, headerTitle: Logo, title: 'Home' }} />
            <Drawer.Screen name='login' component={LoginScreen} options={{ headerShown: false, title: 'Login' }} />
            <Drawer.Screen name='signup' component={SignupScreen} options={{ headerShown: false, title: 'Signup' }} />
            <Drawer.Screen name='terms' component={TermAndCondition} options={{ headerShown: false, title: 'Term And Condition' }} />
            <Drawer.Screen name='privacy' component={PrivacyPolicy} options={{ headerShown: false, title: 'Privacy Policy' }} />
        </Drawer.Navigator>

    );
}