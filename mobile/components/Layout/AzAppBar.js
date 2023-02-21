import * as React from 'react';
import {Appbar} from 'react-native-paper';
import AzMenu from "./AzMenu";

const AzAppBar = ({navigation, back}) => {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return (
        <Appbar.Header>
            {back ? <Appbar.BackAction onPress={navigation.goBack}/> : null}
            <Appbar.Content title="Kurwa"/>
            <Appbar.Action icon="calendar" onPress={() => {
            }}/>
            <Appbar.Action icon="magnify" onPress={() => {
            }}/>
            {!back ? (
                <AzMenu visible={visible} closeMenu={closeMenu} openMenu={openMenu}/>
            ) : null}
        </Appbar.Header>
    )
};

export default AzAppBar;