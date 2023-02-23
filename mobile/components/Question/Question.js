import {Card, Divider, Text, useTheme} from 'react-native-paper';
import {StyleSheet, View} from "react-native";
import {useEffect, useState} from "react";
import callApi from "../../helpers/api";
import QuestionAnswers from "./QuestionAnswers";
import QuestionReveal from "./QuestionReveal";
import {getData, storeData} from "../../helpers/storage_helpers";
import {useNavigation} from "@react-navigation/native";
import Avatars from "./Avatars";

function Question() {
    const theme = useTheme();
    const [reveal, setReveal] = useState(false);
    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState([]);
    const [questionTime, setQuestionTime] = useState(30);
    const [isLoading, setIsLoading] = useState(true);
    const [usersPick, setUsersPick] = useState(null);
    const [correctPick, setCorrectPick] = useState(null);
    const [opponentID, setOpponentID] = useState(undefined);

    useEffect(() => {
        callApi({endpoint: `/questions/`})
            .then((response) => {
                setQuestion(response[1][1][0]["question"]);
                setAnswers(response[1][1][0]["answers"]);
                setQuestionTime(20);
                setIsLoading(false);
            }).catch((error) => {
        });

    }, [])

    const navigation = useNavigation();
    const styles = StyleSheet.create({
        answer: {
            marginTop: 20,
            margin: 20
        },
        correctAnswer: {
            marginTop: 20,
            marginBottom: 20,
            backgroundColor: 'green'
        },
        wrongAnswer: {
            marginTop: 20,
            marginBottom: 20,
            backgroundColor: theme.colors.error
        },
        main_container: {},
        responses_container: {
            margin: 20,
        },
        container: {},
        content: {
            margin: 20,
            backgroundColor: 'black'
        },
        answerCard: {
            marginTop: 20,
            marginBottom: 20,
        },
        card: {},
        question_container: {
            margin: 20,
            minHeight: 100
        },
        hdl: {
            color: 'red',
            fontFamily: 'monospace'
        },
        question: {
            color: 'green',
            fontFamily: 'monospace'
        },
        countdown: {
            alignItems: "center"
        },
        btn_container: {
            marginLeft: 20,
            marginRight: 20,
            flexDirection: "row",
            justifyContent: "space-between"
        },
        btn: {
            paddingLeft: 10,
            paddingRight: 10
        }
    });


    async function handleRevealAnswer(answerID) {
        callApi({endpoint: `/questions/`})
            .then((response) => {

                response[0][1][0]["answers"].forEach((answer, i) => {
                    if (answer.isCorrect === 'true') {
                        setCorrectPick(i);
                    }
                });
                setUsersPick(answerID);
                setReveal(true);

            }).catch(console.log);
    }


    return (
        <View style={styles.card}>

            <Avatars />

            <Card style={styles.content}>
                <View
                    style={styles.question_container}
                >
                    <Text variant="bodyLarge" style={styles.hdl}>Pytanie:</Text>
                    <Text variant="bodyLarge" style={styles.question}>{`\n${question}`}</Text>
                </View>
            </Card>
            <View style={styles.container}>


                {!reveal ? (
                    <QuestionAnswers
                        question={question}
                        answers={answers}
                        reveal={reveal}
                        setReveal={setReveal}
                        styles={styles}
                        handleRevealAnswer={handleRevealAnswer}
                        isLoading={isLoading}
                        questionTime={questionTime}
                    />
                ) : (
                    <QuestionReveal
                        question={question}
                        answers={answers}
                        reveal={reveal}
                        setReveal={setReveal}
                        styles={styles}
                        isLoading={isLoading}
                        navigation={navigation}
                        usersPick={usersPick}
                        correctPick={correctPick}
                    />
                )}

            </View>
        </View>
    );
}

export default Question;
