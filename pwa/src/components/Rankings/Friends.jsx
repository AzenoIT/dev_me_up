import {
    Avatar,
    Box,
    Card,
    Checkbox,
    Container, InputAdornment,
    OutlinedInput,
    Paper,
    styled,
    TextField,
    Typography
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = styled(TextField)({

})

const FriendCard = styled(Paper)({
    backgroundColor: '#FFFBFE',
    width: '338px',
    height: '46px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    marginBottom: '10px'
})

const label = {inputProps: {'aria-label': 'Checkbox demo'}};

function Friends() {
    return (
        <Container sx={{marginTop: '20px', marginBottom: '10px', display: 'flex', flexDirection: 'column', height: '80vh'}}>

            <Box sx={{display: 'flex', justifyContent: 'center'}}>

                <OutlinedInput id="outlined-adornment-password" endAdornment={
                    <InputAdornment position="end">
                        <IconButton edge="end">
                            <SearchIcon/>
                        </IconButton>
                    </InputAdornment>
                } label="Szukaj znajomych" style={{
                    backgroundColor: '#f0e8f6', width: '100%', borderRadius: '24px'
                }}/>

            </Box>

            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '30px'}}>

                <Typography sx={{fontSize: '16px'}}>
                    Lista twoich znajomych
                </Typography>

                <Box sx={{display: 'flex', flexDirection: 'column', paddingTop: '15px'}}>

                    {Array.apply(null, {length: 5}).map((e, i) => (
                        <FriendCard>
                            <Avatar/>
                            <Typography>Andrzej Duda</Typography>
                            <Checkbox/>
                        </FriendCard>
                    ))}
                </Box>
            </Box>
        </Container>
    );
}

export default Friends;