import React, { Fragment } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
} from 'react-native';

//? Utils
import connectToProps from '../../Utils/maps'

const EmployeeBadge = () => {
    const NewInfoRow = ({ value }) => {
        return (
            <Text style={{ fontSize: 15, fontFamily: 'Avenir', color: '#242A37' }}>{value}</Text>
        )
    }

    return (
        <View style={{
            top: 0,
            width: '100%',
            height: '100%',
        }}>
            <View style={{
                top: 25,
                width: '100%',
                height: '100%',
                alignItems: 'center',
            }}>
                <Image source={require('../../assets/images/ezpz.jpg')} style={{
                    width: 150,
                    height: 150,
                    borderRadius: 100,
                    borderWidth: 5,
                    borderColor: '#ffd428',
                }}></Image>
                <NewInfoRow value="Sharl Sherif" />
                <NewInfoRow value="Full Stack Developer" />

                {/* // TODO : put a QR code for that Employee */}
                {/* <Image source={require('../assets/images/qr_code.png')} style={{
            width: 180,
            height: 180,
            bottom: '25%',
            position:'absolute'
          }}></Image> */}
            </View>
        </View>

    )
}
export default connectToProps(EmployeeBadge)