import {StatusBar} from "expo-status-bar";
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native"
import {Avatar, Button, TextInput, List, Switch, Divider, useTheme} from 'react-native-paper';
import {useEffect, useState} from "react";
import {goTo} from "../../helpers/router";
import {useNavigation} from "@react-navigation/native";
import {getData, storeData} from "../../helpers/storage_helpers";
import callApi from "../../helpers/api";

function ProfileSettings() {
    const [text, setText] = useState("");
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [isRankingVisible, setIsRankingVisible] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [rank, setRank] = useState(0);
    const [profile, setProfile] = useState({});

    const navigation = useNavigation();

    const theme = useTheme();

    useEffect(() => {
        handleData().catch(console.log);
    }, []);

    async function handleData() {
        let data = await getData('profile');

        if (!data) {
            data = await callApi({
                endpoint: '/players/1'
            });
        }

        setState(data);
    }

    const setState = async (data) => {
        setText(data?.username);
        setIsSearchVisible(data?.isSearchVisible);
        setIsRankingVisible(data?.isRankingVisible);
        setIsDark(data?.theme);
        setRank(data?.score);
        setProfile(data);

        await storeData('profile', data);
    }

    const updateStorage = async (key, value) => {
        await storeData('profile', {
            ...profile,
            [key]: value
        });
    }

    const onToggleSearchVisible = async () => {
        const newSearchVisible = !isSearchVisible;

        setIsSearchVisible(newSearchVisible)
        await updateStorage('isSearchVisible', newSearchVisible);
    };
    const onToggleRankingVisible = async () => {
        const newRankingVisible = !isRankingVisible;
        setIsRankingVisible(newRankingVisible);

        await updateStorage('isRankingVisible', newRankingVisible);
    };
    const onToggleDark = async () => {
        const newTheme = !isDark;
        setIsDark(newTheme);

        await updateStorage('theme', newTheme);
    }

    const handleInput = async (text) => {
        setText(text);

        await updateStorage('username', text);
    }


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
                            onChangeText={handleInput}
                        />
                    </View>
                    <View style={styles(theme).containerScore}>
                        <Text style={styles(theme).scoreTitle}>{rank}</Text>
                        <Text style={styles(theme).scoreLabel}>Twoje punkty</Text>
                    </View>
                    <View style={styles(theme).containerScore}>
                        <Button
                            style={styles(theme).button}
                            mode="elevated"
                            onPress={goTo(navigation, 'Metryki')}
                        >
                            Twoje statystyki
                        </Button>
                        <Button
                            style={styles(theme).button}
                            mode="elevated"
                            onPress={goTo(navigation, 'Wybór tematów')}
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
