import {Button, StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';

import {theme} from "./theme/theme";
import MenuBarBottom from "./components/MenuBarBottom/MenuBarBottom";
import Main from "./components/Main";
import MenuBarTop from "./components/MenuBarTop/MenuBarTop";


export default function App() {
    return (
        <SafeAreaProvider>
            <PaperProvider theme={theme}>
                <View style={styles.container}>
                    <MenuBarTop/>
                    <Main/>
                    <MenuBarBottom/>
                </View>
            </PaperProvider>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
