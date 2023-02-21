import {Button, Card, Divider, ProgressBar, Text, useTheme} from 'react-native-paper';
import {StyleSheet, View, Animated} from "react-native";
import {useEffect, useRef, useState} from "react";
import {axiosPrivate} from "../../helpers/axios";
import { CountdownCircleTimer, useCountdown } from 'react-native-countdown-circle-timer'

const totalTime = 17;

function Question() {
    const theme = useTheme();
    const [questionList, setQuestionList] = useState('');
    const {
        path,
        pathLength,
        stroke,
        strokeDashoffset,
        remainingTime,
        elapsedTime,
        size,
        strokeWidth,
    } = useCountdown({ isPlaying: true, duration: totalTime, colors: '#abc' })
    async function getQuestions() {
        try {
            return await axiosPrivate.get(`/questions/tech/`);
        } catch(error){
            console.error(error);
        }
    }
    useEffect(() => {
        const controller = new AbortController();
        getQuestions(controller.signal)
            .then((response) => {
                setQuestionList(response.data.results || [])
            });

        return () => {
            controller.abort();
        }
    }, [])

    return (
        <Card style={styles.card}>
            <Card.Title title={'Pytanie1'} style={styles.hdn}/>

            <Card.Content style={styles.content}>
                <Text
                    style={styles.question}
                >
                    Python python python python python python python python python python</Text>
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
                        style={styles.answerCard}
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
                        <CountdownCircleTimer
                        isPlaying
                        duration={7}
                        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                        colorsTime={[7, 5, 2, 0]}
                        size={80}
                    >
                        {({remainingTime}) => <Text>{remainingTime}</Text>}
                    </CountdownCircleTimer>
                    </View>
                </View>
            </Card.Actions>
        </Card>
    );
}

const styles = StyleSheet.create({
    answer: {
        margin: 10,
    },
    responses_container: {
        height: '67%',
        flex: 1,
        backgroundColor: "white",
        justifyContent: "space-between",
    },
    container: {
        backgroundColor: "white",
        justifyContent: "space-around"
    },
    content: {
        marginBottom: 30
    },
    answerCard: {
        margin: 5
    },
    card: {
        marginLeft: 20,
        marginRight: 20
    },
    question: {
        marginBottom: 20
    },
    hdn: {
    },
    countdown: {
        margin: 15,
        alignItems: "center"
    }
})

export default Question;
