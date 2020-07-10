import React, { Fragment } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  ScrollView,
  Image,
  Platform,
  Dimensions,
  PixelRatio
} from 'react-native';
import { Item, Input, Button, Content } from 'native-base'

// import GlobalStyles from '../GlobalStyles';
//? Utils
import connectToProps from '../Utils/maps'
import { getKey, getAllKeys, removeAll } from '../helpers/storage'

//? styles
import { styles, shadow } from '../Utils/styles'

//? components
import Timer from '../components/Timer'
import ScanQRCode from '../components/ScanQRCode';
import EmployeeBadge from '../components/Site/EmployeeBadge';
import SiteDetails from '../components/Site/SiteDetails';
import Leave from '../components/Site/LeaveSite'
import MC from 'react-native-vector-icons/MaterialCommunityIcons'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import TextFontScaled from '../components/TextFontScaled'
import normalize from '../helpers/normalization'
import AttendanceCard from '../components/AttendanceCard'

let debug = { borderColor: 'red', borderWidth: 1 };

const HomeScreen = props => {
  const signOut = async () => {
    console.log('Signing out..')
    props.navigation.navigate('Auth')
    // ? this will remove all the cached data about the user
    let cacheData = await getAllKeys();
    console.log(cacheData)
    await removeAll(cacheData)
    props.modifyIsSignedInOffice(false)
    props.modifySiteDetails(null)
    props.modifyCounter(null)
  }
  return (
    <Content contentContainerStyle={{
      height: '100%',
    }}>
      <View style={{ width: '100%', flex: 1, flexDirection: 'column', height: '100%' }}>
        {/* top half */}
        <View style={{ flex: 30, justifyContent: 'center' }}>

          <Button block style={{
            alignSelf: 'center',
            backgroundColor: "#242A37", borderRadius: 10, elevation: 0, width: 170, height: 40
          }} onPress={() => props.navigation.navigate('ScanQRCode')}>
            <Image source={require('../assets/images/icons/qrcode.png')} style={{
              width: 17, height: 17,
              marginRight: 7,
              // ...debug,
            }}
            ></Image>

            <Text style={{
              color: 'white',
              fontFamily: 'SF-UI-Display-Bold',
              fontSize: 17,
              paddingTop: 3,
              // ...debug
            }}>SCAN</Text>
          </Button>

        </View>

        {/* bottom half */}
        <View style={{ flex: 70 }}>
          <View style={{
            flex: 1,
            width: '100%', height: '100%',
            backgroundColor: '#242A37',
            flexDirection: 'column',
            paddingLeft: 20,
            paddingRight: 20,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            borderWidth: 1,
          }}>
            <View style={{
              padding: 10,
              paddingBottom: 5,
              flexDirection: 'row',
              alignItems: 'center'
            }} >
              <MC name="history" size={normalize(25)} color="white" />
              <TextFontScaled style={{
                color: 'white',
                fontFamily: 'SF-UI-Display-Light',
                fontSize: 17,
                paddingLeft: 5
              }}>History</TextFontScaled>
            </View>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>

              <AttendanceCard />
              <AttendanceCard />
              <AttendanceCard />
              <AttendanceCard />

            </ScrollView>
          </View>
        </View>

      </View>

      {/* {
        !props.network_status && <Text>Offline</Text>
      } */}
      {/* <EmployeeBadge />
      <ScanQRCode navigation={props.navigation} />

      <CustomButton
        ButtonStyle={{
          width: "25%",
          backgroundColor: 'red',
        }}
        TextStyle={{
          color: '#242A37',
        }}
        text="Signout"
        onPress={async () => await signOut()}
      /> */}

    </Content >
  );
}

export default connectToProps(HomeScreen);
