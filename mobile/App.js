import 'react-native-gesture-handler';

import {AuthProvider} from "./context/AuthProvider";
import useAuth from "./hooks/useAuth";

import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";

import {Provider as MenuProvider} from 'react-native-paper';
import Router from "./components/Layout/Router";


export default function App() {
    const {auth} = useAuth();
    return (
        <NavigationContainer>
            <AuthProvider>
                <MenuProvider>
                    <Router/>
                </MenuProvider>
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
