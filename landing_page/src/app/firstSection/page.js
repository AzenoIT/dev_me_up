"use client";

import "../../styles/scss/helpers/buttons.scss";

import "../../styles/scss/components/firstsection.scss"
import {teko500} from "@/app/fonts";

export default function FirstSection() {
    return (
        <div className='box_section'>
            <h1 className={`${teko500.className} hd1`}>
                <p className="hd1-indent">Graj</p>
                <p className="hd1-center">Rywalizuj</p>
                <p className="hd1-indent2">Ucz się</p>
            </h1>
            <button className='btn_newsletter_add btn_download'>Pobierz aplikację</button>
            <button className='btn_newsletter_add'>Newsletter</button>
        </div>
    )
}

