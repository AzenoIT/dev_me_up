import {StatusBar} from "expo-status-bar";
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {Searchbar, useTheme, List, Avatar, Checkbox, Button, Badge} from "react-native-paper";
import {useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {goTo} from "../../helpers/router";
import callApi from "../../helpers/api";

function Friends() {
    const [searchQuery, setSearchQuery] = useState('');
    const [friends, setFriends] = useState([]);
    const theme = useTheme();
    const navigation = useNavigation();

    useEffect(() => {
        const controller = new AbortController();

        callApi({
            endpoint: '/friends', signal: controller.signal
        })
            .then(setFriends)
            .catch(console.log);

        return () => {
            controller.abort();
        }
    }, [])
    const onChangeSearch = query => setSearchQuery(query);

    const friendFilter = friend => friend.username.toLowerCase().includes(searchQuery.toLowerCase());

    const playGame = (friend) => {
        return () => (
            goTo(navigation, 'Pytanie')
        )
    }


    return (
        <SafeAreaView style={styles.containerSafe}>
            <ScrollView style={styles(theme).containerScroll}>
                <View style={styles(theme).container}>
                    <View style={styles(theme).containerSearch}>
                        <Searchbar
                            style={styles(theme).search}
                            placeholder="Szukaj znajomych"
                            onChangeText={onChangeSearch}
                            value={searchQuery}
                        />
                        <Text style={styles(theme).title}>Lista twoich znajomych</Text>
                    </View>
                    <View>
                        {friends
                            .filter(friendFilter)
                            .map((friend) => (
                                <List.Item
                                    key={friend.id}
                                    style={styles(theme).item}
                                    title={`${friend.username}`}
                                    left={props => (
                                        <View style={styles(theme).containerRelative}>
                                            <Avatar.Image
                                                size={40}
                                                source={require('../../assets/avatar.jpeg')}
                                            />
                                            <Badge style={styles(theme).badge}>{friend.score}</Badge>
                                        </View>
                                    )}
                                    right={props => (
                                        <Button
                                            style={styles(theme).button}
                                            icon="play"
                                            mode="contained"
                                            onPress={playGame(friend)}
                                            contentStyle={{flexDirection: 'row-reverse'}}
                                        >
                                            Graj
                                        </Button>
                                    )}

                                />
                            ))}
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
        containerSearch: {},
        search: {
            borderRadius: 28,
            marginTop: 27,
            marginBottom: 27,
            backgroundColor: 'rgba(234, 221, 255, 1)',
            color: '#49454F'
        },
        title: {
            fontSize: 16,
            textAlign: "center",
            marginBottom: 12
        },
        item: {
            backgroundColor: 'white',
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 16,
            paddingRight: 16,
            marginBottom: 12
        },
        containerRelative: {
            position: 'relative'
        },
        badge: {
            position: 'absolute',
            top: -5,
            right: -10
        },
        button: {
            fontSize: 6,
            padding: 0
        }
    });

export default Friends;
