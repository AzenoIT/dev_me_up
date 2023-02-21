import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import {AuthProvider} from "./context/AuthProvider";
import useAuth from "./hooks/useAuth";

import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Challenge from "./components/Challenge/Challenge";
import Friends from "./components/Friends/Friends";
import ProfileSettings from "./components/ProfileSettings/ProfileSettings";
import Rankings from "./components/Rankings/Rankings";

const Tab = createBottomTabNavigator();
export default function App() {
const {auth} = useAuth();
    return (
        <NavigationContainer>
            <AuthProvider>
                <Tab.Navigator initialRouteName="Main">
                    {!auth ? (
                        <>
                            <Tab.Screen name="Home" component={Challenge}/>
                            <Tab.Screen name="Battle" component={Challenge}/>
                            <Tab.Screen name="Friends" component={Friends}/>
                            <Tab.Screen name="Settings" component={ProfileSettings}/>
                            <Tab.Screen name="Rankings" component={Rankings}/>
                        </>
                    ) : (
                        <>
                            <Tab.Screen name="SignUp" component={SignUp}/>
                            <Tab.Screen name="Login" component={Login}/>
                        </>
                    )}
                </Tab.Navigator>
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

