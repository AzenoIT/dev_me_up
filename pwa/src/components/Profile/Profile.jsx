import {Avatar, Button, Card, CardContent, Container, Grid, Stack, styled, TextField, withStyles} from "@mui/material";
import avatar from '../../images/avatar/avatar1.svg';
import Box from "@mui/material/Box";
import AwardGold from '../../images/badges/AwardGold.svg';
import AwardGold2 from '../../images/badges/AwardGold2.svg';
import AwardSilver from '../../images/badges/AwardSilver.svg';
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
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

const ButtonProfile = styled(Button)({
    borderRadius: '16px',
    backgroundColor: '#FFFBFE',
    color: '#6750A4',
    outlineColor: '#6750A4',
    '&:hover': {
        backgroundColor: '#6750A4',
        color: '#FFFBFE'
    }
})


function Profile() {
    return (
        <Container>
            <Stack direction='column' alignItems='center'>
                {/*<Box>*/}
                {/*    <Avatar src={avatar}/>*/}
                {/*</Box>*/}
                <Avatar src={avatar}/>
                <TextField id="outlined-basic" label="nickname" variant="outlined"/>
                <h2>2137</h2>
                <p>Twoje punkty</p>
                <Box>
                    <img src={AwardGold} alt=""/>
                    <img src={AwardGold2} alt=""/>
                    <img src={AwardSilver} alt=""/>
                </Box>
                <p>Twoje plakietki</p>
                <ButtonProfile variant="contained" className='button_profile'>
                    Twoje statystyki
                </ButtonProfile>
                <ButtonProfile variant="contained" className='button_profile'>
                    Wybierz technologię
                </ButtonProfile>
                <Box>
                    <Card sx={{display: 'flex'}}>
                        <Box>
                            <FormGroup>
                                <FormControlLabel
                                    control={<IOSSwitch sx={{ m: 1 }} />}
                                />
                            </FormGroup>
                        </Box>
                        <Box>
                            <Typography variant=''>Czy chcesz być wyszukiwany?</Typography>
                            <Typography variant='subtitle1'>Szybciej zagrasz ze znajomymi</Typography>
                        </Box>
                    </Card>
                    <Card sx={{display: 'flex'}}>
                        <Box>
                            <FormGroup>
                                <FormControlLabel
                                    control={<IOSSwitch sx={{ m: 1 }} />}
                                />
                            </FormGroup>
                        </Box>
                        <Box xs={{display: 'flex'}}>
                            <Typography variant=''>Ranking</Typography>
                            <Typography variant=''>Czy chcesz być dodany do rankingu globalnego</Typography>
                        </Box>
                    </Card>
                    <Card sx={{display: 'flex'}}>
                        <Box>
                            <FormGroup>
                                <FormControlLabel
                                    control={<IOSSwitch sx={{ m: 1 }} />}
                                />
                            </FormGroup>
                        </Box>
                        <Box>
                            <Typography sx={{textAlign: 'center'}} variant=''>Dark Mode</Typography>
                        </Box>
                    </Card>
                </Box>

            </Stack>

        </Container>
    );
}

export default Profile;