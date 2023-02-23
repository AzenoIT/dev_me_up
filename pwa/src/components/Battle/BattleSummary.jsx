import {Avatar, Box, Container, Typography} from "@mui/material";
import Badge from '../../images/badges/AwardGold2.svg'

function BattleSummary() {
    return (
            <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <Avatar/>
                    <Typography>vs</Typography>
                    <Avatar/>
                </Box>
                <Typography variant='h2'>
                    Wygrywasz!
                </Typography>
                <Box>
                    <img src={Badge} alt=""/>
                </Box>
                <Typography variant='h2'>
                    2137
                </Typography>
            </Container>
    );
}

export default BattleSummary;