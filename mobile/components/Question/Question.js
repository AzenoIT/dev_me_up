import {Card, Divider, Text, useTheme} from 'react-native-paper';
import {StyleSheet} from "react-native";
import {useEffect, useState} from "react";
import callApi from "../../helpers/api";
import QuestionAnswers from "./QuestionAnswers";
import QuestionReveal from "./QuestionReveal";
import {getData, storeData} from "../../helpers/storage_helpers";
import {useNavigation} from "@react-navigation/native";

const totalTime = 5;

function Question({score, count, setIsOver}) {
    const theme = useTheme();
    const [reveal, setReveal] = useState(false);
    const [qna, setQna] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        callApi({endpoint: `/questions/`})
            .then((response) => {
                setQna(response[0][1][0]);
                setIsLoading(false);
            }).catch((error) => {
        });
        handleGetData().catch(console.log);
        handleGetData().catch(console.log);

        return () => {
            count.current = count.current + 1;
            handleStoreData().catch(console.log);
        }
    }, [])

    const navigation = useNavigation();
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
    });

    async function handleGetData() {
        let storageScore = await getData('score');
        let storageCount = await getData('count');

        if (score !== 0 && count !== 0) {
            storageScore = score.current;
            storageCount = count.current;
        } else if (!!storageScore || !!storageCount) {
            count.current = storageCount;
            score.current = storageScore;
        }

    }

    async function handleStoreData() {
        await storeData('score', score.current);
        await storeData('count', count.current);
    }


    async function handleAnswer(answerID) {
        callApi({endpoint: `/questions/`})
            .then((response) => {
                const isCorrect = (response[0][1][0]["answers"][answerID].isCorrect === 'true')

                if (isCorrect) {
                    score.current = score.current + 1;
                }
                setReveal(true);
            }).catch((error) => {
        });
    }


    return (
        <Card style={styles.card}>
            <Card.Title title={`Pytanie ${count.current + 1}`} style={styles.hdn}/>

            <Card.Content style={styles.content}>
                <Text
                    style={styles.question}
                >
                    {qna[["question"]]}
                    {console.log("score: " + score.current + ", count: " + count.current + " | correct: " + qna)}
                </Text>
                <Divider/>
            </Card.Content>
            <Card.Actions style={styles.container}>


                {!reveal ? (
                    <QuestionAnswers
                        qna={qna}
                        reveal={reveal}
                        setReveal={setReveal}
                        styles={styles}
                        handleAnswer={handleAnswer}
                        isLoading={isLoading}
                        totalTime={totalTime}
                    />
                ) : (
                    <QuestionReveal
                        qna={qna}
                        reveal={reveal}
                        setReveal={setReveal}
                        styles={styles}
                        handleAnswer={handleAnswer}
                        isLoading={isLoading}
                        totalTime={totalTime}
                        navigation={navigation}
                        setIsOver={setIsOver}
                    />
                )}


            </Card.Actions>
        </Card>
    );
}


export default Question;
