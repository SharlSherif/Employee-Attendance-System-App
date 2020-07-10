import React, { useEffect, useState, Fragment } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { Input, Button, Content } from 'native-base'
import connectToProps from '../Utils/maps'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import { SvgUri, SvgCssUri, SvgCss, SvgXml } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MC from 'react-native-vector-icons/MaterialCommunityIcons'
import TextFontScaled from '../components/TextFontScaled'
import normalize from '../helpers/normalization'

let debug = { borderColor: 'red', borderWidth: 1 };

const Item = ({ name, CustomIcon }) => (
    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginBottom: 20,alignItems: 'center' }} activeOpacity={0.7}>
        <CustomIcon />
        <TextFontScaled style={{ marginLeft: 10, fontSize: (14) }}>{name}</TextFontScaled>
    </TouchableOpacity>
)
const DrawerCustom = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: '33%', padding: 15, maxHeight: '35%', backgroundColor: '#242A37' }}>
                <View style={{ flexDirection: 'row', flex: 0.5 }}>
                    <Image style={{ width: 80, height: 80, borderRadius: 50, borderWidth: 2, borderColor: 'white' }} source={require("../assets/images/ezpz.jpg")}>
                    </Image>

                    <View style={{ marginTop: 13, marginLeft: 10, flex: 1 }}>
                        <TextFontScaled style={{ color: 'white', fontSize: 20, width: '100%' }}>John Doe</TextFontScaled>
                        <View style={{ marginTop: 8, backgroundColor: '#FFD428', borderRadius: 50, padding: 5, justifyContent: 'center', borderColor: 'white', borderWidth: 2 }}>
                            <TextFontScaled style={{ color: '#242A37', fontSize: 14, textAlign: 'center', fontFamily: 'Avenir-LT-Std', fontWeight: '600' }}>Full Stack Developer</TextFontScaled>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 15, flexDirection: 'row', flex: 0.5 }}>
                    <View style={{ padding: 10 }}>
                        <Feather name="clock" size={normalize(25)} color="white" style={{ alignSelf: "center" }} />
                        <TextFontScaled style={{ textAlign: 'center', fontSize: 12, color: 'white' }}>120</TextFontScaled>
                        <TextFontScaled style={{ textAlign: 'center', fontSize: 8, color: '#868686' }}>Hours</TextFontScaled>
                    </View>
                </View>
            </View>

            <DrawerContentScrollView style={{ height: '67%', maxHeight: '65%', backgroundColor: 'white', padding: 25, paddingTop: 10 }} {...props}>
                <Item CustomIcon={() => <MC name="timer" size={normalize(30)} color="#868686" />} name="Timer" />
                <Item CustomIcon={() => <MC name="account-badge-horizontal-outline" size={normalize(30)} color="#868686" />} name="Badge" />
                <Item CustomIcon={() => <MC name="history" size={normalize(30)} color="#868686" />} name="History" />
                <Item CustomIcon={() => <Feather name="settings" size={normalize(30)} color="#868686" />} name="Settings" />
                <Item CustomIcon={() => <Feather name="log-out" size={normalize(30)} color="#868686" />} name="Logout" />
            </DrawerContentScrollView>
        </View>
    )
}


export default connectToProps(DrawerCustom)