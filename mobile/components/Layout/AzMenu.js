import {Menu, Appbar, Divider, useTheme} from "react-native-paper";

import {useNavigation} from '@react-navigation/native';
import {goTo} from "../../helpers/router";
import {StyleSheet} from "react-native";
import {StatusBar} from "expo-status-bar";


function AzMenu({visible, closeMenu, openMenu}) {
    const navigation = useNavigation();
    const theme = useTheme();

    return (
        <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
                <Appbar.Action icon="menu" color="black" onPress={openMenu}/>
            }>
            <Menu.Item onPress={goTo(navigation, 'Start')} title="Start"/>
            <Menu.Item onPress={goTo(navigation, 'Nowa gra')} title="Nowa gra"/>
            <Menu.Item onPress={goTo(navigation, 'Lista gier')} title="Lista gier"/>
            <Menu.Item onPress={goTo(navigation, 'Profil')} title="Profil"/>
            <Divider style={styles(theme).divider}/>
            <Menu.Item onPress={goTo(navigation, 'Logowanie')} title="Zaloguj się"/>
            <Menu.Item onPress={goTo(navigation, 'Rejestracja')} title="Zarejestruj się"/>

        </Menu>
    );
}

const styles = theme =>
    StyleSheet.create({
        divider: {
           marginBottom: 20
        },
    });

export default AzMenu;