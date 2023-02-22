import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";
import callApi from "../../helpers/api";

function TechChoice() {
	const [isLoading, setIsLoading] = useState(true);
	const [techStack, setTechStack] = useState([]);
	const [levels, setLevels] = useState([]);

	useEffect(() => {
		callApi({ endpoint: `/techChoices/` })
			.then((response) => {
				setTechStack(response);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error(error);
			});

		callApi({ endpoint: `/levels/` })
			.then((response) => {
				setLevels(response);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error(error);
			});

		return () => {};
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.grid}>
				{!isLoading &&
					techStack.map((item) => (
						<View key={item.id}> 
							<TouchableOpacity>
								<View style={styles.card}>
									<Card>
										<Card.Content>
											<Text variant="titleLarge" style={styles.title}>
												{item.name}
											</Text>
										</Card.Content>
										<Card.Cover
											style={styles.picture}
											source={{ uri: `https://picsum.photos/${item.logo2}` }}
										/>
									</Card>
								</View>
							</TouchableOpacity>
						</View>
					))}
			</View>
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

	grid: {
		flex: 1,
		rowGap: 4,
		columnGap: 4,
		flexWrap: "wrap",
	},

	card: {
		margin: 10,
	},

	title: {
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 6,
	},

	picture: {
		width: 180,
		height: 180,
	},
});

export default TechChoice;
