import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { AuthProvider } from "./context/AuthProvider";
import useAuth from "./hooks/useAuth";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "./components/Home/Home";
import Friends from "./components/Friends/Friends";
import ProfileSettings from "./components/ProfileSettings/ProfileSettings";
import Rankings from "./components/Rankings/Rankings";
import Battle from "./components/Battle/Battle";
import OnboardingSetup from "./components/Onboarding/OnboardingSetup";

const Tab = createBottomTabNavigator();

export default function App() {
	const { auth } = useAuth();
	return (
		<NavigationContainer>
			<AuthProvider>
				<Tab.Navigator initialRouteName="Home">
					{!auth ? (
						<>
							<Tab.Screen
								name="Home"
								component={Home}
								options={{
									tabBarIcon: () => (
										<Ionicons name="home-outline" color="blue" size={22} />
									),
								}}
							/>
							<Tab.Screen
								name="Onboarding"
								component={OnboardingSetup}
								options={{
									tabBarIcon: () => (
										<Ionicons name="home-outline" color="blue" size={22} />
									),
								}}
							/>
							<Tab.Screen
								name="Battle"
								component={Battle}
								options={{
									tabBarIcon: () => (
										<Ionicons name="people-outline" color="blue" size={22} />
									),
								}}
							/>
							<Tab.Screen
								name="Friends"
								component={Friends}
								options={{
									tabBarIcon: () => (
										<Ionicons name="people-outline" color="blue" size={22} />
									),
								}}
							/>
							<Tab.Screen
								name="Settings"
								component={ProfileSettings}
								options={{
									tabBarIcon: () => (
										<Ionicons name="settings-outline" color="blue" size={22} />
									),
								}}
							/>
							<Tab.Screen
								name="Rankings"
								component={Rankings}
								options={{
									tabBarIcon: () => (
										<Ionicons name="bar-chart-outline" color="blue" size={22} />
									),
								}}
							/>
						</>
					) : (
						<>
							<Tab.Screen
								name="SignUp"
								component={SignUp}
								options={{
									tabBarIcon: ({ color, size }) => (
										<Ionicons name="log-in-outline" color="blue" size={22} />
									),
								}}
							/>
							<Tab.Screen
								name="Login"
								component={Login}
								options={{
									tabBarIcon: ({ color, size }) => (
										<Ionicons name="key-outline" color="blue" size={22} />
									),
								}}
							/>
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
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
