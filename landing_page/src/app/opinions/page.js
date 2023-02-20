'use client'

import '../../styles/opinions.css'
import {Button, SvgIcon} from "@mui/material";
import AppleIcon from '@mui/icons-material/Apple';
import ShopIcon from '@mui/icons-material/Shop';
import {roboto300, roboto500} from "@/app/fonts";



function Opinions() {
    return (
        <div className='container'>
            <h2 className={`${roboto500} hdl`}>Zabawa i&nbsp;nauka w jednym</h2>
            <p className={`${roboto300} text`}>Sprawdź swoją wiedzę rywalizując&nbsp;ze znajomymi</p>
            <a href='https://www.apple.com/pl/app-store/' className='btnAppStore' variant="outlined"><AppleIcon className='iconApple'/><div>
                <p>Pobierz w</p>
                <p>App Store</p>
            </div></a>
            <Button className='btnGooglePlay' variant="outlined"><ShopIcon/>Pobierz z Google Play</Button>
        </div>
    );
}

export default Opinions;