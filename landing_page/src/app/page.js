"use client"


import HamburgerMenu from "@/app/hamburgerMenu/page";
import FirstSection from "@/app/firstSection/page";
import Opinions from "@/app/opinions/page";
import Newsletter from "@/app/newsletter/page";
import EndSection from "@/app/end/page";

export default function Home() {
    return (
       <>
           <HamburgerMenu  />
           <FirstSection />
           <Opinions />
           <Newsletter/>
           <EndSection />
       </>
    )
}
