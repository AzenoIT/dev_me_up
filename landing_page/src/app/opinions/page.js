'use client'

import '../../styles/opinions.css'


import {Button} from "@mui/material";


function Opinions() {
    return (
        <div className='container'>
            <h2 className='hdl'>Zabawa i nauka w jednym</h2>
            <p className='text'>Sprawdź swoją wiedzę rywalizując ze znajomymi</p>
            <Button className='btnAppStore' variant="outlined">Pobierz w App Store</Button>
            <Button className='btnGooglePlay' variant="outlined">Pobierz z Google Play</Button>
        </div>
    );
}

export default Opinions;