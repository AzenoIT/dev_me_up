import AzAppBar from "./AzAppBar";
import Stack from "../../helpers/router";
import Challenge from "../Challenge/Challenge";
import Friends from "../Friends/Friends";
import ProfileSettings from "../ProfileSettings/ProfileSettings";
import Rankings from "../Rankings/Rankings";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import Question from "../Question/Question";

function Router() {
    return (
        <Stack.Navigator initialRouteName="Welcome"
                         screenOptions={{
                             header: (props) => <AzAppBar {...props} />,
                         }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
            <Stack.Screen name="Question" component={Question}/>
            <Stack.Screen name="Profile" component={ProfileSettings}/>
            <Stack.Screen name="Rankings" component={Rankings}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
    );
}

export default Router;