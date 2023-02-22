"use client";

import "../../styles/scss/helpers/buttons.scss";
import '../../styles/scss/helpers/media-queries.scss'
import "../../styles/scss/components/firstsection.scss"
import {teko400, teko500} from "@/app/fonts";
import Image from "next/image";
import apple from "@/images/Badgeapple.png";
import google from "@/images/Badgegoogle.png";
import apple_qr from "@/images/apple_qr.png";
import google_qr from "@/images/google_qr.png";
import smartphone from "@/images/smartphone2.png"


export default function FirstSection() {
    return (
        <>
            <div className='hide-on-desktop box_section'>
                <h1 className={`${teko500.className} hd1`}>
                    <p className="hd1-indent">Graj</p>
                    <p className="hd1-center">Rywalizuj</p>
                    <p className="hd1-indent2">Ucz się</p>
                </h1>
                <div className='buttons_first_section'>
                    <button className='btn_newsletter_add btn_download'>Pobierz aplikację</button>
                    <button className='btn_newsletter_add'>Newsletter</button>
                </div>
            </div>
            <div className='hide-on-mobile desktop_page'>
                <div className='h1_box_desktop'>
                    <h1 className={`${teko400.className} h1_desktop`}>
                        Graj ucz się rywalizuj
                    </h1>
                </div>
                <div className='phone_and_buttons'>
                    <Image src={smartphone} alt='smartphone' width={900} height={800}/>
                    <div className='buttons_download '>
                        <div className='buttons_wrapper'>
                            <div className='google_download'>
                                <Image src={apple_qr} alt='QR_apple'/>
                                <a href='https://www.apple.com/pl/app-store/' className='btnAppStore'>
                                    <Image src={apple} alt='Apple picture'/>
                                </a>
                            </div>
                            <div className='apple_download'>
                                <Image src={google_qr} alt='QR_apple'/>
                                <a href='https://play.google.com/store/games' className='btnAppStore'>
                                    <Image src={google} alt='Apple picture'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

