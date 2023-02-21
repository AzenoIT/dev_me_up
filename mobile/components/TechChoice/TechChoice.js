import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Card, IconButton, Checkbox } from "react-native-paper";
import { useState } from "react";

const techStack = [
	{
		name: "Python",
		key: "py",
		copy: "Naucz się xyz. Będzie super",
		img: "",
	},
	{
		name: "JavaScript",
		key: "js",
		copy: "Zostań królem frontendu w 2h",
		img: "",
	},
	{
		name: "Go Lang",
		key: "gl",
		copy: "Zacznij naukę, albo idź do domu",
		img: "",
	},
	{
		name: "Rust",
		key: "ru",
		copy: "Nowy hype, nie zardzewiej",
		img: "",
	},
];

function TechChoice() {
	const [isSelected, setIsSelected] = useState(false);
	const [checkedTech, setCheckedTech] = useState(
		{
			name: "Python",
			key: "py",
			copy: "Naucz się xyz. Będzie super",
			img: "",
			checked: false
		},
		{
			name: "JavaScript",
			key: "js",
			copy: "Zostań królem frontendu w 2h",
			img: "",
			checked: false
		},
		{
			name: "Go Lang",
			key: "gl",
			copy: "Zacznij naukę, albo idź do domu",
			img: "",
			checked: false
		},
		{
			name: "Rust",
			key: "ru",
			copy: "Nowy hype, nie zardzewiej",
			img: "",
			checked: false
		}
	);

	return (
		<View style={styles.container}>
			<Text>TechChoice</Text>

			{/* {techStack.map((item) => (
				<Card.Title
					title={item.name}
					key={item.name}
					subtitle={item.copy}
					right={(props) => (
						<IconButton
							{...props}
							icon={isSelected ? "heart" : "heart-outline"}
							onPress={() => setIsSelected(!isSelected)}
						/>
					)}
				/>
			))} */}

			{techStack.map((item) => (
				<Checkbox.Item
					label={item.name}
					key={item.key}
					status={checkedTech[`${item.key}`] ? "checked" : "unchecked"}
					onPress={() => checkedTech(!setCheckedTech)}
				/>
			))}
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

export default TechChoice;
