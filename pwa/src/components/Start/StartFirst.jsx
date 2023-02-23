import '../../styles/main.scss'
import logo from "../../images/logos/dev-me-up.svg"
import {Button, Container, TextField} from "@mui/material";
import {styled} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ButtonCta = styled(Button) ({
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

const TextSmall = styled(Typography) ({
    fontSize: '12px',
    textAlign: "center",
    marginTop: '4px',
})

const ButtonWrapper = styled(Box) ({
    marginBottom: "30px"
})

function Start() {
    return (
        <Box sx={{backgroundColor: "#F6F6F6"}}>
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                maxWidth: '600px',
                paddingTop: "50px",
            }}>
                <Box sx={{width: "150px", height: "150px", margin: "0 auto"}}
                component="img" 
                alt='Dev me up logo' 
                src={logo}/>

                <Box sx={{margin: "0 auto", marginTop: "50px"}}>
                    <TextField id="outlined-basic" label="Nazwa użytkownika" variant="outlined" sx={{width: "100%"}}/>
                    <ButtonWrapper sx={{marginTop: "20px", marginBottom: "75px"}}>
                        <ButtonCta>Zaczynamy!</ButtonCta>
                        <TextSmall>Zagraj jako gość.</TextSmall>
                    </ButtonWrapper>
                        <ButtonCta>Zaloguj się</ButtonCta>
                    <ButtonWrapper sx={{marginTop: "20px"}}>
                        <ButtonCta>Załóż konto</ButtonCta>
                    </ButtonWrapper>
                </Box>
        </Container>
        </Box>
    );
}

export default Start;
