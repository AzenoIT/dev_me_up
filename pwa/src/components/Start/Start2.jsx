import '../../styles/main.scss'
import logo from "../../images/logos/dev-me-up.svg"
import {Button, Container} from "@mui/material";
import {styled} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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


function Start2() {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
                gap: '50px',
                height: '95vh',
                maxWidth: '800px'
            }}>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '20px'}}>
                <img alt='dev-me-up' src={logo}/>
            </Box>
            <Box sx={{height: '40vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <ButtonBox sx={{gap: '5px'}}>
                    <ButtonStart variant="contained" sx={{minWidth: '100%'}}>Zaproś znajomego</ButtonStart>
                    <Typography style={{margin: '0', fontSize: '12px'}}>Wyzwij znajomego na pojedynek.</Typography>
                </ButtonBox>
                <ButtonBox sx={{gap: '5px'}}>
                    <ButtonStart variant="contained" sx={{minWidth: '100%'}}>Graj</ButtonStart>
                    <p style={{margin: '0', fontSize: '12px'}}>Szybka gra. Dopasujemy przeciwnika do ciebie.</p>
                </ButtonBox>
                <ButtonBox sx={{gap: '5px'}}>
                    <ButtonStart variant="contained" sx={{minWidth: '100%'}}>Graj ze znajomym</ButtonStart>
                    <p style={{margin: '0', fontSize: '12px'}}>Wybierz z kim chcesz grać.</p>
                </ButtonBox>
                <ButtonBox sx={{gap: '5px'}}>
                    <ButtonStart variant="contained" sx={{minWidth: '100%'}}>Czwarty przycisk</ButtonStart>
                    <p style={{margin: '0', fontSize: '12px'}}>dupa</p>
                </ButtonBox>
            </Box>
        </Container>
    );
}

export default Start2;