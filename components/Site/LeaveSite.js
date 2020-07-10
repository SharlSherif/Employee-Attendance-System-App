import React, { Fragment, useState } from 'react';
import {
    View,
    Modal,
    Text
} from 'react-native';

import { Request } from '../../Utils/api'

import { getKey, getAllKeys, removeAll } from '../../helpers/storage'

import connectToProps from '../../Utils/maps'

//? styles
import { styles, shadow } from '../../Utils/styles'
//? components
import CustomButton from '../Generic/Button'

const Leave = props => {
    const [leaveModal, setleaveModal] = useState(false)

    const clearCache = async () => {
        console.log('Clearing Cache..')
        let cacheData = await getAllKeys();
        // ? dont remove the token or the user from local cache
        let objectKeys = cacheData.filter(key => key !== 'token' && key !== 'user')
        await removeAll(objectKeys)
        props.modifyIsSignedInOffice(false)
        props.modifySiteDetails(null)
        props.modifyCounter(null)
    }

    const leave = async () => {
        setleaveModal(false)  // close modal before anything
        const siteID = await getKey('siteID', true)
        if (siteID == null) return console.log('no site id found')
        const response = await Request({
            method: 'POST',
            route: 'employee/signOut',
            params: siteID,
            body: {
                time: Date.now()
            }
        })
        await clearCache()
        props.navigation.navigate('App')
        // ! uncomment this check
        // if (response.success) {
        //     await clearCache()
        // }
        // else {
        //     //TODO : handle this properly
        //     alert('Couldnt Sign Out')
        // }
    }

    return (
        <View style={styles.bottomView}>
            <LeaveConfirmation
                leaveModal={leaveModal}
                closeModal={() => setleaveModal(false)}
                leave={leave}
                siteName={props.siteDetails?.name}
            />
            <CustomButton
                ButtonStyle={{
                    width: "80%",
                    backgroundColor: '#ffd428',
                    ...shadow
                }}
                TextStyle={{
                    color: '#242a37',
                }}
                onPress={() => setleaveModal(true)}
                text="LEAVE SITE" />
        </View>
    )
}
// Leaving Building Confirmation Modal
const LeaveConfirmation = (props) => {
    const { leaveModal, closeModal, leave, siteName } = props;

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={leaveModal}
        >
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.5)'
            }}>
                <View style={{
                    backgroundColor: 'white',
                    height: '20%',
                    width: '80%',
                    borderRadius: 5,
                    justifyContent: 'center',
                }}>
                    <Text style={{ fontSize: 20, textAlign: 'center', fontFamily: 'Avenir' }}>Are you sure you want to leave {siteName?.toUpperCase()}?</Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: 350,
                        paddingLeft: 50,
                        paddingRight: 50,
                        alignContent: 'center'
                    }}>

                        <CustomButton
                            ButtonStyle={{
                                width: 80,
                                backgroundColor: '#FED849',
                                marginTop: 20,
                                height: 40
                            }}
                            TextStyle={{
                                color: '#242A37',
                                fontSize: 15,
                                marginTop: 8
                            }}
                            onPress={leave}
                            text="LEAVE" />

                        <CustomButton
                            ButtonStyle={{
                                // backgroundColor: 'grey',
                                // width: 80,
                                marginTop: 20,
                                // height: 40,
                                // borderWidth: 0.5
                            }}
                            TextStyle={{
                                color: 'grey',
                                fontSize: 15,
                                marginTop: 8
                            }}
                            onPress={closeModal}
                            text="NOT NOW" />

                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default connectToProps(Leave)