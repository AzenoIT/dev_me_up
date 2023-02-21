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
            <Menu.Item onPress={goTo(navigation, 'Pytanie')} title="Gra"/>
            <Menu.Item onPress={goTo(navigation, 'Pytanie')} title="Lista gier"/>
            <Menu.Item onPress={goTo(navigation, 'Profil')} title="Profil"/>
        </Menu>
    );
}

export default AzMenu;