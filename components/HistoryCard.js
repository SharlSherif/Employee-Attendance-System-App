import React from 'react';
import {
    View,
    Input
} from 'react-native';
//? Utils
import connectToProps from '../Utils/maps'

//? components
import MC from 'react-native-vector-icons/MaterialCommunityIcons'
import IonIcons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import TextFontScaled from '../components/TextFontScaled'
import { mapbox_API_key } from '../config.json'
let debug = { borderColor: 'red', borderWidth: 1 };

const HistoryCard = props => (
    <View style={{
        flex: 1, flexDirection: 'column', width: '90%', height: 200, marginTop: '3%',
        shadowColor: "#242A37",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 20,
    }}>
        <View style={{ flex: 0.20, backgroundColor: '#FF8900', borderTopLeftRadius: 6, borderTopRightRadius: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderBottomWidth: 0.8, borderColor: '#D5D5D5', paddingLeft: 20, paddingRight: 20 }}>
            <View style={{ flex: 0.5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Feather name="clock" size={15} style={{ color: '#242A37' }} />

                    <TextFontScaled style={{ fontSize: 13, marginLeft: 5, color: '#242A37' }} >7:30 PM</TextFontScaled>
                </View>
            </View>
            <View style={{ flex: 0.5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Feather name="log-out" size={15} style={{ color: '#242A37' }} />

                        <TextFontScaled style={{ fontSize: 13, marginLeft: 5, color: '#242A37' }} >Signed out</TextFontScaled>
                    </View>
                </View>
            </View>
        </View>
        <View style={{ flex: 0.6, backgroundColor: 'white', flexDirection: 'column' }}>
            {/*//? top part  */}
            <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                {/* icon */}
                <View style={{ flex: 0.5, height: 'auto' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <FontAwesome name="building-o" size={12} style={{ color: '#D5D5D5' }} />

                        <TextFontScaled style={{ fontSize: 11, marginLeft: 5, color: '#868686' }} >Office</TextFontScaled>
                    </View>
                    <TextFontScaled style={{ fontSize: 12 }} >Management Section</TextFontScaled>
                    {/* <Text style={{ fontSize: normalize(12) }}>Management Section</Text> */}
                </View>
            </View>
            <View style={{ flex: 0.01 }}>
                <View style={{
                    borderBottomWidth: 1, borderColor: '#D5D5D5', width: '100%', opacity: 0.7
                }} />
            </View>
            {/*//? right part  */}
            <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <SimpleLineIcons name="location-pin" size={12} style={{ color: '#D5D5D5' }} />

                    <TextFontScaled style={{ fontSize: 11, marginLeft: 3, color: '#868686' }}>Location</TextFontScaled>
                </View>
                <TextFontScaled style={{ fontSize: 12 }}>Nasr City, 31 Street</TextFontScaled>
                <View>

                </View>
                {/*
                <View style={{ flex: 0.4, paddingLeft: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Feather name="log-out" size={12} style={{ color: '#D5D5D5' }} />
                        <TextFontScaled style={{ fontSize: 10, marginLeft: 3, color: '#868686' }}>Signed out</TextFontScaled>
                    </View>
                    <TextFontScaled style={{ fontSize: 12 }}>8:30 am</TextFontScaled>
                </View> */}
            </View>
        </View>
        <View style={{ flex: 0.2, flexDirection: 'row', backgroundColor: '#F1F2F6', borderBottomLeftRadius: 6, borderBottomRightRadius: 6 }}>
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                <View style={{ flexDirection: 'row', margin: 10, marginRight: 15, alignItems: 'center' }}>
                    <TextFontScaled style={{ fontSize: 11 }} >View Details</TextFontScaled>
                    <IonIcons name="ios-arrow-down" size={12} style={{ color: '#242A37', marginLeft: 3, transform: [{ "rotate": "270deg" }] }} />
                </View>
            </View>
        </View>
    </View >
)


export default connectToProps(HistoryCard)