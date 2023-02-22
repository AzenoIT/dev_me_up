import React, {useState} from "react";
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";

import {Button, Divider, TextInput, useTheme} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";

import {goTo} from "../../helpers/router";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const theme = useTheme();
    const navigation = useNavigation();

    const saveAndGo = async () => {
        goTo(navigation, 'Nowa gra')();
    }

    return (
        <SafeAreaView style={styles.containerSafe}>
            <ScrollView style={styles(theme).containerScroll}>
                <View style={styles(theme).containerSections}>
                    <View style={styles(theme).containerButtons}>
                        <Text style={styles(theme).label}>Zaloguj się</Text>
                        <TextInput
                            style={styles(theme).username}
                            label="Email"
                            value={email}
                            mode='outlined'
                            onChangeText={text => setEmail(text)}
                        />
                        <TextInput
                            style={styles(theme).username}
                            label="Hasło"
                            value={password}
                            mode='outlined'
                            secureTextEntry={true}
                            onChangeText={text => setPassword(text)}
                        />
                        <Button
                            style={styles(theme).button}
                            mode="elevated"
                            onPress={saveAndGo}
                        >
                            Zaloguj się!
                        </Button>
                    </View>
                    <Divider style={styles(theme).divider}/>
                    <View style={styles(theme).containerButtonBottom}>
                        <Button
                            style={styles(theme).button}
                            mode="elevated"
                            onPress={() => {
                                alert('V. 2.0')
                            }}
                            icon={'google'}
                        >
                            Logowanie przez Google
                        </Button>
                        <Button
                            style={styles(theme).button}
                            mode="elevated"
                            onPress={() => {
                                alert('V. 2.0')
                            }}
                            icon={'facebook'}
                        >
                            Logowanie przez Facebook
                        </Button>
                        <Button
                            style={styles(theme).button}
                            mode="elevated"
                            onPress={() => {
                                alert('V. 2.0')
                            }}
                            icon={'linkedin'}
                        >
                            Logowanie przez LinkedIn
                        </Button>
                        <Button
                            style={styles(theme).button}
                            mode="elevated"
                            onPress={() => {
                                alert('V. 2.0')
                            }}
                            icon={'github'}
                        >
                            Logowanie przez Github
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
            justifyContent: "center"
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
        containerButtonBottom: {
            justifyContent: 'flex-start',
            flex: 3,
            marginHorizontal: 20
        },
        button: {
            marginBottom: 4,
            marginTop: 20
        },
        label: {
            marginBottom: 30,
            marginTop: 30,
            textAlign: "center",
            fontSize: 36
        },
        divider: {
            marginTop: 20,
            marginBottom: 20
        }
    });


export default Login;