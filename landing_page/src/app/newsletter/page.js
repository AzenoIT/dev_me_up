"use client"

import "../../styles/scss/components/newsletter.scss";
import "../../styles/scss/helpers/buttons.scss";
import {roboto300, roboto500} from "@/app/fonts";
import HamburgerMenu from "@/app/hamburgerMenu/page";


function Newsletter() {
    return (
        <div className="box_newsletters">
<HamburgerMenu />
            <h2 className={`${roboto500.className} hdl_newsletter`}>Graj Rywalizuj Ucz się</h2>
            <p className={`${roboto300.className} text_newsletter`}>Sprawdź swoją wiedzę rywalizując ze znajomymi.</p>

            <a href="" className={`${roboto500.className} btn_newsletter_add`}>Newsletter</a>
        </div>
    );
}

export default Newsletter;