import {Outlet} from 'react-router-dom';
import {ThemeProvider, createTheme} from '@mui/material/styles';

import NavBar from "../NavBar/NavBar";
import Box from "@mui/material/Box";
import {NavigateProvider} from "../../context/NavigateProvider";


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

export default Layout;