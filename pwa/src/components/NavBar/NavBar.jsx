import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import EventIcon from "@mui/icons-material/Event";
import SearchIcon from "@mui/icons-material/Search";

export default function MenuAppBar() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
            <Box sx={{flexGrow: 1}}>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={auth}
                                onChange={handleChange}
                                aria-label="login switch"
                            />
                        }
                        label={auth ? 'Logined' : 'Logouted'}
                    />
                </FormGroup>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1, ml: 1}}>
                            Kurwa
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
                                        <MenuItem onClick={handleClose}>Gra</MenuItem>
                                        <MenuItem onClick={handleClose}>Lista gier</MenuItem>
                                        <MenuItem onClick={handleClose}>Profil</MenuItem>
                                    </Menu>
                                </>
                            )}
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
    );
}
