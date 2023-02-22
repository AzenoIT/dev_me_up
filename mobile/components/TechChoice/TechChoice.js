import {SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
import {Avatar, Button, Card, Text, useTheme} from "react-native-paper";
import SelectDropdown from "react-native-select-dropdown";

import {useEffect, useState} from "react";
import {TouchableOpacity} from "react-native-gesture-handler";
import DropDownPicker from "react-native-dropdown-picker";

const levels = ["don't train", "junior", "mid", "senior", "principle"];
const technologies = [
    {
        id: 1,
        name: "Python",
        active: false,
        showSelect: false,
        level: "",
        logo: "120",
    },
    {
        id: 2,
        name: "Java Script",
        active: false,
        showSelect: false,
        level: "",
        logo: "331",
    },
    {
        id: 3,
        name: "PhpStorm",
        active: false,
        showSelect: false,
        level: "",
        logo: "211",
    },
    {
        id: 4,
        name: "MS DOS",
        active: false,
        showSelect: false,
        level: "",
        logo: "121",
    },
    {
        id: 5,
        name: "C#",
        active: false,
        showSelect: false,
        level: "",
        logo: "136",
    },
    {
        id: 6,
        name: "CSS",
        active: false,
        showSelect: false,
        level: "",
        logo: "117",
    },
]

function TechChoice() {
    const [techStack, setTechStack] = useState([]);

    const theme = useTheme();

    useEffect(() => {
        setTechStack(technologies);
    }, [])

    return (
        <SafeAreaView style={styles.containerSafe}>
            <ScrollView style={styles(theme).containerScroll}>
                <View style={styles(theme).containerSections}>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = (theme) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#fff",
            justifyContent: "center",
            padding: 10,
            width: '100%'
        },

        grid: {
            flex: 1,
            flexWrap: 'nowrap'
        },

        card: {
            // marginTop: 10,
            margin: 10,
            width: '50%'
        },

        title: {
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 6
        },

        picture: {
            width: "40%",
            height: "40%",
        },
    });

export default TechChoice;
