import {Button, Card, Text} from 'react-native-paper';
import {StyleSheet} from "react-native";

function Question() {
    return (
        <Card style={styles.card}>
            <Card.Title title="Pytanie1" />
            <Card.Content style={styles.card_content}>
                <Text variant="bodyMedium">Python python python python python python python python python python</Text>
            </Card.Content>
            <Card.Actions style={styles.responses_container}>
                <Button mode={"contained"} style={styles.response} onPress={() => ({})}>Odpowiedź A</Button>
                <Button mode={"contained"} style={styles.response} onPress={() => ({})}>Odpowiedź B</Button>
                <Button mode={"contained"} style={styles.response} onPress={() => ({})}>Odpowiedź C</Button>
                <Button mode={"contained"} style={styles.response} onPress={() => ({})}>Odpowiedź D</Button>
            </Card.Actions>
        </Card>
    );
}

const styles = StyleSheet.create({
    responses_container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        flexDirection: "row"
    },
    card_content: {
        flex: 1,
        justifyContent: "center"
    },
    card: {
        alignItems: "center",
        justifyContent: "center"
    },
    response: {margin: 5,
    }
})

export default Question;
