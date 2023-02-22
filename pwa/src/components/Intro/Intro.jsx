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
import {Link, useNavigate} from "react-router-dom";

import {useLocalStorage} from "../../hooks/useLocalStorage";

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
            console.log('Nie ma guest nicka, generuję')
        }
        console.log('Jest guest nick, nie generuję')
    }, []);

    useEffect(() => {
        if (Object.keys(profile).length > 2) {
            setProfile({...profile, username: guestNick});
            console.log('set Profile na {...profile, username}')
        }
    }, [guestNick])

    function generateRandomName() {
        const randomName = uniqueNamesGenerator({dictionaries: [adjectives, animals], length: 2});
        setGuestNick(randomName);
        // setProfile({...profile, username: randomName})
    }

    function handleGuestStart() {
        navigate('/profile');
    }

    return (<>
        <ThemeProvider theme={inputTheme}>
            <div className='content-wrapper'
                 style={{
                     maxWidth: '90%',
                     margin: 'auto',
                     marginTop: '20vh',
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

                    <Link to={'/profile'} style={{minWidth: '100%', textDecoration: 'none'}}>
                        <Button variant="contained" onClick={handleGuestStart}
                                style={{minWidth: '100%', borderRadius: '5%', margin: '5vh 1% 0 1%'}}>
                            <Typography>Play as a guest</Typography>
                        </Button>
                    </Link>

                    <Link to={'/login'} style={{minWidth: '100%', textDecoration: 'none'}}>
                        <ColorButton style={{minWidth: '100%', borderRadius: '5%', margin: '15vh 0 0 0'}}>
                            <LoginIcon/>
                            <Typography>Login</Typography>
                        </ColorButton>
                    </Link>

                    <Link to={'/register'} style={{minWidth: '100%', textDecoration: 'none'}}>
                        <ColorButton style={{minWidth: '100%', borderRadius: '5%', margin: '5vh 0 0 0'}}>
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