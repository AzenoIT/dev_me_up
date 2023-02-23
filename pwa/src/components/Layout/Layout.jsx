import {Outlet} from 'react-router-dom';
import {ThemeProvider, createTheme} from '@mui/material/styles';

import NavBar from "../NavBar/NavBar";
import Box from "@mui/material/Box";


const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#ffffff',
        },
    },
});

function Layout() {
    return (
        <>
            <ThemeProvider theme={lightTheme}>
                <Box sx={{backgroundColor: "#F6F6F6"}}>
                    <NavBar/>
                    <Outlet/>
                </Box>
            </ThemeProvider>
        </>
    )
}

export default Layout;