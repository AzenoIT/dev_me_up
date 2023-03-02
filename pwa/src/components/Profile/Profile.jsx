import {useEffect, useState, useContext} from "react";
import {Avatar, Button, Card, Container, Stack, styled, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import NavigateContext from "../../context/NavigateProvider";
import avatar from '../../images/avatar/avatar1.svg';
import AwardGold from '../../images/badges/AwardGold.svg';
import AwardGold2 from '../../images/badges/AwardGold2.svg';
import AwardSilver from '../../images/badges/AwardSilver.svg';

function Profile() {
    const [profileState, setProfileState] = useState(useLocalStorage('profile', '')[0] || '');
    const setProfileLocalStorage = useLocalStorage('profile', '')[1];
    const handleNavigate = useContext(NavigateContext);

    useEffect(() => {
        if (!profileState) {
            handleNavigate('/startfirst');
        }
    }, [])

    function handleUserNameChange(event) {
        setProfileState({...profileState, username: event.target.value});
        setProfileLocalStorage({...profileState, username: event.target.value});
    }

    function handleCheckBoxes(key, checked) {
        const updatedProfile = {
            ...profileState,
            [key]: checked
        }

        setProfileLocalStorage(updatedProfile);
        setProfileState(updatedProfile);
    }

    return (
        <Container>
            <Stack direction='column' alignItems='center'>
                <AvatarProfile src={avatar}/>
                <TextField id="outlined-basic" label='username' variant="outlined" value={profileState?.username}
                           onChange={(event) => handleUserNameChange(event)}/>
                <Box>
                    <TextPoints>{profileState?.score}</TextPoints>
                    <TextLittle>Twoje punkty</TextLittle>
                </Box>
                <BadgesContainer>
                    <BadgesBox>
                        <img src={AwardGold} alt=""/>
                        <img src={AwardGold2} alt=""/>
                        <img src={AwardSilver} alt=""/>
                    </BadgesBox>
                    <TextLittle>Twoje plakietki</TextLittle>
                </BadgesContainer>
                <ButtonProfile variant="contained" sx={{px: '24px', py: '10px'}}>
                    Twoje statystyki
                </ButtonProfile>
                <ButtonProfile variant="contained" sx={{px: '24px', py: '10px'}}
                               onClick={() => handleNavigate('/category')}>
                    Wybierz technologię
                </ButtonProfile>
                <Box>
                    <PreferencesCard>
                        <Box>
                            <FormGroup>
                                <FormControlLabel
                                    control={<IOSSwitch sx={{m: 1}}/>}
                                    checked={profileState?.isSearchVisible}
                                    onChange={(event, checked) => {
                                        handleCheckBoxes('isSearchVisible', checked)
                                    }}
                                />
                            </FormGroup>
                        </Box>
                        <Box>
                            <TabHeadline variant='title1'>Czy chcesz być wyszukiwany?</TabHeadline>
                            <TabSubheadline variant='subtitle2'>Szybciej zagrasz ze znajomymi</TabSubheadline>
                        </Box>
                    </PreferencesCard>
                    <PreferencesCard>
                        <Box>
                            <FormGroup>
                                <FormControlLabel
                                    control={<IOSSwitch sx={{m: 1}}/>}
                                    checked={profileState?.isRankingVisible}
                                    onChange={(event, checked) => {
                                        handleCheckBoxes('isRankingVisible', checked)
                                    }}
                                />
                            </FormGroup>
                        </Box>
                        <Box>
                            <TabHeadline variant='title1'>Ranking</TabHeadline>
                            <TabSubheadline variant='subtitle2'>Czy chcesz być dodany do rankingu
                                globalnego</TabSubheadline>
                        </Box>
                    </PreferencesCard>
                    <PreferencesCard>
                        <Box>
                            <FormGroup>
                                <FormControlLabel
                                    control={<IOSSwitch sx={{m: 1}}/>}
                                    checked={profileState?.theme}
                                    onChange={(event, checked) => {
                                        handleCheckBoxes('theme', checked)
                                    }}
                                />
                            </FormGroup>
                        </Box>
                        <Box>
                            <TabHeadline variant='title1'>Dark Mode</TabHeadline>
                        </Box>
                    </PreferencesCard>
                </Box>
            </Stack>
        </Container>
    );
}


const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({theme}) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));

const AvatarProfile = styled(Avatar)({
    width: '120px',
    height: "120px",
    rounded: 'full',
    marginBottom: 20
})

export const TextPoints = styled(Typography)({
    fontSize: "45px",
    fontWeight: "600",
    marginBottom: -10,
    marginTop: 20
})

export const TextLittle = styled(Typography)({
    fontSize: "12px",
    textAlign: "center",
})

const BadgesContainer = styled(Box)({
    marginBottom: 20,
    marginTop: 10
})

const BadgesBox = styled(Box)({
    display: 'flex',
    gap: '10px',
    marginTop: 20,
})

const BadgeImg = styled(Image)({
    width: '500px'
})

export const ButtonProfile = styled(Button)({
    borderRadius: '16px',
    backgroundColor: '#FFFBFE',
    color: '#6750A4',
    outlineColor: '#6750A4',
    marginBottom: 20,
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#6750A4',
        color: '#FFFBFE'
    }
})

const PreferencesCard = styled(Card)({
    display: 'flex',
    padding: 10,
    alignItems: 'center',
    marginBottom: 15
})

const TabHeadline = styled(Typography)({
    fontFamily: 'sans-serif',
    fontWeight: '500',
    fontSize: '16px'
})

const TabSubheadline = styled(Typography)({
    fontSize: '14px'
})


export default Profile;