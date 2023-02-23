import callApi from "../../helpers/api";
import {useEffect, useState} from "react";
import {Avatar, Text} from "react-native-paper";
import {StyleSheet, View} from "react-native";

function Avatars() {
    const [opponent, setOpponent] = useState({});

    useEffect(() => {
        const controller = new AbortController();

        callApi({
            endpoint: '/friends', signal: controller.signal
        })
            .then(setOpponent)
            .catch(console.log);

    }, [])


    return (
        <View style={styles.container}>
            <Avatar.Image
                size={40}
                source={require('../../assets/avatar.jpeg')}
            />
            <View style={styles.versus}>
                <Text>VS</Text>
            </View>

            <Avatar.Image
                size={40}
                source={require('../../assets/avatar.jpeg')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10
    },
    versus: {
        margin: 10
    }
})

export default Avatars;