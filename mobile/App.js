import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Main from "./screens/Main";
import Battle from "./screens/Battle";
import Friends from "./screens/Friends";
import ProfileSettings from "./screens/ProfileSettings";
import Rankings from "./screens/Rankings";
import Login from "./screens/Login";
import SignUp from "./screens/SingUp";
import {AuthProvider} from "./context/AuthProvider";
import useAuth from "./hooks/useAuth";

const Stack = createNativeStackNavigator();

export default function App() {
const {auth} = useAuth();
    return (
        <NavigationContainer>
            <AuthProvider>
                <Stack.Navigator initialRouteName="Main">
                    {!auth ? (
                        <>
                            <Stack.Screen name="Home" component={Main}/>
                            <Stack.Screen name="Battle" component={Battle}/>
                            <Stack.Screen name="Friends" component={Friends}/>
                            <Stack.Screen name="Settings" component={ProfileSettings}/>
                            <Stack.Screen name="Rankings" component={Rankings}/>
                        </>
                    ) : (
                        <>
                            <Stack.Screen name="SignUp" component={SignUp}/>
                            <Stack.Screen name="Login" component={Login}/>
                        </>
                    )}
                </Stack.Navigator>
            </AuthProvider>
        </NavigationContainer>
    );
}
