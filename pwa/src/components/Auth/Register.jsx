import {useContext, useState} from "react";
import {Box, Button, Container, Stack, styled, TextField, Typography} from "@mui/material";
import NavigateContext from "../../context/NavigateProvider";
import logo from "../../images/logos/dev-me-up.svg";

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useContext(NavigateContext);

    async function handleRegistration() {
        const controller = new AbortController();
        const signal = controller.signal

        const response = await fetch('http://localhost:8000/api/v1/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            }),
            signal
        })

        if (response.status !== 201) {
            console.error('Something went wrong when creating new user');
            console.error(response);
        } else {
            console.log('Created')
        }

        navigate('/login');
        return () => {
            controller.abort();
        }
    }

    return (
        <>
            <Box sx={{backgroundColor: "#F6F6F6"}}>
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '90vh',
                        maxWidth: '400px',
                        paddingTop: "50px",
                    }}>
                    <Box sx={{width: "150px", height: "150px", margin: "0 auto"}}
                         component="img"
                         alt='Dev me up logo'
                         src={logo}/>

                    <Typography style={{margin: '15px auto 0 auto'}}>Zarejestruj się</Typography>


                    <Stack alignItems='center' sx={{margin: "0 auto", marginTop: "50px"}}>
                        <Box sx={{marginBottom: "20px"}}>
                            <TextField id="outlined-basic" label="Nazwa użytkownika" variant="outlined"
                                       placeholder={'Nazwa użytkownika'}
                                       value={username}
                                       onChange={(event) => setUsername(event.target.value)}
                                       sx={{width: "100%", marginBottom: "20px"}}/>

                            <TextField id="outlined-basic" label="E-mail" variant="outlined"
                                       placeholder={'E-mail'}
                                       value={email}
                                       onChange={(event) => setEmail(event.target.value)}
                                       sx={{width: "100%", marginBottom: "20px"}}/>


                            <TextField placeholder={'Hasło'}
                                       value={password}
                                       onChange={(event) => setPassword(event.target.value)} type="password"
                                       id="outlined-basic" label="Hasło" variant="outlined" sx={{width: "100%"}}/>
                        </Box>
                        <ButtonWrapper sx={{marginTop: "5px", marginBottom: "45px"}}>
                            <ButtonCta onClick={handleRegistration}>Zarejestruj się</ButtonCta>
                        </ButtonWrapper>
                    </Stack>
                </Container>
            </Box>
        </>
)}


const ButtonStyled = styled(Button)({
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


export default Register;
