import React, { Fragment } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
} from 'react-native';
import { Button, Content } from 'native-base'

// import GlobalStyles from '../GlobalStyles';
//? Utils
import connectToProps from '../Utils/maps'
import { getKey, getAllKeys, removeAll } from '../helpers/storage'

//? styles
import { styles, shadow } from '../Utils/styles'

//? components
import MC from 'react-native-vector-icons/MaterialCommunityIcons'
import TextFontScaled from '../components/TextFontScaled'
import normalize from '../helpers/normalization'
import AttendanceCard from '../components/AttendanceCard'
let debug = { borderColor: 'red', borderWidth: 1 };

const AttendanceHistory = () => {
    return (
        <Content contentContainerStyle={{
            height: '100%',
        }}>
            <View style={{
                flex: 1,
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                backgroundColor: '#242A37',
                paddingLeft: 20,
                paddingRight: 20,
                borderWidth: 1,
            }}>
                <ScrollView contentContainerStyle={{
                    alignItems: 'center',
                    marginTop: 5
                }}>
                    <AttendanceCard />
                    <AttendanceCard />
                    <AttendanceCard />
                    <AttendanceCard />
                    <AttendanceCard />
                </ScrollView>
            </View>
        </Content >
    );
}

export default connectToProps(AttendanceHistory);