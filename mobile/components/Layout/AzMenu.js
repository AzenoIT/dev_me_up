import {Menu, Appbar} from "react-native-paper";

import { useNavigation } from '@react-navigation/native';
import {goTo} from "../../helpers/router";


function AzMenu({visible, closeMenu, openMenu}) {
    const navigation = useNavigation();

    return (
        <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
                <Appbar.Action icon="menu" color="black" onPress={openMenu}/>
            }>
            <Menu.Item onPress={goTo(navigation, 'Start')} title="Start"/>
            <Menu.Item onPress={goTo(navigation, 'Nowa gra')} title="Nowa gra"/>
            <Menu.Item onPress={goTo(navigation, 'Grasz w gre')} title="Gra"/>
            <Menu.Item onPress={goTo(navigation, 'Grasz w gre')} title="Lista gier"/>
            <Menu.Item onPress={goTo(navigation, 'Profil')} title="Profil"/>
        </Menu>
    );
}

export default AzMenu;