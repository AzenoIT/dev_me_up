import {View, Image, SafeAreaView, ScrollView, StyleSheet, Text} from "react-native";
import {useNavigation, useTheme} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";
import {goTo} from "../../helpers/router";
import {Button} from "react-native-paper";


function NewGame() {
    const theme = useTheme();
    const navigation = useNavigation();

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
                        <Button
                            style={styles(theme).button}
                            mode="elevated"
                            onPress={goTo(navigation, 'Zaproś znajomych')}
                        >
                            Zaproś znajomego
                        </Button>
                        <Text style={styles(theme).scoreLabel}>Wyzwij znajomego na pojedynek.</Text>

                        <Button
                            style={styles(theme).button}
                            mode="elevated"
                            onPress={goTo(navigation, 'Pytanie')}
                        >
                            Graj
                        </Button>
                        <Text style={styles(theme).scoreLabel}>Szybka gra. Dopasujemy przeciwnika do ciebie.</Text>

                        <Button
                            style={styles(theme).button}
                            mode="elevated"
                            onPress={goTo(navigation, 'Wyszukaj znajomych')}
                        >
                            Graj ze znajomym
                        </Button>
                        <Text style={styles(theme).scoreLabel}>Wybierz z kim chcesz grać.</Text>

                        <Button
                            style={styles(theme).button}
                            mode="elevated"
                            onPress={goTo(navigation, 'Pytanie')}
                        >
                            Graj z AI
                        </Button>
                        <Text style={styles(theme).scoreLabel}>Zmierz się ze sztuczną inteligencją.</Text>
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
            height: 167
        },
        button: {
            marginBottom: 4
        },
        scoreLabel: {
            marginBottom: 30,
            textAlign: "center",
            fontSize: 12
        }
    });

export default NewGame;