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
import TechChoice from "../TechChoice/TechChoice";
import NewGame from "../NewGame/NewGame";
import Invitation from "../Invitation/Invitation";

function Router() {
    return (
        <Stack.Navigator initialRouteName="Znajdź znajomego"
                         screenOptions={{
                             header: (props) => <AzAppBar {...props} />,
                         }}>
            <Stack.Screen name='Nowa gra' component={NewGame}/>
            <Stack.Screen name='Pytanie' component={Question}/>
            <Stack.Screen name='Wybór tematów' component={TechChoice}/>
            <Stack.Screen name='Profil' component={ProfileSettings}/>
            <Stack.Screen name='Metryki' component={Rankings}/>
            <Stack.Screen name='Zaproś znajomych' component={Invitation}/>
            <Stack.Screen name='Znajdź znajomego' component={Friends}/>
            <Stack.Screen name='Rejestracja' component={SignUp}/>
            <Stack.Screen name='Logowanie' component={Login}/>
        </Stack.Navigator>
    );
}

export default Router;