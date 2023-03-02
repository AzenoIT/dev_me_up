import {useEffect, useState} from "react";
import {Outlet, useNavigate} from 'react-router-dom';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import Box from "@mui/material/Box";
import NavigateContext, {NavigateProvider} from "../../context/NavigateProvider";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import NavBar from "../NavBar/NavBar";

function Layout() {
    const navigate = useNavigate();
    const profileState = useState(useLocalStorage('profile', '')[0] || '')[0];

    useEffect(() => {
        if (!profileState) {
            navigate('/startfirst');
        }
    }, [])

    return (
        <>
            <NavigateProvider>
                <ThemeProvider theme={lightTheme}>
                    <Box sx={{backgroundColor: "#F6F6F6"}}>
                        <NavBar/>
                        <Outlet/>
                    </Box>
                </ThemeProvider>
            </NavigateProvider>
        </>
    )
}

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#ffffff',
        },
    },
});

export default Layout;
