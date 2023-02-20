import {Appbar} from "react-native-paper";
import {StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

const TOP_APPBAR_HEIGHT = 80;


function MenuBarTop() {
    const {top} = useSafeAreaInsets();
    return (
        <Appbar.Header style={[
            styles.top,
            {
                height: TOP_APPBAR_HEIGHT + top
            },
        ]}>
            <Appbar.BackAction onPress={() => {
            }}/>
            <Appbar.Content title="Challenge"/>
            <Appbar.Action icon="calendar" onPress={() => {
            }}/>
            <Appbar.Action icon="magnify" onPress={() => {
            }}/>
            <Appbar.Action icon="magnify" onPress={() => {
            }}/>
            <Appbar.Action icon="magnify" onPress={() => {
            }}/>
        </Appbar.Header>);
}

const styles = StyleSheet.create({
    bottom: {
        backgroundColor: 'aquamarine',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
    },
    fab: {
        position: 'absolute',
        right: 16,
    },
});

export default MenuBarTop;