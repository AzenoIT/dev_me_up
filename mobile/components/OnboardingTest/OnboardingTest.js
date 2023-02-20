import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Card, SegmentedButtons } from "react-native-paper";

function OnboardingTest() {
	const [difficulty, setDifficulty] = useState("");

	return (
		<View style={styles.container}>
			<Text>Onboarding Test</Text>
			


			<SegmentedButtons
				value={difficulty}
				onValueChange={setDifficulty}
				buttons={[
					{
						value: "easy",
						label: "Easy",
					},
					{
						value: "medium",
						label: "Medium",
					},
					{
						value: "hard",
						label: "Hard",
					},
				]}
			/>
			<StatusBar style="auto" />
		</View>
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

export default OnboardingTest;
