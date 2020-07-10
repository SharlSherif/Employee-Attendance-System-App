import React, { useState } from 'react';
import 'react-native-gesture-handler';
import {
  View,
  StatusBar,
  StyleSheet
} from 'react-native';
import { Text } from 'native-base'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SvgUri } from 'react-native-svg';
import { Provider } from 'react-redux';

import reduxStore from './Utils/reduxStore';
// ? screens and components
import AuthLoadingScreen from './components/LoadingAuth'
import LoginScreen from './screens/LoginScreen'
import EmployeeBadgeScreen from './screens/EmployeeBadgeScreen'
import HistoryDetails from './screens/HistoryDetails'
import AppScreen from './screens/AppScreen'
import AttendanceHistory from './screens/AttendanceHistory'
import TimerScreen from './screens/TimerScreen'
import ScanQRCode from './components/ScanQRCode'
import Navbar from './components/Navbar'
import DrawerCustom from './components/Drawer'
import { ErrorMessage, SuccessMessage } from './helpers/LoginScreen.helpers.js';
const AddNavbar = (Component, props, text = "") => {
  return (<Navbar navigation={props.navigation} text={text} >
    <Component navigation={props.navigation} />
  </Navbar>
  )
}
export default function App(props) {
  const Drawer = createDrawerNavigator();
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  console.log(props)
  return (
    <Provider store={reduxStore}>
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#b3e6ff"
          barStyle="dark-content"
        />
        <NavigationContainer >
          <Drawer.Navigator initialRouteName="Auth" drawerContent={props => <DrawerCustom />}>
            {/* <Drawer.Screen name="login" component={TimerScreen} /> */}
            <Drawer.Screen name="Balancer" component={AuthLoadingScreen} />
            <Drawer.Screen name="AttendanceHistory" >
              {props => AddNavbar(AttendanceHistory, props, "Attendance History")}
            </Drawer.Screen>
            <Drawer.Screen name="HistoryDetails" >
              {props => AddNavbar(HistoryDetails, props)}
            </Drawer.Screen>
            <Drawer.Screen name="ScanQRCode" >
              {props => AddNavbar(ScanQRCode, props)}
            </Drawer.Screen>
            <Drawer.Screen name="Auth" component={LoginScreen} />
            <Drawer.Screen name="App" >
              {props => AddNavbar(AppScreen, props)}
            </Drawer.Screen>
            <Drawer.Screen name="ErrorMessage" component={ErrorMessage} />
            <Drawer.Screen name="SuccessMessage" component={SuccessMessage} />
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export { reduxStore }
