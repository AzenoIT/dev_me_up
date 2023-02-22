import * as React from 'react';
import {Appbar} from 'react-native-paper';
import AzMenu from "./AzMenu";
import {removeItemValue, storeData} from "../../helpers/storage_helpers";

const AzAppBar = ({navigation, back, route}) => {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return (
        <Appbar.Header>
            {back ? <Appbar.BackAction onPress={navigation.goBack}/> : null}
            <Appbar.Content title={route.name}/>
            <Appbar.Action icon="magnify" onPress={() => {
                removeItemValue('profile').catch(console.log)
                removeItemValue('intro').catch(console.log)
            }}/>
            <AzMenu visible={visible} closeMenu={closeMenu} openMenu={openMenu}/>
        </Appbar.Header>
    )
};

export default AzAppBar;