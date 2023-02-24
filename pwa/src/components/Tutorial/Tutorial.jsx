import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    InputAdornment,
    OutlinedInput,
    styled,
    Typography
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";


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


function Tutorial() {
    return (

        <Container sx={{
            marginTop: '20px',
            marginBottom: '10px',
            display: 'flex',
            flexDirection: 'column',
            height: '80vh',
            maxWidth: '600px',
            minHeight: '10vh'
        }}>

            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '30px'}}>
                <Typography sx={{fontSize: '16px'}}>
                    {'(tu bedzie tutorial)'}
                </Typography>
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '30px'}}>
                <ButtonWrapper>
                    <ButtonCta>Graj!</ButtonCta>
                    <TextSmall>Graj ze sztuczną inteligencją.</TextSmall>
                </ButtonWrapper>
            </Box>


        </Container>
    );
}

export default Tutorial;