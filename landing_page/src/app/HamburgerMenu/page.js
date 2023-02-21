"use client"

import * as React from 'react';
import DehazeSharpIcon from '@mui/icons-material/DehazeSharp';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

import '../../styles/scss/components/hamburger.scss'
import {quicksand} from "@/app/fonts";


export default function HamburgerMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="container">
            <p className={`${quicksand} logo`}>Dev me up</p>
            <DehazeSharpIcon
                id="fade-button"
                className="hamburger"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
            </DehazeSharpIcon>
            <Menu
                id="fade-menu"
                className="menu_hamburger"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem className="menu_item" onClick={handleClose}>Zapisz się do newslettera</MenuItem>
                <MenuItem className="menu_item" onClick={handleClose}>Pobierz aplikację</MenuItem>
                <MenuItem className="menu_item" onClick={handleClose}>Rywalizacja</MenuItem>
                <MenuItem className="menu_item" onClick={handleClose}>Label</MenuItem>
                <MenuItem className="menu_item" onClick={handleClose}>Label</MenuItem>
            </Menu>
        </div>
    );
}

