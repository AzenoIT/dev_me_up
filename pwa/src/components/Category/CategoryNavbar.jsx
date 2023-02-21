import {AppBar, Box, styled, Toolbar, Typography} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import IconButton from "@mui/material/IconButton";

const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#FFFBFE",
    color: "#1C1B1F"
})

const NavBox = styled(Box)({
    display: 'flex',
    alignItems: 'center'
})

const NavTypo = styled(Typography)({
    fontSize: '22px',
    fontWeight: '400',
    fontFamily: 'Roboto, sans-serif'
})

function CategoryNavbar() {
    return (
        <AppBar position='sticky'>
            <StyledToolBar>
                <NavBox>
                    <IconButton>
                        <ArrowBackIcon/>
                    </IconButton>
                    <NavTypo>Wybór technologii</NavTypo>
                </NavBox>
                <IconButton>
                    <MenuIcon/>
                </IconButton>
            </StyledToolBar>
        </AppBar>
    );
}

export default CategoryNavbar;