import {Card, Text} from "react-native-paper";
import {View} from "react-native";
import {CountdownCircleTimer} from "react-native-countdown-circle-timer";

function QuestionAnswers(qna, reveal, setReveal, styles, handleAnswer, isLoading, totalTime) {

    return (
        <View>
            <View style={styles.responses_container}>
            {!isLoading && qna[["answers"]].map((item, i) => (
                <Card
                    style={(reveal && item.isCorrect === 'true') ? styles.correctAnswer : styles.answerCard}
                    key={i}
                    onPress={(event) => {
                        handleAnswer(i)
                    }}
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
            <View style={styles.countdown}>
                < CountdownCircleTimer
                    isPlaying
                    duration={totalTime}
                    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[7, 5, 2, 0]}
                    size={80}
                    onUpdate={(time) => {
                        if (!time) {
                            setReveal(true);
                        }
                    }}
                >
                    {({remainingTime}) => <Text>{remainingTime}</Text>}
                </CountdownCircleTimer>
            </View>
        </View>
    )
}

export default QuestionAnswers;
