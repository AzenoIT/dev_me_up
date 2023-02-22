import { StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import SelectDropdown from "react-native-select-dropdown";

import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const levels = ["don't train", "junior", "mid", "senior", "principle"];

function TechChoice() {
	const [techStack, setTechStack] = useState([
		{
			id: 1,
			name: "Python",
			active: false,
			showSelect: false,
			level: "",
			logo: "120",
		},
		{
			id: 2,
			name: "Java Script",
			active: false,
			showSelect: false,
			level: "",
			logo: "331",
		},
		{
			id: 3,
			name: "PhpStorm",
			active: false,
			showSelect: false,
			level: "",
			logo: "211",
		},
		{
			id: 4,
			name: "MS DOS",
			active: false,
			showSelect: false,
			level: "",
			logo: "121",
		},
		{
			id: 5,
			name: "C#",
			active: false,
			showSelect: false,
			level: "",
			logo: "136",
		},
		{
			id: 6,
			name: "CSS",
			active: false,
			showSelect: false,
			level: "",
			logo: "117",
		},
	]);

	return (
		<View style={styles.container}>
			{/* <Text variant="titleLarge">Wybierz z technologie</Text> */}
			<View style={styles.grid}>
				{techStack.map((item) => (
					<View key={item.id}>
						<TouchableOpacity
						// onPress={
						// 	() =>
						// 		setTechStack((prevState) => {
						// 			const modifiedState = prevState.map((element) => {
						// 				element.id === item.id
						// 					? {
						// 							...element,
						// 							showSelect: true,
						// 					  }
						// 					: item;
						// 			});
						// 			return modifiedState;
						// 		})

						// 	// {}
						// }
						>
							<View style={styles.card}>
								{!item.showSelect ? (
									<Card>
										<Card.Content>
											<Text variant="titleLarge" style={styles.title}>
												{item.name}
											</Text>
											{/* <Text variant="bodyMedium">Card content</Text> */}
										</Card.Content>
										<Card.Cover
											style={styles.picture}
											source={{ uri: `https://picsum.photos/${item.logo}` }}
										/>
									</Card>
								) : (
									<SelectDropdown
										data={levels}
										onSelect={(selectedItem, index) => {
											console.log(selectedItem, index);
											item.level = selectedItem;
										}}
										buttonTextAfterSelection={(selectedItem, index) => {
											// text represented after item is selected
											// if data array is an array of objects then return selectedItem.property to render after item is selected
											return selectedItem;
										}}
										rowTextForSelection={(item, index) => {
											// text represented for each item in dropdown
											// if data array is an array of objects then return item.property to represent item in dropdown
											return item;
										}}
									/>
								)}
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
		// marginTop: 10,
		margin: 10,
	},

	title: {
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 6
	},

	picture: {
		width: 180,
		height: 180,
	},
});

export default TechChoice;
