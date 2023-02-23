import {Avatar, Box, Container, Typography, styled} from "@mui/material";
import Badge from '../../images/badges/AwardGold2.svg'
import {ButtonProfile, TextLittle, TextPoints} from "../Profile/Profile";
import avatar from '../../images/avatar/avatar1.svg';
import {Legend, Line, Pie, PieChart} from "recharts";

const data01 = [
    {
        "name": "wygrane",
        "value": 400,
        "fill": '#6BE30C'
    },
    {
        "name": "przegrane",
        "value": 300,
        "fill": '#E30C0C'
    },
    {
        "name": "remisy",
        "value": 300,
        "fill": '#7D7D7D'
    }
];

const AvatarVS = styled(Avatar)({
    height: '64px',
    width: '64px'
})

function BattleSummary() {
    return (
        <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <AvatarVS src={avatar}/>
                <Typography sx={{marginInline: '5px'}}>vs</Typography>
                <AvatarVS/>
            </Box>
            <TextPoints sx={{textTransform: 'uppercase', fontWeight: '400'}}>
                Wygrywasz!
            </TextPoints>
            <Box>
                <img style={{width: '142px', height: '76px', marginTop: '20px', marginLeft: '10px'}} src={Badge}
                     alt="badge"/>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <TextPoints>2137</TextPoints>
                <TextLittle>Twoje punkty</TextLittle>
            </Box>
            <ButtonProfile variant="contained" sx={{px: '53px', py: '10px', marginTop: '24px'}}>
                Gram dalej
            </ButtonProfile>
            <Box sx={{marginTop: '10px', marginBottom: '30px'}}>
                <PieChart width={180} height={200}>
                    <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60}/>
                    <Legend verticalAlign="bottom" height={60}/>
                    <Line name="pv of pages" type="monotone" dataKey="pv" stroke="#8884d8"/>
                    <Line name="uv of pages" type="monotone" dataKey="uv" stroke="#82ca9d"/>
                    <Line name="uv of pages" type="monotone" dataKey="uv" stroke="#82ca9d"/>
                </PieChart>
            </Box>
            <ButtonProfile variant="contained" sx={{px: '24px', py: '10px'}}>
                Twoje statystyki
            </ButtonProfile>
        </Container>
    );
}

export default BattleSummary;