import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "../../screens/Main";
import Battle from "../../screens/Battle";
import Friends from "../../screens/Friends";
import ProfileSettings from "../../screens/ProfileSettings";
import Rankings from "../../screens/Rankings";
// import Loading from "../../screens/Rankings";
// import BattleSummary from "../../screens/BattleSummary";

const Stack = createNativeStackNavigator();

function MyStack() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Main">
				<Stack.Screen name="Main" component={Main} />
				<Stack.Screen name="Battle" component={Battle} />
				<Stack.Screen name="Friends" component={Friends} />
				<Stack.Screen name="Settings" component={ProfileSettings} />
				<Stack.Screen name="Rankings" component={Rankings} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default MyStack;