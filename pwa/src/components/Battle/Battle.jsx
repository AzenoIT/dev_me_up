import '../../styles/main.scss';
import avatar from '../../images/avatar/avatar1.svg';
import {Button, Container, Avatar, Stack, Box, Typography, styled} from "@mui/material";
import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import NavigateContext from "../../context/NavigateProvider";


const arrQuestions = [
    {
        id: '1',
        title: 'Pytanie 1',
        question: "Jaka jest różnia między listą a tuplą w Pythonie?"
    }
]

const arrAnswers = [
    {
        id: '1',
        title: 'Odpowiedź A',
        answer: "Lista jest modyfikowalna, podczas gdy tupla jest niemodyfikowalna"
    },
    {
        id: '2',
        title: 'Odpowiedź B',
        answer: "Lista może zawierać tylko elementy tego samego typu, podczas gdy tupla może zawierać elementy różnych typów"
    },
    {
        id: '3',
        title: 'Odpowiedź C',
        answer: "Lista może być zagnieżdżona, podczas gdy tupla nie może być zagnieżdżona"
    },
    {
        id: '4',
        title: 'Odpowiedź D',
        answer: "Nie ma żadnej różnicy między listą a tuplą"
    },
]

const MainContainer = styled(Stack)({
    minHeight: '100vh',
    maxWidth: '600px',
    margin: "0 auto",
    direction: "column",
    alignItems: "center",
})

const AvatarProfile = styled(Avatar)({
    width: '50px',
    height: "50px",
    rounded: 'full',
    margin: '0 15px 0 15px'
})

const QuestionBox = styled(Box)({
    width: '95%',
    maxWidth: '450px',
    minHeight: "100px",
    background: '#424141',
    boxShadow: 'inset 0px 4px 22px 4px rgba(0, 0, 0, 0.6)',
    rounded: '16px',
    padding: '20px',
    borderRadius: '16px',
})

const QuestionTitle = styled(Typography)({
    color: '#E30C0C',
    fontSize: '24px',
    lineHeight: '40px',
    fontWeight: '400',
})

const Question = styled(Typography)({
    color: '#6BE30C',
    fontSize: '20px',
    lineHeight: '22px',
    fontWeight: '400',
    marginTop: '20px'
})

const Timmer = styled(Box)({
    width: '50px',
    height: '50px',
    borderRadius: '100%',
    margin: '15px 0',
    background: 'black'
})

const AnswerBox = styled(Box)({
    width: '85%',
    maxWidth: '450px',
    backgroundImage: 'linear-gradient(0deg, rgba(103, 80, 164, 0.05), rgba(103, 80, 164, 0.05))',
    boxShadow: 'inset 0px 4px 22px 4px rgba(0, 0, 0, 0.6)',
    rounded: '16px',
    padding: '20px',
    borderRadius: '16px',
    cursor: 'pointer',
    marginTop: '20px'
})

const AnswerTitle = styled(Typography)({
    color: '#E30C0C',
    fontSize: '20px',
    lineHeight: '40px',
    fontWeight: '400',
})

const Answer = styled(Typography)({
    color: '#1C1B1F',
    fontSize: '18px',
    lineHeight: '22px',
    fontWeight: '400',
})


const ButtonCta = styled(Button)({
    textAlign: 'center',
    borderRadius: '16px',
    color: '#6750A4',
    outlineColor: '#6750A4',
    textTransform: 'none',
    width: '330px',
    height: '40px',
    backgroundImage: "linear-gradient(0deg, rgba(103, 80, 164, 0.05), rgba(103, 80, 164, 0.05))",
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
    '&:hover': {
        backgroundColor: '#6750A4',
        color: '#FFFBFE'
    }
})

const TextSmall = styled(Typography)({
    fontSize: '12px',
    textAlign: "center",
    marginTop: '4px',
})

const ButtonWrapper = styled(Box)({
    margin: "30px"
})


function Battle() {
    const [chosen, setChosen] = useState([]);
    const navigate = useContext(NavigateContext);

    function handleAnswer(item, idx) {
        if (chosen.includes(idx)) {
            return setChosen(chosen.filter((el) => el !== idx));
        }

        return setChosen([idx]);
    }



    function handleNavigate(url) {
        navigate(url);
    }

    return (
        <Container
            style={{
                display: 'flex',
                flexDirection: 'column',
                // minHeight: '90vh',
                // maxHeight: '100vh',
                maxWidth: '600px',

            }}>
            <MainContainer alignItems='center' >
                <Stack direction='row' alignItems='center'>
                    <AvatarProfile src={avatar}/>
                    <p>vs</p>
                    <AvatarProfile src={avatar}/>
                    <Timmer/>
                </Stack>

                <QuestionBox>
                    <QuestionTitle>{arrQuestions[0].title}</QuestionTitle>
                    <Question>{arrQuestions[0].question}</Question>
                </QuestionBox>

                {arrAnswers.map((item, idx) => (
                    <AnswerBox key={idx} onClick={() => handleAnswer(item, idx)}
                               style={{backgroundColor: chosen.includes(idx) ? '#b4b4b4' : ''}}>
                        <AnswerTitle>{item.title}</AnswerTitle>
                        <Answer>{item.answer}</Answer>
                    </AnswerBox>
                ))}

                {chosen.length ?
                    (
                        <div style={{margin: '15px 0 0 15px'}}>
                            <ButtonCta onClick={() => handleNavigate('/summary')}>Przejdź dalej</ButtonCta>
                            <TextSmall>Jeśli wybrałeś już kategorie, których chcesz się uczyć</TextSmall>
                        </div>
                    ) :
                    ''}
            </MainContainer>
        </Container>
    );
}


export default Battle;