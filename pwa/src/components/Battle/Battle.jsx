import '../../styles/main.scss';
import avatar from '../../images/avatar/avatar1.svg';
import {Button, Container, Avatar, Stack, Box, Typography, styled} from "@mui/material";
import TimerQA from '../Timer/TimerQA';


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


function Battle() {
    return (
    <Box sx={{backgroundColor: "#F6F6F6", padding: "40px"}}>
        <MainContainer alignItems='center' >

        <Stack direction='row' alignItems='center'>
            <AvatarProfile src={avatar}/>
            <p>vs</p>
            <AvatarProfile src={avatar}/>
        </Stack>
        
        <QuestionBox>
            <QuestionTitle>{arrQuestions[0].title}</QuestionTitle>
            <Question>{arrQuestions[0].question}</Question>
        </QuestionBox>

        <Timmer />
        {/* <TimerQA /> */}


        {arrAnswers.map((item, idx) => (
            <AnswerBox key={idx}>
                <AnswerTitle>{item.title}</AnswerTitle>
                <Answer>{item.answer}</Answer>
            </AnswerBox>
        ))}
        </MainContainer>    
    </Box>
    );
}

const MainContainer = styled(Stack) ({
    minHeight: '100vh', 
    maxWidth: '600px', 
    margin: "0 auto",
    direction: "column",
    alignItems: "center",
})

const AvatarProfile = styled(Avatar) ({
    width: '80px',
    height: "80px",
    rounded: 'full',
    margin: 20
})

const QuestionBox = styled(Box) ({
    width: '100%',
    background: '#424141',
    minHeight: "120px",
    boxShadow: 'inset 0px 4px 22px 4px rgba(0, 0, 0, 0.6)',
    rounded: '16px',
    padding: '20px',
    borderRadius: '16px',
})

const QuestionTitle = styled(Typography) ({
    color: '#E30C0C',
    fontSize: '32px',
    lineHeight: '40px',
    fontWeight: '400',
})

const Question = styled(Typography) ({
    color: '#6BE30C',
    fontSize: '20px',
    lineHeight: '22px',
    fontWeight: '400',
    marginTop: '20px'
})

const Timmer = styled(Box) ({
    width: '100px',
    height: '100px',
    borderRadius: '100%',
    margin: '35px 0',
    background: 'black'
})

const AnswerBox = styled(Box) ({
    width: '100%',
    backgroundImage: 'linear-gradient(0deg, rgba(103, 80, 164, 0.05), rgba(103, 80, 164, 0.05))',
    minHeight: "120px",
    boxShadow: 'inset 0px 4px 22px 4px rgba(0, 0, 0, 0.6)',
    rounded: '16px',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '16px'
})

const AnswerTitle = styled(Typography) ({
    color: '#E30C0C',
    fontSize: '32px',
    lineHeight: '40px',
    fontWeight: '400',
})

const Answer = styled(Typography) ({
    color: '#1C1B1F',
    fontSize: '20px',
    lineHeight: '22px',
    fontWeight: '400',
    marginTop: '20px'
})

export default Battle;