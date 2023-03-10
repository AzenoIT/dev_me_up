'use client'

import "../../styles/scss/helpers/media-queries.scss";
import '../../styles/scss/components/opinions.scss';

import {roboto400, teko300, teko400, teko500} from "@/app/fonts";
import Image from "next/image";
import google from '../../images/Badgegoogle.png';
import apple from '../../images/Badgeapple.png';


function Opinions() {
    return (
        <>
            <div id="download_mobile" className="hide-on-desktop container_opinions">
                <h2 className={`${teko500.className} hdl`}>Zabawa i&nbsp;nauka w jednym</h2>
                <p className={`${teko300.className} text`}>Sprawdź swoją wiedzę rywalizując&nbsp;ze znajomymi</p>

                <div className='btn_box_opinions'>
                    <a href='https://www.apple.com/pl/app-store/' className='btnAppStore'>
                        <Image src={apple} alt='Apple picture'/></a>
                    <a href='https://play.google.com/store/games?hl=pl&gl=US' className='btnGooglePlay'>
                        <Image src={google} alt='Google picture'/></a>
                </div>
            </div>
            <div id="download_desktop" className="hide-on-mobile box_opinions_desktop">
                <h1 className={`${teko400.className} h1_desktop`}>
                    Technologie Statystyki&nbsp;<br/>Wyniki
                </h1>
                <p className={`${roboto400.className} desc_desktop`}>Grając więcej podnosisz swoje
                    umiejętności.<br/>Wszystko zobaczysz w rozbudowanym podsumowaniu.</p>
            </div>
        </>

    );
}

export default Opinions;