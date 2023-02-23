import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        console.log(e);
    }
}

export const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        throw new Error(e);
    }
}

export const removeItemValue = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        alert(`poszło się jebać ${key}`)
        return true;
    } catch (exception) {
        return false;
    }
}