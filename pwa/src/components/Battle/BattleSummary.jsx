import {Avatar, Box, Container, Typography, styled} from "@mui/material";
import Badge from '../../images/badges/AwardGold2.svg'
import {ButtonProfile, TextLittle, TextPoints} from "../Profile/Profile";
import avatar from '../../images/avatar/avatar1.svg'

const AvatarVS = styled(Avatar)({
    height: '64px',
    width: '64px'
})

function BattleSummary() {
    return (
        <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px'}}>
            <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <AvatarVS src={avatar}/>
                <Typography sx={{marginInline: '5px'}}>vs</Typography>
                <AvatarVS/>
            </Box>
            <TextPoints sx={{textTransform: 'uppercase', fontWeight: '400'}}>
                Wygrywasz!
            </TextPoints>
            <Box sx={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
            <img style={{width: '142px', height: '76px', marginTop: '20px', marginLeft: '10px'}} src={Badge} alt="badge"/>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <TextPoints>2137</TextPoints>
                <TextLittle>Twoje punkty</TextLittle>
            </Box>
            <ButtonProfile variant="contained" sx={{px: '53px', py: '10px', marginTop: '24px'}}>
                Gram dalej
            </ButtonProfile>
            <Box sx={{ height: '200px'}}>

            </Box>
            <ButtonProfile variant="contained" sx={{px: '24px', py: '10px'}}>
                Twoje statystyki
            </ButtonProfile>


        </Container>
    );
}

export default BattleSummary;