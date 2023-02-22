import {Card, Text} from "react-native-paper";
import {StyleSheet, View} from "react-native";
import {CountdownCircleTimer, useCountdown} from "react-native-countdown-circle-timer";

function QuestionAnswers({qna, reveal, setReveal, handleAnswer, styles, isLoading, totalTime}) {

    const {
        path,
        pathLength,
        stroke,
        strokeDashoffset,
        remainingTime,
        elapsedTime,
        size,
        strokeWidth,
        onUpdate
    } = useCountdown({isPlaying: true, duration: totalTime, colors: '#abc'})

    return (
        <View style={styles.responses_container}>
            <View style={styles.responses_container}>
            {!isLoading && qna[["answers"]].map((item, i) => (
                <Card
                    style={styles.answerCard}
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
