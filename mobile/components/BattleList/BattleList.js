import {View, Text, StyleSheet} from 'react-native';
import {IconButton, List, MD3Colors, useTheme} from 'react-native-paper';
import {useState} from "react";
import Avatars from "../Question/Avatars";
import {StatusBar} from "expo-status-bar";
import {useNavigation} from "@react-navigation/native";
import {goTo} from "../../helpers/router";

function BattleList() {
    const [expandedCurrentGames, setExpandedCurrentGames] = useState(true);
    const [expandedPastGames, setExpandedPastGames] = useState(false);

    const theme = useTheme();
    const navigation = useNavigation()

    const handlePressCurrent = () => setExpandedCurrentGames(!expandedCurrentGames);
    const handlePressPast = () => setExpandedPastGames(!expandedPastGames);

    return (
        <List.AccordionGroup
            expanded={expandedCurrentGames}
            onPress={handlePressCurrent}
        >
            <List.Accordion
                title="Trwające gry"
                id="1"
                expanded={expandedCurrentGames}
                onPress={handlePressCurrent}
                left={props => <List.Icon {...props} icon="nintendo-game-boy"/>}
            >
                <List.Item
                    title="Wynik 9:4"
                    style={styles(theme).item}
                    right={props => <IconButton
                        icon="hand-okay"
                        iconColor='green'
                        size={30}
                        onPress={goTo(navigation, 'Podsumowanie')}
                    />}
                    left={props => <Avatars/>}
                />
                <List.Item
                    title="Wynik 2:1"
                    style={styles(theme).item}
                    right={props => <IconButton
                        icon="hand-okay"
                        iconColor='green'
                        size={30}
                        onPress={() => console.log('Pressed')}
                    />}
                    left={props => <Avatars/>}
                />
                <List.Item
                    title="Wynik 0:9"
                    style={styles(theme).item}
                    right={props => <IconButton
                        icon="timer-off"
                        iconColor='red'
                        size={30}
                        onPress={() => console.log('Pressed')}
                    />}
                    left={props => <Avatars/>}
                />

                <List.Item
                    title="Wynik 9:4"
                    style={styles(theme).item}
                    right={props => <IconButton
                        icon="hand-okay"
                        iconColor='green'
                        size={30}
                        onPress={() => console.log('Pressed')}
                    />}
                    left={props => <Avatars/>}
                />
            </List.Accordion>
            <List.Accordion
                title="Zakończone gry"
                id="2"
                expanded={expandedPastGames}
                onPress={handlePressPast}
                left={props => <List.Icon {...props} icon="history"/>}
            >
                <List.Item
                    title="Wynik 2:1"
                    style={styles(theme).item}
                    right={props => <IconButton
                        icon="hand-okay"
                        iconColor='green'
                        size={30}
                        onPress={() => console.log('Pressed')}
                    />}
                    left={props => <Avatars/>}
                />
                <List.Item
                    title="Wynik 0:10"
                    style={styles(theme).item}
                    right={props => <IconButton
                        icon="timer-off"
                        iconColor='red'
                        size={30}
                        onPress={() => console.log('Pressed')}
                    />}
                    left={props => <Avatars/>}
                />

                <List.Item
                    title="Wynik 9:4"
                    style={styles(theme).item}
                    right={props => <IconButton
                        icon="hand-okay"
                        iconColor='green'
                        size={30}
                        onPress={() => console.log('Pressed')}
                    />}
                    left={props => <Avatars/>}
                />
            </List.Accordion>
        </List.AccordionGroup>
    );
}

const styles = theme =>
    StyleSheet.create({
        item: {
            padding: 20
        }
    });
export default BattleList;