import AzAppBar from "./AzAppBar";
import Stack from "../../helpers/router";
import Challenge from "../Challenge/Challenge";
import Friends from "../Friends/Friends";
import ProfileSettings from "../ProfileSettings/ProfileSettings";
import Rankings from "../Rankings/Rankings";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";

function Router() {
    return (
        <Stack.Navigator initialRouteName="Home"
                         screenOptions={{
                             header: (props) => <AzAppBar {...props} />,
                         }}>
            <Stack.Screen name="Home" component={Challenge}/>
            <Stack.Screen name="Friends" component={Friends}/>
            <Stack.Screen name="Profile" component={ProfileSettings}/>
            <Stack.Screen name="Rankings" component={Rankings}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
    );
}

export default Router;