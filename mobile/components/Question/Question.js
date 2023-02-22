import {Button, Card, Divider, Text, useTheme} from 'react-native-paper';
import {StyleSheet, View} from "react-native";
import {useEffect, useState} from "react";
import {CountdownCircleTimer, useCountdown} from 'react-native-countdown-circle-timer'
import callApi from "../../helpers/api";

const totalTime = 2;
const tech = 'js';

function Question() {
    const theme = useTheme();
    const [reveal, setReveal] = useState(false);
    const [qna, setQna] = useState({});
    const [count, setCount] = useState(1);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

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

    useEffect(() => {

    })

    useEffect(() => {
        callApi({endpoint: `/questions/`})
            .then((response) => {
                setQna(response[0][1][0]);
                setIsLoading(false);
            }).catch((error) => {
        });


        return () => {
        }
    }, [])

    const question = qna[["question"]];
    const answers = qna[["answers"]];

    const styles = StyleSheet.create({
        answer: {
            margin: 10,
        },
        correctAnswer: {
            backgroundColor: 'green'
        },
        responses_container: {
            flex: 1,
            backgroundColor: "white",
            justifyContent: "space-between",
            height: '100%'
        },
        container: {
            backgroundColor: "white",
            height: '85%'
        },
        content: {},
        answerCard: {
            marginTop: 20
        },
        card: {
            marginLeft: 20,
            marginRight: 20,
            height: '100%'
        },
        question: {},
        hdn: {},
        countdown: {
            margin: 15,
            alignItems: "center"
        }
    })

//     let handleAnswer = (event) => {
//         if(item.isCorrect === "true"){
//         setScore(score + 1);
//     }
//     setReveal(true);
// };

    return (
        <Card style={styles.card}>
            <Card.Title title={`Pytanie ${count}`} style={styles.hdn}/>

            <Card.Content style={styles.content}>
                <Text
                    style={styles.question}
                >
                    {question}
                </Text>
                <Divider/>
            </Card.Content>
            <Card.Actions style={styles.container}>
                <View style={styles.responses_container}>


                    {!isLoading && answers.map((item, i) => (
                            <Card
                                style={(reveal && item.isCorrect === 'true') ? styles.correctAnswer : styles.answerCard}
                                key={i}
                                // onPress={handleAnswer}
                            >
                                <Text
                                    style={styles.answer}
                                >
                                    {item.text}
                                </Text>
                            </Card>
                        )
                    )}

                    <View style={styles.countdown}>
                        {!reveal ? (
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
                        ) : (
                            <Button mode={"contained"}>Next question!</Button>
                        )}
                    </View>
                </View>
            </Card.Actions>
        </Card>
    );
}

export default Question;
