import {AppBar, Box, styled, Toolbar, Typography} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#FFFBFE",
    color: "#1C1B1F"
})

const NavBox = styled(Box)({
    display: 'flex'
})

function Navbar() {
    return (
        <AppBar position='sticky'>
            <StyledToolBar>
                <NavBox>
                    <ArrowBackIcon/>
                    <Typography>Wybór technologii</Typography>
                </NavBox>
                <MenuIcon/>
            </StyledToolBar>
        </AppBar>
    );
}

export default Navbar;