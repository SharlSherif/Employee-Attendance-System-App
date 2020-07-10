import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    Animated,
    Keyboard
} from 'react-native';
import { Label } from 'native-base';

export default InputField = (props) => {
    const mounted = useRef();
    const [isFocused, setIsFocused] = useState(false)
    const {
        label,
        onChangeText,
        value,
        secureTextEntry = false,
        keyboardType = 'default',
        isError = false,
        InputStyle = {}
    } = props;
    const _shown = new Animated.Value(0);
    const borderColor = isError ? '#f7979f' : "#9e9e9e"

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true
            Animated.timing(_shown, {
                toValue: 1,
                duration: 1,
            }).start()
        } else {
            Animated.timing(_shown, {
                toValue: 1,
                duration: 1,
            }).start()
        }
    }, [isFocused, mounted.current, value])

    return (
        <Animated.View style={{ opacity: _shown }}>
            {/* {label !== '' && <Text style={labelStyle}>{label}</Text>} */}
            <TextInput
                value={value}
                onChangeText={onChangeText}
                selectionColor="#428AF8"
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                placeholder={label}
                style={{
                    ...styles.textInput, borderColor, ...InputStyle, fontFamily: 'Avenir'
                }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "space-between"
    },
    textInput: {
        height: 40,
        // color:  
        borderColor: '#f0f0f0',
        padding: 10,
        borderRadius: 6,
        borderWidth: 0.2,
        margin: 20,
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
        width: "80%",
    }
});