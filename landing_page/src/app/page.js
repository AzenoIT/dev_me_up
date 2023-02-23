"use client"


import HamburgerMenu from "@/app/hamburgerMenu/page";
import FirstSection from "@/app/firstSection/page";
import Opinions from "@/app/opinions/page";
import Newsletter from "@/app/newsletter/page";
import EndSection from "@/app/end/page";
import "../styles/scss/helpers/globals.scss";


export default function Home() {
    return (
        <div className="container_all">
            <HamburgerMenu/>
            <FirstSection/>
            <Newsletter/>
            <Opinions/>
            <EndSection/>
        </div>

    )
}
