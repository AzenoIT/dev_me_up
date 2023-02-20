import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

function ProfileSettings() {
	return (
		<View style={styles.container}>
			<Text>ProfileSettings</Text>
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

export default ProfileSettings;
