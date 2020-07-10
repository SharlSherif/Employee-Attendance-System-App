import React, { Fragment } from 'react';
import {
    View,
} from 'react-native';
import { Content } from 'native-base'

import CustomButton from '../components/Generic/Button'
//? Utils
import connectToProps from '../Utils/maps'
import { getKey, getAllKeys, removeAll } from '../helpers/storage'

//? styles
import { styles, shadow } from '../Utils/styles'

//? components
import Timer from '../components/Timer'
import SiteDetails from '../components/Site/SiteDetails';
import Leave from '../components/Site/LeaveSite'

const TimerScreen = props => {
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
            flex: 1,
            justifyContent: 'center',
            width: '100%',
            // backgroundColor: '#f1f2f6',
            backgroundColor: 'red',
            flexDirection: 'column',
            padding: 20
        }}>
            <View
                style={{
                    borderRadius: 8,
                    backgroundColor: 'white',
                    ...shadow
                }}
            >
                <SiteDetails />
                <Timer />
                <Leave navigation={props.navigation} />
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
                />

            </View>
        </Content >
    );
}

export default connectToProps(TimerScreen);
