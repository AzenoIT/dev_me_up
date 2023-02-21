import React, {useEffect, useState} from "react";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import {Button, useTheme} from "react-native-paper";
import {TextInput, View} from "react-native";
import {goTo} from "../../helpers/router";
import {StyleSheet} from "react-native";
import callApi from "../../helpers/api";
import { Text } from 'react-native-paper';


function WelcomeScreen({navigation}) {
    const [guestName, setGuestName] = useState("");
    const theme = useTheme();

    useEffect(() => {
        const controller = new AbortController();
        callApi({
            endpoint: '/userNames',
            signal: controller.signal
        })
            .then((data) => {
                setGuestName(data[0].name)
                alert(data[0].name);
            })
            .catch((err) => {
                alert(err);
            });

        return () => {
            controller.abort();
        }
    }, []);

    const styles = StyleSheet.create({
        btn: {
            margin: 5,
            maxWidth: '80%',
            width: "100%",
        },
        play_btn: {
            margin: 5,
            backgroundColor: theme.colors.onBackground,
            maxWidth: '80%',
            width: "100%",
        },
        input: {
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: theme.colors.primary,
            margin: 20,
            width: "100%",
            maxWidth: '80%'
        },
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
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
            <Text variant="displayLarge" style={{color: 'red'}}>{guestName}</Text>

            <Button
                icon="account-eye-outline"
                mode="contained"
                onPress={goTo(navigation, "Battle")}
                style={styles.play_btn}
            >
                Play as a guest
            </Button>
            <Button
                icon="login"
                mode="contained"
                onPress={goTo(navigation, "Login")}
                style={styles.btn}
            >
                Login
            </Button>
            <Button
                icon="key"
                mode="contained"
                onPress={goTo(navigation, "SignUp")}
                style={styles.btn}
            >
                SignUp
            </Button>
        </View>
    );
}

export default WelcomeScreen;

