import React, { Fragment } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';

//? Utils
import connectToProps from '../../Utils/maps'

const SiteDetails = props => {
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: '100%',
            top: '25%'
        }}>
            <Text style={{
                color: '#242A37',
                fontWeight: '500',
                textAlign: 'center',
                fontSize: 30,
                marginLeft: '5%',
                marginRight: '5%',
                fontFamily: 'Avenir'
            }}
                adjustsFontSizeToFit={true}
            >
                <Image style={{
                    width: 35,
                    height: 35
                }} source={require('../../assets/images/company-building.png')}></Image>
                {props.siteDetails?.name.toUpperCase()}
            </Text>
        </View>
    )
}

export default connectToProps(SiteDetails)