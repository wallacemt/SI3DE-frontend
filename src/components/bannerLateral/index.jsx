import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
const BannerLateral = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: 'ease-in-out'
        })
    }, []);

    return (
        <div className="fixed right-0 top-0 h-screen w-[70vw] bg-[#FF2A00] overflow-hidden flex flex-col items-center justify-center">
            <div
                className="bg-[url('/ilustation.svg')] bg-no-repeat bg-center bg-cover h-full w-[90%]"
                data-aos = 'slide-right'
            ></div>
        </div>
    )
};


export default BannerLateral;
