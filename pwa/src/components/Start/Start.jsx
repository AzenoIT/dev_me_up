import '../../styles/main.scss'
import logo from "../../images/logos/dev-me-up.svg"
import {Button, Container} from "@mui/material";
import {styled} from "@mui/material";
import Box from "@mui/material/Box";
import Google from "../../images/logos/Google.svg"
import Facebook from "../../images/logos/Facebook.svg"
import Github from "../../images/logos/Git.svg"
import JWT from "../../images/logos/JWT.svg"
import LinkedIn from "../../images/logos/Linkedin.svg"

const ButtonStart = styled(Button)({
    borderRadius: '16px',
    backgroundColor: '#FFFBFE',
    color: '#6750A4',
    outlineColor: '#6750A4',
    height: '40px',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#6750A4',
        color: '#FFFBFE'
    }
})

const ButtonBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
})

function Start() {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
                justifyContent: 'space-between',
                height: '95vh',
                maxWidth: '800px'
            }}>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '20px'}}>
                <img alt='dev-me-up' src={logo}/>
            </Box>
            <ButtonBox sx={{gap: '5px'}}>
                <ButtonStart variant="contained" sx={{maxWidth: '50%'}}>Szybki start GRY</ButtonStart>
                <p style={{margin: '0'}}>Grasz jako gość.</p>
            </ButtonBox>
            <ButtonBox sx={{gap: '25px'}}>
                <ButtonStart sx={{minWidth: '100%'}} variant="contained">Logowanie</ButtonStart>
                <ButtonStart sx={{minWidth: '100%'}} variant="contained">Rejestracja</ButtonStart>
            </ButtonBox>
            <ButtonBox sx={{gap: '17px'}}>
                <ButtonStart variant="contained" sx={{minWidth: '100%'}}>
                    <img src={Google} alt=""/>
                    <p>Logowanie przez Google</p>
                </ButtonStart>
                <ButtonStart variant="contained" sx={{minWidth: '100%'}}><img src={Facebook} alt=""/>
                    Logowanie przez
                    Facebook</ButtonStart>
                <ButtonStart variant="contained" sx={{minWidth: '100%'}}><img src={LinkedIn} alt=""/>
                    Logowanie przez
                    LinkedIn</ButtonStart>
                <ButtonStart variant="contained" sx={{minWidth: '100%'}}><img src={Github} alt=""/>
                    Logowanie przez
                    GitHub</ButtonStart>
                <ButtonStart variant="contained" sx={{minWidth: '100%'}}><img src={JWT} alt=""/>
                    Logowanie przez
                    JWT</ButtonStart>
            </ButtonBox>
        </Container>
    );
}

export default Start;