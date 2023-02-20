import {Button, StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as PaperProvider, ActivityIndicator, MD2Colors} from 'react-native-paper';
import {StatusBar} from 'expo-status-bar';

import {theme} from "./theme/theme";
import MenuBar from "./components/MenuBar/MenuBar";


export default function App() {
    return (
        <SafeAreaProvider>
            <PaperProvider theme={theme}>
                <View style={styles.container}>
                    <Text>Say my name</Text>
                    <Button icon="camera" title={'elo'}>
                        Press me
                    </Button>

                    <ActivityIndicator animating={true} color={MD2Colors.red800}/>
                    <StatusBar style="auto"/>
                    <MenuBar/>
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
