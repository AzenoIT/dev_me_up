import {useState, useContext} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import EventIcon from "@mui/icons-material/Event";
import SearchIcon from "@mui/icons-material/Search";
import {Container} from "@mui/material";
import NavigateContext from "../../context/NavigateProvider";

export default function MenuAppBar() {
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleNavigate = useContext(NavigateContext);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (navigateUrl) => {
        handleClose()
        handleNavigate(navigateUrl);
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <Container
                sx={{
                    maxWidth: '600px',
                    minHeight: '10vh'
                }}>
                <FormGroup>
                </FormGroup>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1, ml: 1}}>
                            NavBar
                        </Typography>
                        <div>
                            <IconButton
                                size="large"
                                aria-label="calendar"
                                color="inherit"
                            >
                                <EventIcon/>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="search"
                                color="inherit"
                            >
                                <SearchIcon/>
                            </IconButton>
                            {auth && (
                                <>
                                    <IconButton
                                        size="large"
                                        aria-label="account"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleMenu}
                                        color="inherit"
                                    >
                                        <MenuIcon/>
                                    </IconButton>

                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={() => handleClick('/battle')}>Gra</MenuItem>
                                        <MenuItem onClick={() => handleClick('')}>Lista gier</MenuItem>
                                        <MenuItem onClick={() => handleClick('/profile')}>Profil</MenuItem>
                                    </Menu>
                                </>
                            )}
                        </div>
                    </Toolbar>
                </AppBar>
            </Container>
        </Box>
    );
}
