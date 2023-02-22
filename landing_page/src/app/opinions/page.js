'use client'

import '../../styles/scss/components/opinions.scss'
import {roboto300, roboto500} from "@/app/fonts";
import Image from "next/image";
import google from '../../images/Badgegoogle.png'
import apple from '../../images/Badgeapple.png'



function Opinions() {
    return (
        <div id="download" className='container_opinions'>
            <h2 className={`${roboto500.className} hdl`}>Zabawa i&nbsp;nauka w jednym</h2>
            <p className={`${roboto300.className} text`}>Sprawdź swoją wiedzę rywalizując&nbsp;ze znajomymi</p>

            <a href='https://www.apple.com/pl/app-store/' className='btnAppStore'>
                <Image src={apple} alt='Apple picture'/></a>
            <a href='https://play.google.com/store/games?hl=pl&gl=US' className='btnGooglePlay'>
                <Image src={google} alt='Google picture'/></a>
        </div>
    );
}

export default Opinions;