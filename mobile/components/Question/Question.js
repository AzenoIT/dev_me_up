import {Card, Divider, Text, useTheme} from 'react-native-paper';
import {StyleSheet, View} from "react-native";
import {useEffect, useState} from "react";
import {CountdownCircleTimer, useCountdown} from 'react-native-countdown-circle-timer'
import callApi from "../../helpers/api";

const totalTime = 17;

function Question() {
    const theme = useTheme();
    const [reveal, setReveal] = useState(false);
    const [questionList, setQuestionList] = useState('tra');
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
        callApi('/')
            .then((response) => {
                setQuestionList(response)
            });

        return () => {
        }
    }, [])

    const styles = StyleSheet.create({
        answer: {
            margin: 10,
        },
        correctAnswer: {
            backgroundColor: theme.colors.error
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

    return (
        <Card style={styles.card}>
            <Card.Title title={'Pytanie1'} style={styles.hdn}/>

            <Card.Content style={styles.content}>
                <Text
                    style={styles.question}
                >
                    Python python python python python python python python python
                    python{JSON.stringify(questionList)}</Text>
                <Divider/>
            </Card.Content>
            <Card.Actions style={styles.container}>
                <View style={styles.responses_container}>
                    <Card
                        style={styles.answerCard}
                    >
                        <Text
                            style={styles.answer}
                        >Odpowiedź A</Text>
                    </Card>
                    <Card
                        style={reveal ? styles.correctAnswer : styles.answerCard}
                    >
                        <Text
                            style={styles.answer}
                        >Odpowiedź B</Text>
                    </Card>
                    <Card
                        style={styles.answerCard}
                    >
                        <Text
                            style={styles.answer}
                        >Odpowiedź C</Text>
                    </Card>
                    <Card
                        style={styles.answerCard}
                    >
                        <Text
                            style={styles.answer}
                        >Odpowiedź D</Text>
                    </Card>
                    <View style={styles.countdown}>
                        {reveal === false ? (
                            < CountdownCircleTimer
                            isPlaying
                            duration={7}
                            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                            colorsTime={[7, 5, 2, 0]}
                            size={80}
                            onUpdate={(time) => {
                                if(!time) {
                                    setReveal(true);
                                }
                            }}
                            >
                        {({remainingTime}) => <Text>{remainingTime}</Text>}
                            </CountdownCircleTimer>
                        ) : (
                        <></>
                        )}
                    </View>
                </View>
            </Card.Actions>
        </Card>
    );
}



export default Question;
