import {Outlet} from 'react-router-dom';
import {ThemeProvider, createTheme} from '@mui/material/styles';

import NavBar from "../NavBar/NavBar";


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
                <NavBar/>
                <Outlet/>
            </ThemeProvider>
        </>
    )
}

export default Layout;