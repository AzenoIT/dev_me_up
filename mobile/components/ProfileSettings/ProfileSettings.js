import {StatusBar} from "expo-status-bar";
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native"
import {Avatar, Button, TextInput, List, Switch, Divider, useTheme} from 'react-native-paper';
import {useState} from "react";

function ProfileSettings() {
    const [text, setText] = useState("Masturbator1000");
    const [isSearchVisible, setIsSearchVisible] = useState(true);
    const [isRankingVisible, setIsRankingVisible] = useState(true);
    const [isDark, setIsDark] = useState(false);

    const theme = useTheme();

    const onToggleSearchVisible = () => setIsSearchVisible(!isSearchVisible);
    const onToggleRankingVisible = () => setIsRankingVisible(!isRankingVisible);
    const onToggleDark = () => setIsDark(!isDark);

    return (
        <SafeAreaView style={styles.containerSafe}>
            <ScrollView style={styles(theme).containerScroll}>
                <View style={styles(theme).container}>
                    <View style={styles(theme).containerAvatar}>
                        <Avatar.Image
                            style={styles(theme).avatar}
                            size={120}
                            source={require('../../assets/avatar.jpeg')}
                        />
                        <TextInput
                            style={styles(theme).username}
                            label="Nazwa użytkownika"
                            value={text}
                            mode='outlined'
                            onChangeText={text => setText(text)}
                        />
                    </View>
                    <View style={styles(theme).containerScore}>
                        <Text style={styles(theme).scoreTitle}>1522</Text>
                        <Text style={styles(theme).scoreLabel}>Twoje punkty</Text>
                    </View>
                    <View style={styles(theme).containerScore}>
                        <Button
                            style={styles(theme).button}
                            mode="elevated"
                            onPress={() => console.log('Pressed')}
                        >
                            Twoje statystyki
                        </Button>
                        <Button
                            style={styles(theme).button}
                            mode="elevated"
                            onPress={() => console.log('Pressed')}
                        >
                            Wybierz technologie
                        </Button>
                    </View>
                    <View style={styles(theme).containerSwitch}>
                        <List.Item
                            style={styles(theme).switch}
                            title="Czy chcesz być wyszukiwany"
                            description="Szybciej zagrasz ze znajomymi"
                            left={props => <Switch value={isSearchVisible} onValueChange={onToggleSearchVisible}/>}
                        />
                        <Divider style={styles(theme).divider}/>

                        <List.Item
                            style={styles(theme).switch}
                            title="Ranking"
                            description="Czy chcesz być dodany do rankingu globalnego"
                            left={props => <Switch value={isRankingVisible} onValueChange={onToggleRankingVisible}/>}
                        />
                        <Divider style={styles(theme).divider}/>

                        <List.Item
                            style={styles(theme).switch}
                            title="Dark mode"
                            left={props => <Switch value={isDark} onValueChange={onToggleDark}/>}
                        />
                        <Divider style={styles(theme).divider}/>
                    </View>
                    <StatusBar style="auto"/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = theme =>
    StyleSheet.create({
        containerSafe: {
            flex: 1,
            paddingTop: StatusBar.currentHeight,
        },
        containerScroll: {
            backgroundColor: '#F7F7F7',
        },
        container: {
            maxWidth: '100%',
            minHeight: '100%',
            marginRight: 20,
            marginLeft: 20,
            justifyContent: 'space-between'
        },
        containerAvatar: {
            alignItems: 'center',
            marginBottom: 20
        },
        avatar: {
            marginTop: 14,
            marginBottom: 20
        },
        username: {
            minWidth: 200
        },
        containerScore: {
            alignItems: "center"
        },
        scoreTitle: {
            fontSize: 45
        },
        scoreLabel: {
            fontSize: 12,
            marginBottom: 20
        },
        button: {
            marginBottom: 20
        },
        containerSwitch: {},
        switch: {
            backgroundColor: 'white',
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 16,
            paddingRight: 16,
        },
        divider: {
            marginBottom: 10,
            border: '1px solid #CAC4D0'
        }
    });

export default ProfileSettings;
