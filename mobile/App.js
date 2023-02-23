import 'react-native-gesture-handler';

import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { useFonts } from 'expo-font';

import {Provider as MenuProvider} from 'react-native-paper';
import {AxiosProvider} from "./context/AxiosContext";
import {AuthProvider} from "./context/AuthContext";

import Outlet from "./Outlet";


export default function App() {
    const [fontsLoaded] = useFonts({
        'monospace': require('./assets/fonts/Roboto-Medium.ttf'),
    });

    return (
        <NavigationContainer>
            <AuthProvider>
                <AxiosProvider>
                    <MenuProvider>
                        <Outlet />
                    </MenuProvider>
                </AxiosProvider>
            </AuthProvider>
        </NavigationContainer>
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
