import {Card, Text} from "react-native-paper";
import {View} from "react-native";
import {CountdownCircleTimer, useCountdown} from "react-native-countdown-circle-timer";

function QuestionAnswers({
                             question,
                             answers,
                             reveal,
                             setReveal,
                             handleRevealAnswer,
                             styles,
                             isLoading,
                             questionTime
                         }) {

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
    } = useCountdown({isPlaying: true, duration: questionTime, colors: '#abc'})

    return (
        <View style={styles.main_container}>
            <View style={styles.countdown}>
                < CountdownCircleTimer
                    isPlaying
                    duration={questionTime}
                    colors={['#00AA00', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[7, 5, 2, 0]}
                    size={40}
                    strokeWidth={5}
                    onUpdate={(time) => {
                        if (!time) {
                            handleRevealAnswer();
                        }
                    }}
                >
                    {({remainingTime}) => <Text>{remainingTime}</Text>}
                </CountdownCircleTimer>
            </View>
            <View style={styles.responses_container}>
                {!isLoading && answers.map((item, i) => (
                    <Card
                        style={styles.answerCard}
                        key={i}
                        onPress={(event) => {
                            handleRevealAnswer(i)
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
        </View>
    )
}

export default QuestionAnswers;
