import React, { useEffect, useState, Fragment } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions
} from 'react-native';
import { Item, Input, Button, Content } from 'native-base'
import { shadow } from '../Utils/styles'
import connectToProps from '../Utils/maps'

let ErrorMessage = props => {
    const { width, height } = Dimensions.get("window");
    let IMAGE_SCALE = 500 / 500
    let IMAGE_HEIGHT = (width - 30) * IMAGE_SCALE
    return (
        <Fragment >
            <View >
                <Image style={{
                    height: IMAGE_HEIGHT,
                    // backgroundColor: 'black',
                    width: '100%',
                    borderRadius: 5
                }} source={require('../assets/images/icons/cross.png')} />
            </View>
            <Text style={{
                fontSize: 20,
                color: '#242A37',
                textAlign: 'center',
                fontFamily: 'Avenir'
            }}>Company code or employee number is not found.</Text>
            <Button block style={{ backgroundColor: "#FFD428", borderRadius: 6, elevation: 0, margin: 15 }} onPress={() => props.navigation.navigate('Auth')}>
                <Text style={{
                    color: '#242A37', fontWeight: 'bold', fontFamily: 'SF-UI-Display-Bold',
                    fontSize: 20
                }}>RETRY</Text>
            </Button>
        </Fragment>
    )
}
let SuccessMessage = props => {
    let [timer, setTimer] = useState(5)
    const { width, height } = Dimensions.get("window");
    console.log(props)
    let IMAGE_SCALE = 300 / 300
    let IMAGE_HEIGHT = (width - 30) * IMAGE_SCALE

    let Continue = () => props.navigation.navigate('App')

    // a timer implementation to automatically continue to the next component
    useEffect(() => {
        let interval = setInterval(() => {
            if (timer > 0) {
                setTimer(timer--)
            } else {
                clearInterval(interval)
                Continue()
            }
        }, 1000);
        // returned function will be called on component unmount
        // which is clearing the interval
        return () => {
            clearInterval(interval)
        }
    }, [])


    return (
        <View >
            <View >
                <Image style={{
                    height: IMAGE_HEIGHT / 1.5,
                    width: '100%',
                    top: 0,
                    borderRadius: 5
                }} source={require('../assets/images/company-logo-test.png')} />
            </View>
            <Text style={{
                fontSize: 20,
                color: '#242A37',
                fontFamily: 'Avenir',
                textAlign: 'center',
                marginTop: 15,
                marginBottom: 15
            }}> {props.user?.company.name || 'Uknown Company Name'}</Text>
            <Button block style={{ backgroundColor: "#FFD428", borderRadius: 6, elevation: 0, margin: 15 }} onPress={Continue}>
                <Text style={{
                    color: '#242A37',
                    fontWeight: 'bold',
                    fontFamily: 'SF-UI-Display-Bold',
                    fontSize: 20
                }}>{"CONTINUE" + ` (${timer}s)`}</Text>
            </Button>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: "space-between"
    },
    textInput: {
        height: 40,
        borderColor: "#9e9e9e",
        // color:
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 20
    },
    logo: {
        flex: 1,
        width: "100%",
        resizeMode: "contain",
        alignSelf: "center"
    },
    form: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
        paddingBottom: 10,
        borderRadius: 8,
        marginBottom: '30%',
        backgroundColor: 'white',
        ...shadow
    }
});
SuccessMessage = connectToProps(SuccessMessage)
ErrorMessage = connectToProps(ErrorMessage) 
export { SuccessMessage, ErrorMessage }