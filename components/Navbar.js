import React, { useEffect, useState, Fragment } from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import { Item, Input, Button, Content } from 'native-base'
import connectToProps from '../Utils/maps'
import Feather from 'react-native-vector-icons/Feather';
import normalize from '../helpers/normalization'

const Navbar = (props) => {
    console.log("NAVBAR PROPS ::", props)
    return (
        <Content contentContainerStyle={{
            flexDirection: 'column',
            height: '100%',
            paddingTop: 16,
        }}>
            <View style={{ paddingLeft: 14, paddingRight: 14, flexDirection: 'row', marginBottom:5 }}>
                <View onTouchStart={() => props.navigation.toggleDrawer()}>
                    <Feather name="menu" size={25} />

                </View>

                <Text style={{
                    flex: 70,
                    textAlign: 'center',
                    fontFamily: 'Avenir-LT-Std',
                    fontSize: normalize(15), fontWeight: '500', color: '#242A37', paddingLeft: 0, paddingRight: 35
                }}>{props.text}</Text>
            </View>
            {props.children}
        </Content >
    )

}

export default connectToProps(Navbar);
