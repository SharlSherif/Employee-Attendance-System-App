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
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import TextFontScaled from '../components/TextFontScaled'
let debug = { borderColor: 'red', borderWidth: 1 };

const Card = props => (
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
        <View style={{ flex: 0.20, backgroundColor: '#FFD428', borderTopLeftRadius: 6, borderTopRightRadius: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderBottomWidth: 0.8, borderColor: '#D5D5D5'}}>
            <MC name="calendar-blank" size={20} />
            <TextFontScaled style={{ marginLeft: 5, fontSize: 12 }} >Wednesday, 10 May</TextFontScaled>
        </View>
        <View style={{ flex: 0.6, backgroundColor: 'white', flexDirection: 'row', padding: 5 }}>
            {/*//? left part  */}
            <View style={{ flex: 0.8, marginTop: 5, paddingLeft: 20 }}>
                {/* icon */}
                <View style={{ flex: 0.5, height: 'auto' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome name="building-o" size={12} style={{ color: '#D5D5D5' }} />

                        <TextFontScaled style={{ fontSize: 11, marginLeft: 5, color: '#868686' }} >Office</TextFontScaled>
                    </View>
                    <TextFontScaled style={{ fontSize: 12 }} >Management Section</TextFontScaled>
                    {/* <Text style={{ fontSize: normalize(12) }}>Management Section</Text> */}
                </View>

                <View style={{ flex: 0.1 }}>
                    <View style={{
                        borderBottomWidth: 1, borderColor: '#D5D5D5', width: '100%', opacity: 0.7
                    }} />
                </View>
                <View style={{ flex: 0.4, paddingRight: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Feather name="log-in" size={12} style={{ color: '#D5D5D5' }} />
                        <TextFontScaled style={{ fontSize: 10, marginLeft: 3, color: '#868686' }} >Signed in</TextFontScaled>
                    </View>

                    <TextFontScaled style={{ fontSize: 12 }}>8:30 pm</TextFontScaled>
                </View>
            </View>
            {/*//? vertical line  */}
            <View style={{
                flex: 0.001, borderLeftWidth: 1, borderColor: '#D5D5D5', opacity: 0.7
            }} />

            {/*//? right part  */}
            <View style={{ flex: 0.3, marginTop: 5, paddingRight: 20 }}>
                <View style={{ flex: 0.5, paddingLeft: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Feather name="clock" size={12} style={{ color: '#D5D5D5' }} />

                        <TextFontScaled style={{ fontSize: 11, marginLeft: 3, color: '#868686' }}>Billed</TextFontScaled>
                    </View>
                    <TextFontScaled style={{ fontSize: 12 }}>8.5 hrs</TextFontScaled>
                </View>
                <View style={{ flex: 0.1 }}>
                    <View style={{
                        borderBottomWidth: 1, borderColor: '#D5D5D5', width: '100%', opacity: 0.7
                    }} />
                </View>
                <View style={{ flex: 0.4, paddingLeft: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Feather name="log-out" size={12} style={{ color: '#D5D5D5' }} />
                        <TextFontScaled style={{ fontSize: 10, marginLeft: 3, color: '#868686' }}>Signed out</TextFontScaled>
                    </View>
                    <TextFontScaled style={{ fontSize: 12 }}>8:30 am</TextFontScaled>
                </View>
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


export default connectToProps(Card)