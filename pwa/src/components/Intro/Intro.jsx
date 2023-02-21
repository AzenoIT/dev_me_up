import {
    Button,
    FilledInput,
    FormControl,
    InputAdornment,
    InputLabel,
    TextField,
    ThemeProvider
} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import LoginIcon from '@mui/icons-material/Login';
import {styled} from '@mui/material/styles';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import {adjectives, animals, colors, uniqueNamesGenerator} from "unique-names-generator";
import {useEffect, useState} from "react";

const inputTheme = createTheme({
    palette: {
        mode: 'light', primary: {
            main: '#000000',
        },
    },
});

const ColorButton = styled(Button)(({theme}) => ({
    color: theme.palette.getContrastText('#674fa2'), backgroundColor: '#674fa2', '&:hover': {
        backgroundColor: '#674fa2',
    },
}));


function Intro() {
    const [guestNick, setGuestNick] = useState('');

    useEffect(() => {
        const randomName = uniqueNamesGenerator({dictionaries: [adjectives, animals], length: 2});
        if (!guestNick) {
            setGuestNick(randomName);
        }
    }, []);

    return (<>
        <ThemeProvider theme={inputTheme}>
            <div className='content-wrapper'
                 style={{
                     maxWidth: '90%',
                     margin: 'auto',
                     marginTop: '50%',
                 }}>
                <div className='button-wrapper'
                     style={{
                         marginTop: '2%',
                         minWidth: '100%',
                         display: 'flex',
                         flexDirection: 'column',
                         alignItems: 'center',
                         justifyContent: 'center',
                     }}>

                    <FormControl fullWidth variant="filled" color='primary'
                                 style={{maxWidth: '90%', marginBottom: '3%'}}>
                        <InputLabel htmlFor="filled-adornment-amount">Choose a guest name to play as</InputLabel>
                        <FilledInput
                            value={guestNick}
                            onChange={(event) => setGuestNick(event.target.value)}
                        />
                    </FormControl>

                    <Button
                        variant="contained"
                        style={{minWidth: '100%', borderRadius: '5%', margin: '1% 1% 0 1%'}}
                    >
                        <Typography>Play as a guest</Typography>
                    </Button>

                    <ColorButton
                        style={{minWidth: '100%', borderRadius: '5%', margin: '20% 1% 0 1%'}}
                    >
                        <LoginIcon/>
                        <Typography>Login</Typography>
                    </ColorButton>

                    <ColorButton
                        style={{minWidth: '100%', borderRadius: '5%', margin: '1% 1% 0 1%'}}
                    >
                        <VpnKeyIcon/>
                        <Typography>SignUp</Typography>
                    </ColorButton>
                </div>
            </div>
        </ThemeProvider>
    </>)
}

export default Intro;