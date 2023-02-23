import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import {getData, storeData} from "../../helpers/storage_helpers";
import {useEffect, useState} from "react";
import {goTo} from "../../helpers/router";
import {Button} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";

function BattleSummary({score, count, setIsOver}) {
    const [isLoading, setIsLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {

        handleSummaryFromStorage().then(setIsLoading(false)).catch(console.log);

        return () => {
            storeData('score.current', 0);
            storeData('count.current', 0);
            score.current = 0;
            count.current = 0;
        }


    }, [])

    async function handleSummaryFromStorage() {
        let storageScore = await getData('score');
        let storageCount = await getData('count');

        score.current = storageScore;
        count.current = storageCount;
    }

    return !isLoading ? (
        <View style={styles.container}>
            <Text>Battle summary:</Text>
            <Text>Your score: {score.current}/{parseInt(count.current)}</Text>

            <Button
                mode={"contained"}
                onPress={() => setIsOver(false)}
            >
                Zagraj jeszcze raz!
            </Button>
            <StatusBar style="auto"/>
        </View>
    ) : (<></>);
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
