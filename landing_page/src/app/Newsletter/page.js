"use client"


import "../../styles/scss/components/newsletter.scss";
import "../../styles/scss/helpers/buttons.scss";
import {roboto300, roboto500} from "@/app/fonts";



function Newsletter() {
    return (
        <div className="box_newsletters">

            <h2 className={`${roboto500} hdl_newsletter`}>Graj Rywalizuj Ucz się</h2>
            <p className={`${roboto300} text_newsletter`}>Sprawdź swoją wiedzę rywalizując ze znajomymi.</p>

            <a href="" className={`${roboto500} btn_newsletter_add`}>Newsletter</a>
        </div>
    );
}

export default Newsletter;