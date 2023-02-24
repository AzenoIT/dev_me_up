import {StatusBar} from "expo-status-bar";
import {StyleSheet, View, Image} from "react-native";
import {getData, storeData} from "../../helpers/storage_helpers";
import {useEffect, useState} from "react";
import {goTo} from "../../helpers/router";
import {Badge, Button, Text, List, Avatar} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import Avatars from "../Question/Avatars";

function BattleSummary() {
    const [yourPoints, setYourPoints] = useState(0);
    const [opponentPoints, setOpponentPoints] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isCorrect, setIsCorrect] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
            getData('isCorrect').then((response) => {
                setIsCorrect(response);
                setYourPoints(response ? 1 : 0);
                setIsLoading(false);
                setOpponentPoints(response ? 0 : 1);
            });

    }, [])

    return !isLoading ? (
        <View style={styles.container}>
            <View>

                <View style={styles.avatar_container}>
                    <View style={styles.avatar_wrapper}>
                        <Avatar.Image
                            size={60}
                            source={require('../../assets/avatar.jpeg')}
                        />
                        <Text variant='titleLarge'>{yourPoints}</Text>
                    </View>
                    <View style={styles.versus}>
                        <Text>VS</Text>
                    </View>

                    <View style={styles.avatar_wrapper}>
                        <Avatar.Image
                            size={60}
                            source={require('../../assets/avatar.jpeg')}
                        />
                        <Text variant='titleLarge'>{opponentPoints}</Text>
                    </View>
                </View>

            </View>


            <Text variant={"displayMedium"}>{isCorrect ? 'WYGRYWASZ!' : 'Przegrana...'}</Text>
            {isCorrect ?
                (<Image
                    source={require('../../assets/badge.png')}
                    style={styles.img}
                />) : (
                    <View style={styles.empty_space}>
                        <Text style={styles.loss} variant={"displayLarge"}>
                            :(
                        </Text>
                    </View>
                )
            }

            <Text variant={"headlineLarge"}>1</Text>
            <Text>Twoje punkty</Text>


            <Button
                mode={"elevated"}
                onPress={goTo(navigation, 'Nowa gra')}
                style={styles.btn}
            >
                Gram dalej
            </Button>
            <View>
                <Badge size={120} style={isCorrect ? styles.piechart_win : styles.piechart_loss}/>
            </View>
            <View style={styles.list}>


                <List.Item
                    title='wygrane'
                    left={props => (
                        <Badge style={styles.badge_wins}></Badge>
                    )}
                    style={styles.list_item}
                />
                <List.Item
                    title='przegrane'
                    left={props => (
                        <Badge style={styles.badge_losses}></Badge>
                    )}
                    style={styles.list_item}
                />
                <List.Item
                    title='remisy'
                    left={props => (
                        <Badge style={styles.badge_ties}></Badge>
                    )}
                    style={styles.list_item}

                />
            </View>


            <Button
                mode={"elevated"}
                onPress={goTo(navigation, 'Metryki')}
                style={styles.btn}
            >
                Twoje statystyki
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
    img: {
        margin: 10
    },
    btn: {
        width: 200,
        margin: 30
    },
    list: {
        width: 150,
    },
    list_item: {
        marginBottom: -10
    },
    badge_wins: {
        backgroundColor: '#00DD00'
    },
    badge_losses: {
        backgroundColor: '#CC0000'
    },
    badge_ties: {
        backgroundColor: 'gray'
    },
    piechart_win: {
        backgroundColor: '#00DD00'
    },
    piechart_loss: {
        backgroundColor: '#CC0000'
    },
    avatar_container: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 50,
        marginBottom: 20
    },
    avatar_wrapper: {
        alignItems: "center"
    },
    versus: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20
    },
    empty_space: {
        padding: 10
    },
    loss: {
        color: '#CC0000',
        fontFamily: 'monospace'
    }
});

export default BattleSummary;
