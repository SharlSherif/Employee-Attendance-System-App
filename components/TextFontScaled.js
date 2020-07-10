import React from 'react';
import {
    Platform,
    Dimensions,
    PixelRatio,
    Text
} from 'react-native';
const { width, fontScale } = Dimensions.get("window");
let debug = { borderColor: 'red', borderWidth: 1 };

const normalize = (size) => {
    const scale = width / 320;
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}
const TextFontScaled = (props) => {
    let fontSize;
    if (!!props.style && !!props.style['fontSize']) {
        fontSize = normalize(props.style.fontSize)
    }

    return <Text style={{ ...props.style, fontSize }}>{props.children}</Text>
}

export default TextFontScaled