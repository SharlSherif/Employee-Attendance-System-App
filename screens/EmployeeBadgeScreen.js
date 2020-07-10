import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,
    Keyboard,
    Image,
    ImageBackground,
    Dimensions
} from 'react-native';
import { store, getKey, removeAll } from '../helpers/storage'
import connectToProps from '../Utils/maps'
function EmployeeBadge(props) {
    let user = /*await getKey('user') ||*/ { name: 'Sharl Sherif', title: 'Full Stack Developer' }
    let filename = 'ezpz.jpg'
    console.log(user)
    return (
        <SafeAreaView style={{
            flex: 1, justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F1F2F6',
            paddingLeft:5,
            paddingRight:5
            // backgroundColor:'red',
        }}>
         
            <ImageBackground style={{
                width: '100%',
                height: '95%',
                top: "5%",
            }}
                source={require('../assets/images/background.png')}>
                <Image style={{
                    height: 140,
                    top: '10%',
                    position: 'absolute',
                    width: 140,
                    alignSelf: 'center',
                    borderWidth: 5,
                    borderColor: '#FFBF00',
                    borderRadius: 100,
                    overflow: 'hidden'
                }} source={require(`../assets/images/${filename}`)}></Image>
                <View style={{
                    position: 'absolute',
                    bottom: '10%',
                    top: '30%',
                    width: '100%',
                    textAlign: 'center',
                    alignItems: 'center',
                }}>

                    <Text
                        style={{
                            fontSize: 35,
                            color: '#242A37',
                            width: "100%",
                            textAlign: 'center',
                            fontFamily: 'Avenir'
                        }}
                    >
                        {user.name}
                    </Text>
                    <Text
                        style={{
                            fontSize: 17,
                            color: '#242A37',
                            width: "85%",
                            textAlign: 'center',
                            fontFamily: 'Avenir'
                        }}
                    >
                        {user.title}
                    </Text>
                    <Text style={{
                        width: "80%",
                        top: '50%',
                        // backgroundColor: '#FFD428',
                        position: 'absolute',
                        fontFamily: 'Avenir',
                        color: 'white',
                        fontSize: 20
                    }}>
                        {'ID' + "                : " + 'abcqe20193'}
                    </Text>
                    <Text style={{
                        width: "80%",
                        top: '60%',
                        // backgroundColor: '#FFD428',
                        position: 'absolute',
                        fontFamily: 'Avenir',
                        color: 'white',
                        fontSize: 20
                    }}>
                        {'Phone' + "         : " + '0114161405'}
                    </Text>
                    <Text style={{
                        width: "80%",
                        top: '70%',
                        // backgroundColor: '#FFD428',
                        position: 'absolute',
                        fontFamily: 'Avenir',
                        color: 'white',
                        fontSize: 20
                    }}>
                        {'E-mail' + "         : "}
                        <Text style={{ fontSize: Dimensions.get('window').width * 0.04 }}>dev.sharl.sherif@gmail.com</Text>
                    </Text>

                    {/* <Button
                    ButtonStyle={{
                        width: "85%",
                        backgroundColor: '#FFD428',
                        bottom: 0,
                        position: 'absolute'
                    }}
                    // onPress={Continue}
                    TextStyle={{ color: '#242A37' }}
                    text={"CONTINUE"} /> */}
                    <Image style={{
                        bottom: 0,
                        position: 'absolute',
                        width: 150,
                        height: 130,
                        alignSelf: 'center'
                    }} source={require(`../assets/images/company-logo-test.png`)}></Image>
                </View>

            </ImageBackground>
        </SafeAreaView>
    )
}

export default connectToProps(EmployeeBadge)