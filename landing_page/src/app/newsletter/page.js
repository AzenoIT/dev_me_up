"use client"

import "../../styles/scss/components/newsletter.scss";
import "../../styles/scss/helpers/buttons.scss";
import {roboto300, roboto400, roboto500} from "@/app/fonts";
import {dividerClasses} from "@mui/material";


function Newsletter() {
    return (
        <>
            <div id="newsletter" className="hide-on-desktop  box_newsletters">
                <h2 className={`${roboto500.className} hdl_newsletter`}>Graj Rywalizuj Ucz się</h2>
                <p className={`${roboto300.className} text_newsletter`}>Sprawdź swoją wiedzę rywalizując ze
                    znajomymi.</p>
                <div className='btn_newsletter_box'>
                    <a href="" className={`${roboto500.className} btn_newsletter_add`}>Newsletter</a>
                </div>
            </div>
            <div className="hide-on-mobile input_box">
                <input className={`${roboto400.className} input_desktop`} type='text' name='email'
                       placeholder='Tu wprowadź swój adres e-mail'/>
                <a href="" className={`${roboto400.className} btn_send`}>Zapisz się</a>
            </div>


        </>
    )
        ;

}

export default Newsletter;