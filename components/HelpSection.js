import React, { Fragment } from 'react';
import { Text } from 'react-native';

const HelpSection = () => {
    return (
        <Fragment>
            <Text style={{
                position: 'absolute',
                bottom: '20%',
                fontSize: 15,
                fontFamily: 'Avenir',
            }}> How to get my company code?</Text>
            <Text style={{
                position: 'absolute',
                bottom: '16%',
                fontSize: 15,
                fontFamily: 'Avenir',
            }}> How to get my employee number?</Text>
        </Fragment>
    )
}


export default HelpSection