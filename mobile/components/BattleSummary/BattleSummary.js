import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

function BattleSummary() {
	return (
		<View style={styles.container}>
			<Text>Battle summary</Text>
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

export default BattleSummary;
