import { AsyncStorage } from 'react-native';

export const store = async (key, value) => {
    if (await getKey(key) !== null) {
        await removeItem(key)
    }
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.log(error)
        // Error saving data
    }
};

export const getKey = async (key, parse = false) => {
    try {
        const value = await AsyncStorage.getItem(key);
     
        if (parse) {
            return JSON.parse(value)
        }
        return value
    } catch (error) {
        // Error retrieving data
        console.log(error)
    }
}

export const getAllKeys = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys()
        return keys
    } catch (error) {
        console.log(error)
    }
}

export const removeAll = async (objectKeys) => {
    try {
        for(let key of objectKeys) {
            await removeItem(key)
        }
    } catch (error) {
        console.log(error)
    }
}

export const removeItem = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
        console.log("Deleted "+ key)
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}