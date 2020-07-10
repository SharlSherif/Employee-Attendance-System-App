import React, { useEffect, useState, Fragment } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,
    Keyboard,
    TextInput,
    Image,
    ScrollView,
    Vibration,
    Dimensions
} from 'react-native';
// import * as Haptics from 'expo-haptics'
import { Item, Input, Button, Content } from 'native-base'
import connectToProps from '../Utils/maps'
import { Request } from '../Utils/api'

import { shadow } from '../Utils/styles'

import InputField from '../components/Generic/InputField'
// import Button from '../components/Generic/Button'
import HelpSection from '../components/HelpSection'
import { store, getKey, removeAll } from '../helpers/storage'

const LoginScreen = (props) => {
    const [employeeNumber, setEmployeeNumber] = useState('')
    const [companyCode, setCompanyCode] = useState('')

    let Authenticate = async () => {
        if (companyCode.length < 1 || employeeNumber.length < 1) {
            return
        };

        let response = await Request({
            method: 'POST',
            route: 'auth',
            isToken: false,//don't send an auth header. because we dont have the token yet
            body: {
                companyCode: companyCode.toLowerCase(),
                employeeNumber: employeeNumber.toLowerCase()
            }
        })

        const token = response.headers.map.token
        if (response.success && !!token) {
            // setIsCompany(true)
            await store('token', token);
            await store('user', response.data);

            props.setUser({
                user: response.data,
                auth: true
            })
            props.navigation.navigate('SuccessMessage');

        } else {
            props.navigation.navigate('ErrorMessage');
            Vibration.vibrate()
        }
    };
    const scale = 1608 / 1920;
    const { width, height } = Dimensions.get("window");
    const IMAGE_HEIGHT = (width - 30) * scale
    return (
        <Content contentContainerStyle={{
            paddingHorizontal: 15, flex: 1, justifyContent: 'center',
            minHeight: 500
        }}>
            <View style={{
                backgroundColor: "#f7f7f7", flexDirection: "column", shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,

                elevation: 6,
                borderRadius: 7
            }}>
                <ScrollView contentContainerStyle={{
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.20,
                    shadowRadius: 1.41,
                    elevation: 2,
                    flexDirection: "column",
                    paddingBottom: 10
                }}>
                    <View>
                        <View style={{ height: IMAGE_HEIGHT, overflow: 'hidden' }}>
                            <Image source={require('../assets/images/login.png')} style={{ width: width - 30, height: IMAGE_HEIGHT, marginTop: 0, borderRadius: 7 }} />
                        </View>

                        <View style={{ paddingHorizontal: 17 }}>
                            <Item regular style={{ fontFamily: 'Avenir', marginTop: 15, elevation: 0, borderRadius: 6, borderColor: '#e8e6e6', paddingLeft: 5, borderRadius: 8, borderWidth: 0.5 }}>
                                <Input placeholder="Company Code" onChangeText={(x) => setCompanyCode(x)}
                                />
                            </Item>
                            <Item regular style={{ fontFamily: 'Avenir', marginTop: 15, elevation: 0, borderRadius: 6, borderColor: '#e8e6e6', paddingLeft: 5, borderRadius: 8, borderWidth: 0.5 }}>
                                <Input placeholder="Employee Number" onChangeText={(x) => setEmployeeNumber(x)}
                                />
                            </Item>

                            <Button block style={{ marginTop: 15, marginBottom: 5, backgroundColor: "#FFD428", borderRadius: 6, elevation: 0 }} onPress={Authenticate}>
                                <Text style={{
                                    color: '#242A37', fontWeight: 'bold', fontFamily: 'SF-UI-Display-Bold',
                                    fontSize: 20
                                }}>SIGN IN</Text>
                            </Button>

                        </View>
                    </View>
                </ScrollView>
            </View>
        </Content >

    );
}
{/* <Button
ButtonStyle={{
    width: "85%",
    backgroundColor: '#FFD428'
}}
TextStyle={{
    color: '#242A37',
}}
disabled={isSubmit}
onPress={Authenticate}
text="SIGN IN" /> */}


export default connectToProps(LoginScreen);