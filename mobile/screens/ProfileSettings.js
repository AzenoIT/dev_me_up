import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

function ProfileSettins() {
	return (
		<View style={styles.container}>
			<Text>ProfileSettins</Text>
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

export default ProfileSettins;
