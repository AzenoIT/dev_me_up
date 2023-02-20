import {StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from "./theme/theme";
import MenuBarBottom from "./components/MenuBarBottom/MenuBarBottom";
import MenuBarTop from "./components/MenuBarTop/MenuBarTop";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from "./components/Main";
import Challenge from "./components/Challenge/Challenge";
import Friends from "./components/Friends/Friends";
import ProfileSettings from "./components/ProfileSettings/ProfileSettings";
import Rankings from "./components/Rankings/Rankings";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
    return (
        <SafeAreaProvider>
            <PaperProvider theme={theme}>
        <NavigationContainer>
                        <Tab.Navigator initialRouteName="Main">
                            <Tab.Screen name="Home" component={Challenge}/>
                            <Tab.Screen name="Battle" component={Challenge}/>
                            <Tab.Screen name="Friends" component={Friends}/>
                            <Tab.Screen name="Settings" component={ProfileSettings}/>
                            <Tab.Screen name="Rankings" component={Rankings}/>
                        </Tab.Navigator>
                    </NavigationContainer>
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

