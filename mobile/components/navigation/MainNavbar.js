import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackNavigator from "./StackNavigator";

const MainNavbar = () => {


	return (
		<NavigationContainer>
			<StackNavigator />
		</NavigationContainer>
	);
};

export default MainNavbar
