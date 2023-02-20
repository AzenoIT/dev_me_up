import { FAB, IconButton } from "react-native-paper";
import { View, StyleSheet } from "react-native";

function Home({ navigation }) {
	return (
		<View style={styles.container}>
			<IconButton
				style={styles.avatar}
				icon="account"
				size={140}
				onPress={() => ({})}
			/>
			<View style={styles.btn_container}>
				<FAB
					icon="application-edit-outline"
					onPress={() => navigation.navigate("Onboarding")}
					label={"Onboarding"}
				/>
				<FAB
					icon="account-search-outline"
					onPress={() => navigation.navigate("Battle")}
					label={"Find a battle"}
				/>
				<FAB
					icon="account-heart"
					style={styles.fab}
					onPress={() => navigation.navigate("Friends")}
					label={"Challenge a friend"}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 5,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	fab: {
		backgroundColor: "#fff",
	},
	btn_container: {
		flex: 1,
		justifyContent: "space-around",
		marginBottom: 200,
	},
	avatar: {
		height: 140,
		width: 140,
		marginTop: 100,
	},
});
export default Home;
