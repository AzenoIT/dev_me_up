import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {adjectives, animals, uniqueNamesGenerator} from "unique-names-generator";
import {Button, Container, TextField, styled} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import '../../styles/main.scss'
import logo from "../../images/logos/dev-me-up.svg"
import {useLocalStorage} from "../../hooks/useLocalStorage";


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
    marginBottom: "30px"
})

function Start() {
    const [guestNick, setGuestNick] = useState(useLocalStorage('profile')[0]?.username || '');
    const [profile, setProfile] = useLocalStorage('profile', {
        'id': 1,
        'username': 'Kolaborant 2137',
        'score': 2137,
        'badges': [
            {
                "id": 1,
                "level": 1,
                "amount": 313
            },
            {
                "id": 2,
                "level": 2,
                "amount": 33
            },
            {
                "id": 3,
                "level": 3,
                "amount": 0
            }
        ],
        'technologies': [
            {
                "id": 1,
                "name": "python",
                "level": "guru"
            },
            {
                "id": 2,
                "name": "html",
                "level": "junior"
            }
        ],
        'isSearchVisible': true,
        'isRankingVisible': true,
        'theme': true,
        'avatar': 'link.jpg'
    });
    const navigate = useNavigate();


    useEffect(() => {
        if (!guestNick) {
            return generateRandomName()
        }
    }, []);

    useEffect(() => {
        setProfile({...profile, username: guestNick});
    }, [guestNick])

    function generateRandomName() {
        const randomName = uniqueNamesGenerator({dictionaries: [adjectives, animals], length: 2});
        setGuestNick(randomName);
    }

    function checkIfEmpty(event) {
        if (!event.target.value) {
            generateRandomName();
        }
    }

    function handleNavigate(path) {
        navigate(path);
    }

    return (
        <Box sx={{backgroundColor: "#F6F6F6"}}>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '90vh',
                    maxWidth: '600px',
                    paddingTop: "50px",
                }}>
                <Box sx={{width: "150px", height: "150px", margin: "0 auto"}}
                     component="img"
                     alt='Dev me up logo'
                     src={logo}/>

                <Box sx={{margin: "0 auto", marginTop: "50px"}}>
                    <TextField id="outlined-basic" label="Nazwa użytkownika" variant="outlined" sx={{width: "100%"}}
                               onChange={(event) => setGuestNick(event.target.value)}
                               onBlur={(event) => {checkIfEmpty(event)}}
                               value={guestNick}
                    />
                    <ButtonWrapper sx={{marginTop: "5px", marginBottom: "45px"}}>
                        <ButtonCta onClick={generateRandomName}>Losuj nazwę użytkownika</ButtonCta>
                    </ButtonWrapper>

                    <ButtonWrapper sx={{marginTop: "20px", marginBottom: "75px"}}>
                        <ButtonCta onClick={() => {handleNavigate('/profile')}}>Zaczynamy!</ButtonCta>
                        <TextSmall>Zagraj jako gość.</TextSmall>
                    </ButtonWrapper>

                    <ButtonCta onClick={() => {handleNavigate('/login')}}>Zaloguj się</ButtonCta>

                    <ButtonWrapper sx={{marginTop: "20px"}}>
                        <ButtonCta onClick={() => {handleNavigate('/register')}}>Załóż konto</ButtonCta>
                    </ButtonWrapper>
                </Box>
            </Container>
        </Box>
    );
}

export default Start;
