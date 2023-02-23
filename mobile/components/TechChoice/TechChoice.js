import {Image, SafeAreaView, ScrollView, StyleSheet, View, Dimensions} from "react-native";
import {Badge, Button, Text, useTheme} from "react-native-paper";

import {useEffect, useState} from "react";
import {TouchableOpacity} from "react-native-gesture-handler";
import DropDownPicker from "react-native-dropdown-picker";
import {StatusBar} from "expo-status-bar";
import {useNavigation} from "@react-navigation/native";
import {goTo} from "../../helpers/router";
import {getData, storeData} from "../../helpers/storage_helpers";
import callApi from "../../helpers/api";


const levels = [
    {label: 'Brak', value: ''},
    {label: 'Novice', value: 'novice'},
    {label: 'Junior', value: 'junior'},
    {label: 'Regular', value: 'regular'},
    {label: 'Senior', value: 'senior'},
    {label: 'Guru', value: 'guru'},
]


function TechChoice() {
    const [techStack, setTechStack] = useState([]);
    const [activeTechnology, setActiveTechnology] = useState(0);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(levels);

    const theme = useTheme();
    const navigation = useNavigation();

    useEffect(() => {
        callApi({
            endpoint: '/technologies'
        })
            .then(setTechStack)
            .catch(console.log);
    }, [])

    useEffect(() => {
        updateStorageProfile().catch(console.log);
    }, [techStack])

    const updateStorageProfile = async () => {
        const profile = await getData('profile')

        if (profile) {
            await storeData('profile', {...profile, technologies: techStack.filter((tech) => tech.level !== '')});
        }
    }

    const handleTechnology = (technology) => {
        return () => {
            setActiveTechnology(technology.id);
            setOpen(true)
        }
    }

    const handleSetTechnology = (newValue) => {
        setTechStack(techStack.map((tech) => {
            if (tech.id === activeTechnology) {
                tech.level = newValue.label === 'Brak' ? '' : newValue.label
            }
            return tech
        }));
        setItems(levels);
    }

    const handleGame = () => {
        // TODO: Api Call
        if (techStack.filter((tech) => tech.level).length) {
        goTo(navigation, 'Grasz w gre')()
        }
    }

    return (
        <SafeAreaView style={styles(theme).containerSafe}>
            {open && (
                <View style={styles(theme).containerBg}>
                    <DropDownPicker
                        style={styles(theme).dropdown}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        onSelectItem={handleSetTechnology}
                        theme="LIGHT"
                        placeholder="Wybierz poziom"
                        stickyHeader={true}
                    />
                </View>
            )}
            <View style={styles(theme).containerInfo}>
                <Text style={styles(theme).text}>
                    Wybierz technologie i poziom trudności,
                </Text>
                <Text style={styles(theme).text}>
                    następnie naciśnij GRAJ
                </Text>
                <Button
                    style={styles(theme).button}
                    mode={techStack.filter((tech) => tech.level).length ? 'elevated' : 'disabled'}
                    onPress={handleGame}
                >
                    Graj
                </Button>
            </View>
            <ScrollView contentContainerStyle={styles(theme).container}>
                {techStack.map((technology) => (
                    <View
                        style={[styles(theme).card, technology.level && styles(theme).cardChecked]}
                        key={technology.id}>
                        <TouchableOpacity style={{...styles(theme).cardTouch}} onPress={handleTechnology(technology)}>
                            <Image
                                style={styles(theme).logo}
                                source={require('../../assets/logo_python.png')}
                            />
                            <Badge
                                style={[styles(theme).badge, technology.level && styles(theme).badgeActive]}>{technology.level || 'Wybierz'}</Badge>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = (theme, index = 1) =>
    StyleSheet.create({
        containerSafe: {
            minHeight: Dimensions.get('window').height,
            paddingTop: StatusBar.currentHeight,
        },
        container: {
            // flex: 1,
            marginRight: 20,
            marginLeft: 20,
            justifyContent: 'space-around',
            minHeight: Dimensions.get('window').height,
            flexWrap: "wrap",
            flexDirection: 'row',
        },
        containerInfo: {
            textAlign: 'center',
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center"
        },
        text: {
            textAlign: "center",
            fontSize: 12,
            lineHeight: 20,
        },
        button: {
            marginTop: 20,
            marginBottom: 10
        },
        containerBg: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            position: "absolute",
            zIndex: 999,
            width: '100%',
            minHeight: Dimensions.get('window').height,
        },
        card: {
            margin: 10,
            width: 130,
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 10,
            position: "relative",
            zIndex: 100 - index
        },
        cardChecked: {
            borderWidth: 5,
            borderStyle: 'solid',
            borderColor: 'rgba(227, 12, 12, 1)',
        },
        cardTouch: {
            width: 130,
            position: "relative"
        },
        logo: {
            width: 100,
            height: 100,
            marginBottom: 15
        },
        badge: {
            position: "absolute",
            top: 0,
            right: 0
        },
        badgeActive: {
            backgroundColor: 'green'
        },
        dropdown: {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            width: '100%',
            margin: 0,
            padding: 0,
            position: "relative",
            zIndex: 100 - index
        }
    });

export default TechChoice;


// <Text>{technology.name}</Text>
// <Text>Poziom: {technology.level || 'Brak'}</Text>