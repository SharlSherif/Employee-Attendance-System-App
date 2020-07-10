import {
    Platform,
    Dimensions,
    PixelRatio,
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

export default normalize