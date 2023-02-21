import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SegmentedButtons, RadioButton, List, FAB } from "react-native-paper";

const categories = [
	{
		name: "Python",
		icon: "",
		value: "py",
	},
	{
		name: "Java Script",
		icon: "",
		value: "js",
	},
	{
		name: "Machine Learning",
		icon: "",
		value: "ml",
	},
	{
		name: "Algorithms",
		icon: "",
		value: "al",
	},
];

const difficulties = [
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
];

function OnboardingSetup() {
	const [category, setCategory] = useState(null);
	const [difficulty, setDifficulty] = useState(null);

	const clearState = () => {
		setCategory(null)
		setDifficulty(null)
	}

	return (
		<View style={styles.container}>
			<List.Section title="Sprawdź się devie!">
				<RadioButton.Group value={category} onValueChange={setCategory}>
					{categories.map((category) => (
						<RadioButton.Item label={category.name} value={category.value} />
					))}
				</RadioButton.Group>
			</List.Section>

			{category && (
				<SegmentedButtons
					value={difficulty}
					onValueChange={setDifficulty}
					buttons={difficulties}
				/>
			)}

			{category && difficulty && (
				<FAB
					icon="alpha-l-circle-outline"
					// onPress={() => navigation.navigate("OnboardingTest")}
					onPress={clearState}
					label={"Start the quiz"}
				/>
			)}
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
		padding: 10,
	},
	surface: {
		width: "100%",
	},
	grid: {},
});

export default OnboardingSetup;
