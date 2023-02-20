import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

function Main({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>Main screen</Text>
			<Button
				title="Start the battle"
				onPress={() => navigation.navigate("Battle")}
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

export default Main;
