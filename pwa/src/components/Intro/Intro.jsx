import {
    Button,
    FilledInput,
    FormControl,
    InputLabel,
    ThemeProvider
} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import LoginIcon from '@mui/icons-material/Login';
import {styled} from '@mui/material/styles';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import CachedIcon from '@mui/icons-material/Cached';
import {adjectives, animals, uniqueNamesGenerator} from "unique-names-generator";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

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

    function generateRandomName() {
        const randomName = uniqueNamesGenerator({dictionaries: [adjectives, animals], length: 2});
        setGuestNick(randomName);
    }

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

                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'nowrap',

                    }}>
                        <FormControl fullWidth variant="filled" color='primary'>
                            <InputLabel htmlFor="filled-adornment-amount">Choose a guest name to play as</InputLabel>
                            <FilledInput
                                value={guestNick}
                                onChange={(event) => setGuestNick(event.target.value)}
                            />
                        </FormControl>
                        <Button variant="contained" onClick={generateRandomName}>
                            <CachedIcon/>
                        </Button>
                    </div>

                    <Button variant="contained" style={{minWidth: '100%', borderRadius: '5%', margin: '5% 1% 0 1%'}}>
                        <Typography>Play as a guest</Typography>
                    </Button>

                    <Link to={'/login'} style={{minWidth: '100%', textDecoration: 'none'}}>
                        <ColorButton style={{minWidth: '100%', borderRadius: '5%', margin: '20% 0 0 0'}}>
                            <LoginIcon/>
                            <Typography>Login</Typography>
                        </ColorButton>
                    </Link>

                    <Link to={'/register'} style={{minWidth: '100%', textDecoration: 'none'}}>
                        <ColorButton style={{minWidth: '100%', borderRadius: '5%', margin: '5% 0 0 0'}}>
                            <VpnKeyIcon/>
                            <Typography>SignUp</Typography>
                        </ColorButton>
                    </Link>
                </div>
            </div>
        </ThemeProvider>
    </>)
}

export default Intro;