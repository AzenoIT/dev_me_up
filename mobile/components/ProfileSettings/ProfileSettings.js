import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native"
import {Avatar, Button, TextInput, List, Switch} from 'react-native-paper';
import {useState} from "react";

function ProfileSettings() {
    const [text, setText] = useState("Masturbator1000");
    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
        <View style={styles.container}>
            <Avatar.Image size={96} source={require('../../assets/avatar.jpeg')}/>
            <TextInput
                label="Nazwa użytkownika"
                value={text}
                mode='outlined'
                onChangeText={text => setText(text)}
            />
            <Text variant="displayLarge">1522</Text>
            <Text variant="bodySmall">Twoje punkty</Text>
            <Button mode="elevated" onPress={() => console.log('Pressed')}>
                Twoje statystyki
            </Button>
            <Button mode="elevated" onPress={() => console.log('Pressed')}>
                Wybierz technologie
            </Button>
            <List.Item
                title="First Item"
                description="Item description"
                left={props => <Switch value={isSwitchOn} onValueChange={onToggleSwitch}/>}
                right={props => (
                    <View>
                        <Text variant="bodyMedium">Czy chcesz być wyszukiwany</Text>
                        <Text variant="bodySmall">Szybciej zagrasz ze znajomymi</Text>
                    </View>
                )}
            />

            <List.Item
                title="First Item"
                description="Item description"
                left={props => <Switch value={isSwitchOn} onValueChange={onToggleSwitch}/>}
                right={props => (
                    <View>
                        <Text variant="bodyMedium">Ranking</Text>
                        <Text variant="bodySmall">Czy chcesz być dodany do rankingu globalnego</Text>
                    </View>
                )}
            />

            <List.Item
                title="First Item"
                description="Item description"
                left={props => <Switch value={isSwitchOn} onValueChange={onToggleSwitch}/>}
                right={props => (
                    <Text variant="bodyMedium">Dark mode</Text>
                )}
            />
            <StatusBar style="auto"/>
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

export default ProfileSettings;
