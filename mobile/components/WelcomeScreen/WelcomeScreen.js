import React, {useEffect, useState} from "react";
import {Button, useTheme, TextInput, Text} from "react-native-paper";
import {Image, SafeAreaView, ScrollView, View, StyleSheet} from "react-native";

import {StatusBar} from "expo-status-bar"
    ;
import callApi from "../../helpers/api";
import {goTo} from "../../helpers/router";
import {getData, storeData} from "../../helpers/storage_helpers";
import {playerData} from "../../helpers/playerData";

function WelcomeScreen({navigation}) {
    const [intro, setIntro] = useState(true);
    const [guestName, setGuestName] = useState("");
    const theme = useTheme();


    useEffect(() => {
        handleIntro().catch(console.log);

        const controller = new AbortController();
        callApi({
            endpoint: '/userNames',
            signal: controller.signal
        })
            .then((data) => {
                setGuestName(data[0].name)
                // alert(data[0].name);
            })
            .catch((err) => {
                // alert(err);
            });

        return () => {
            controller.abort();
        }
    }, []);

    const handleIntro = async () => {
        let data = await getData('intro');
        if (data) {
            navigation.navigate('Nowa gra')
        }
    }

    const saveAndGo = async () => {
        const player = {...playerData, username: guestName};
        await storeData('profile', player);
        // TODO: should be invoked from useEffect, because store does not work.
        navigation.navigate('Wybór tematów');
    }

    return (
        <SafeAreaView style={styles.containerSafe}>
            <ScrollView style={styles(theme).containerScroll}>
                <View style={styles(theme).containerSections}>
                    <View style={styles(theme).container}>
                        <Image
                            style={styles(theme).logo}
                            source={require('../../assets/logo.png')}
                        />
                    </View>
                    <View style={styles(theme).containerButtons}>
                        <TextInput
                            style={styles(theme).username}
                            label="Nazwa użytkownika"
                            value={guestName}
                            mode='outlined'
                            onChangeText={text => setGuestName(text)}
                        />
                        <Button
                            style={styles(theme).button}
                            mode="elevated"
                            onPress={saveAndGo}
                        >
                            Zaczynamy!
                        </Button>
                        <Text style={styles(theme).scoreLabel}>Grasz jako gość.</Text>

                        <Button
                            style={styles(theme).button}
                            mode="elevated"
                            onPress={goTo(navigation, 'Logowanie')}
                        >
                            Zaloguj się
                        </Button>

                        <Button
                            style={styles(theme).button}
                            mode="elevated"
                            onPress={goTo(navigation, 'Rejestracja')}
                        >
                            Załóż konto
                        </Button>
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
            backgroundColor: '#F7F7F7'
        },
        containerSections: {
            minHeight: '100%'
        },
        container: {
            flex: 1,
            marginRight: 20,
            marginLeft: 20,
            justifyContent: 'center',
            alignItems: "center",
            marginTop: 30,
            marginBottom: 60
        },
        containerButtons: {
            justifyContent: 'flex-start',
            flex: 3,
            marginHorizontal: 20
        },
        logo: {
            width: 167,
            height: 167,
            marginTop: 50
        },
        button: {
            marginBottom: 4,
            marginTop: 20
        },
        scoreLabel: {
            marginBottom: 30,
            textAlign: "center",
            fontSize: 12
        },
        username: {
            minWidth: 200,
            marginBottom: 0
        },
    });

export default WelcomeScreen;

