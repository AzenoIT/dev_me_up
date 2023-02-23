import AzAppBar from "./AzAppBar";
import Stack from "../../helpers/router";
import Challenge from "../Challenge/Challenge";
import Friends from "../Friends/Friends";
import ProfileSettings from "../ProfileSettings/ProfileSettings";
import Rankings from "../Rankings/Rankings";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import TechChoice from "../TechChoice/TechChoice";
import NewGame from "../NewGame/NewGame";
import Invitation from "../Invitation/Invitation";
import BattleSummary from "../BattleSummary/BattleSummary";
import Question from "../Question/Question";
import BattleList from "../BattleList/BattleList";

function Router() {
    return (
        <Stack.Navigator initialRouteName="Lista gier"
                         screenOptions={{
                             header: (props) => <AzAppBar {...props} />,
                         }}>
            <Stack.Screen name='Start' options={{headerShown: false}} component={WelcomeScreen}/>
            <Stack.Screen name='Nowa gra' component={NewGame}/>
            <Stack.Screen name='Grasz w gre' component={Question}/>
            <Stack.Screen name='Wybór tematów' component={TechChoice}/>
            <Stack.Screen name='Profil' component={ProfileSettings}/>
            <Stack.Screen name='Metryki' component={Rankings}/>
            <Stack.Screen name='Zaproś znajomych' component={Invitation}/>
            <Stack.Screen name='Znajdź znajomego' component={Friends}/>
            <Stack.Screen name='Rejestracja' options={{headerShown: false}}  component={SignUp}/>
            <Stack.Screen name='Logowanie' options={{headerShown: false}}  component={Login}/>
            <Stack.Screen name='Podsumowanie' options={{headerShown: true}}  component={BattleSummary}/>
            <Stack.Screen name='Lista gier' options={{headerShown: true}}  component={BattleList}/>
        </Stack.Navigator>
    );
}

export default Router;