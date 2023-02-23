import {useContext, useState} from "react";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import AuthContext from "../../context/AuthProvider";
import {Button, Container, TextField, styled, Box, Typography, Stack, Divider, Chip} from "@mui/material";
import logo from "../../images/logos/dev-me-up.svg"


function Login() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const setTokens = useLocalStorage('tokens', {})[1];
    const {setAuth} = useContext(AuthContext);

    async function handleLogin() {
        const response = await fetch('http://localhost:8000/api/v1/token/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })

        const token = await response.json();
        setTokens({access: token.access, refresh: token.refresh});
        setAuth(token);
    }


    return (
        <>
            {/* <div>
                <h2>Login</h2>

                <input
                    type="text" placeholder={'email'}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    type="password" placeholder={'password'}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />

                <button type='button' onClick={handleLogin}>Login</button>
            </div> */}

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

                <Stack alignItems='center' sx={{margin: "0 auto", marginTop: "50px"}}>
                    <Box sx={{marginBottom: "20px"}}>
                        <TextField  id="outlined-basic" label="Nazwa użytkownika" variant="outlined" 
                                    placeholder={'email'}
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)} 
                                    sx={{width: "100%", marginBottom: "20px"}}/>

                        <TextField  placeholder={'password'}
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)} type="password" id="outlined-basic" label="Hasło" variant="outlined" sx={{width: "100%"}}/>
                    </Box>
                    <ButtonWrapper sx={{marginTop: "5px", marginBottom: "45px"}} >
                        <ButtonCta onClick={handleLogin}>Zaloguj się</ButtonCta>
                    </ButtonWrapper>
                </Stack>
            </Container>
        </Box>
        </>
    )
}

const ButtonStyled = styled(Button) ({
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

export default Login;