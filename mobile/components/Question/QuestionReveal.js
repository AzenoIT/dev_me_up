import {Button, Card, Text} from 'react-native-paper';
import {View} from "react-native";
import {goTo} from "../../helpers/router";
import {useNavigation} from "@react-navigation/native";

function QuestionReveal({
                            question,
                            answers,
                            reveal,
                            setReveal,
                            styles,
                            isLoading,
                            usersPick,
                            correctPick,
                            handleRevealAnswer
                        }) {
    const navigation = useNavigation();
    return (
        <View style={styles.main_container}>
            <View style={styles.btn_container}>
                <Button
                    mode={"elevated"}
                    onPress={goTo(navigation, 'Nowa gra')}
                    style={styles.btn}
                >
                    Graj dalej!
                </Button>
            </View>
            <View style={styles.responses_container}>
                {!isLoading && answers.map((item, i) => (
                    <Card
                        style={i === correctPick ? styles.correctAnswer : (i === usersPick ? styles.wrongAnswer : styles.answerCard)}
                        key={i}
                    >
                        <Text
                            style={styles.answer}
                        >
                            {item.text}
                        </Text>
                    </Card>
                ))
                }
            </View>

        </View>

    );
}


export default QuestionReveal;
