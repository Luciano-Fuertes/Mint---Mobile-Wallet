import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import LandingPage from '../LandingPage';
import Statistics from '../Statistics';
import UserProfile from '../UserProfile/index'
import TabNav from '../TabNav';
import Accounts from '../Accounts';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function getHeaderTitle(route) {

    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

    switch (routeName) {
        case 'Coins':
            return 'Coins';
        case 'Transfers':
            return 'Transfers';
        case 'Services':
            return 'Services';
        case 'Deposit':
            return 'Deposit';
        default: return 'Home'
    }
}


function DrawerBar() {

    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#93E5AB',
                },
                headerTintColor: '#4E878C',

            }}>
            <Drawer.Screen
                name='Home'
                component={TabNav}
                options={({ route }) => ({
                    headerTitle: getHeaderTitle(route),
                })}
            />
            <Drawer.Screen name="User Profile" component={UserProfile} />
            <Drawer.Screen name="Accounts" component={Accounts} />
            <Drawer.Screen name="Statistics" component={Statistics} />
            <Drawer.Screen name="Log out" component={LandingPage} />
        </Drawer.Navigator>
    )
}

export default DrawerBar