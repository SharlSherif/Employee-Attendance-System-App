import React, { Fragment } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    ImageBackground,
    ScrollView,
    Image
} from 'react-native';
import { Item, Input, Button, Content } from 'native-base'
//? Utils
import connectToProps from '../Utils/maps'

const debug = { borderColor: 'red', borderWidth: 1 };

const Wrapper = props => {
    return (
        <Content contentContainerStyle={{
            flexDirection: 'column',
            height: '100%',
            paddingBottom: 0,
            paddingTop: 16,
        }}>
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                <View style={{ flex: 30, justifyContent: 'center', zIndex: 1, }}>
                </View>

                {/* bottom half */}
                <View style={{ flex: 70, zIndex: 1 }}>
                    <View style={{ ...debug, borderColor: 'green', flex: 10, zIndex: 2 }} onTouchStart={() => console.log("TOUCH STARTED!!!!")}>
                        {props.children}
                    </View>
                    <ImageBackground source={require('../assets/images/icons/background.png')} style={{
                        width: '100%', height: '100%',

                        position: 'absolute'
                    }}
                    >
                    </ImageBackground>
                </View>

            </View>
        </Content >
    );
}

Wrapper.navigationOptions = {
    header: null,
}

export default connectToProps(Wrapper);
