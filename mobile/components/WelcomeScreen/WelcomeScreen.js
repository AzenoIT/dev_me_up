import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import {Button, useTheme} from "react-native-paper";
import {TextInput, View} from "react-native";
import {link} from "../../helpers/helpers";
import {StyleSheet} from "react-native";
import {useState} from "react";
import TechChoice from "../TechChoice/TechChoice";


function WelcomeScreen({navigation}) {
    const [guestName, setGuestName] = useState("");
    const theme = useTheme();

    const styles = StyleSheet.create({
        btn: {
            margin: 5,
        },
        play_btn: {
            margin: 5,
            backgroundColor: theme.colors.onBackground
        },
        input: {
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: theme.colors.primary,
            margin: 20
        },
        container: {
            flex: 1,
            justifyContent: "center",
        }
    })

    return (
			<View style={styles.container}>
				<TextInput
					label="guestName"
					value={guestName}
					onChangeText={(guestName) => setGuestName(guestName)}
					placeholder={"Choose a guest name to play as"}
					type={"outlined"}
					style={styles.input}
				/>

				<Button
					icon="account-eye-outline"
					mode="contained"
					onPress={link(navigation, "TechChoice")}
					style={styles.play_btn}
				>
					Play as a guest
				</Button>
				<Button
					icon="login"
					mode="contained"
					onPress={link(navigation, "Login")}
					style={styles.btn}
				>
					Login
				</Button>
				<Button
					icon="key"
					mode="contained"
					onPress={link(navigation, "SignUp")}
					style={styles.btn}
				>
					SignUp
				</Button>
			</View>
		);
}

export default WelcomeScreen;

