import React, { useEffect, useState, Fragment } from 'react';
import {
    StyleSheet,
    Text,
    View,
    PermissionsAndroid,
    Dimensions
} from 'react-native';
import { Item, Input, Button, Content } from 'native-base'
import { RNCamera } from 'react-native-camera';
// import { BarCodeScanner } from 'expo-barcode-scanner';
//? Utils
import { styles } from '../Utils/styles'
import connectToProps from '../Utils/maps'
//? Components
import CustomButton from './Generic/Button'
import Wrapper from './Wrapper'
//? helpers
import { SignInOffice } from '../helpers/ScanQRCode.helpers'
let debug = { borderColor: 'red', borderWidth: 1 };

const ScanQRCode = props => {
    let camera;
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false)
    const [scanningError, setScanningError] = useState(false)

    useEffect(() => {
        (async () => {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "Cool Photo App Camera Permission",
                    message:
                        "Cool Photo App needs access to your camera " +
                        "so you can take awesome pictures.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the camera");
                setHasPermission('granted');
            } else {
                console.log("Camera permission denied");
                setHasPermission(false);
            }
            // const { status } = await BarCodeScanner.requestPermissionsAsync();
        })();
    }, []);

    const onBarCodeScanned = async (scanObj) => {
        if (scanned) return; // already scanned before

        setScanned(true) // set scanned to true to stop spamming requests once scanned
        console.log("RECEIVED:")
        console.table(scanObj.data)
        let success = await SignInOffice(scanObj, props)

        if (success) {
            // close everything and hide the component
            setScanningError(false)
            setCamera(false)
            console.log('going to navigate')
            props.navigation.navigate('TimerScreen')
            // setHideComponent(true)
        } else {
            // display an error message
            setScanningError(true)
            setTimeout(() => {
                setScanningError(false)
                setScanned(false)
            }, 2000) // hide the error message after 2s
        }
    }


    // if (hasPermission === null) {
    //     return <Text>Requesting for camera permission</Text>;
    // }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View
            style={{
                width: '100%', height: '100%', flex: 1, justifyContent: 'center', flexDirection: 'column'
            }}
        >
            {/* {hasCameraPermission == null && alert("Requesting camera permission for the QR scanner")} */}

            <RNCamera
                ref={cam => camera = cam}
                onBarCodeRead={onBarCodeScanned}
                captureAudio={false}
                style={{
                    justifyContent: 'center',
                    height: '100%',
                }}
            >
                { scanningError && <Text style={{ fontFamily: 'SF-UI-Display-Bold', fontSize: 25, zIndex: 9999, color: 'white', textAlign: 'center' }}>Please try again</Text>}
                <View style={{ zIndex: 9999, borderColor: 'white', borderWidth: 2.5, margin: 15, borderRadius: 50, borderStyle: 'dashed', height: 350, width: 350, alignSelf: 'center' }}></View>
                <Button block style={{ backgroundColor: "#FFD428", borderRadius: 6, elevation: 0, width: 150, alignSelf: 'center', marginTop: 5 }} onPress={() => { console.log("CLicked 'Close'"); props.navigation.navigate('App') }}>
                    <Text style={{
                        color: '#242A37', fontFamily: 'Avenir',
                        fontSize: 20
                    }}>Close</Text>
                </Button>
            </RNCamera>


        </View>
    )
}

export default connectToProps(ScanQRCode);
