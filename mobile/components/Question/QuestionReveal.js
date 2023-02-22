import {Button, Card, Text} from 'react-native-paper';
import {View} from "react-native";

function QuestionReveal({qna, styles, isLoading, setIsOver}) {

    return (
        <View style={styles.responses_container}>
            <View style={styles.responses_container}>
                {!isLoading && qna[["answers"]].map((item, i) => (
                    <Card
                        style={(item.isCorrect === 'true') ? styles.correctAnswer : styles.answerCard}
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
            <View style={styles.btn_container}>
                <Button
                    mode={"contained"}
                    onPress={() => {
                        setIsOver(true)
                    }}
                >
                    Next question!
                </Button>
            </View>
        </View>

    );
}


export default QuestionReveal;
