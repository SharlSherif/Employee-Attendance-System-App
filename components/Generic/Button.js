import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';

export default Button = (props) => {
    const { TextStyle, ButtonStyle, onPress, text, disabled = false } = props;

    return (
        <TouchableOpacity style={{
            ...ButtonStyles.container,
            borderRadius: 10,
            height: 50,
            borderWidth: 0,
            ...ButtonStyle, // user input
            backgroundColor: disabled ? '#dfdfe6' : ButtonStyle.backgroundColor,
        }} onPress={disabled == false ? onPress : null} activeOpacity={disabled ? 1 : 0.8}>
            <Text style={{ ...ButtonStyles.text, ...TextStyle }}>{text}</Text>
        </TouchableOpacity>
    )
}



const ButtonStyles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: 'center',
        paddingVertical: 12,
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        width: '100%'
    },
    text: {
        textAlign: "center",
        color: 'white',
        fontSize: 15,
        fontFamily: 'SF-UI-Display-Bold',
        fontSize: 20,
        height: 30
    }
});
