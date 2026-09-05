"use client"

import { useEffect, useState } from "react";
import Button from "../Button";


const Header = () => {



    return (

        <>
            <header>
                <div className="w-full  flex items-center justify-between">
                    <div className="container-fluid flex items-center  justify-between h-19">
                        <div className="font-bold text-4xl">
                            ANAS.
                        </div>
                        <div className="h-[38px] px-5 rounded-full border border-[#e5e5e5] flex items-center gap-2 text-[14px] font-medium text-[18px] leading-[26px] text-[#030303]  hover:border-black transition-all ">
                            Based on California, USA
                        </div>

                        <div className="h-[38px] px-5 rounded-full border border-[#e5e5e5] flex items-center gap-2 text-[14px] font-medium text-[18px] leading-[26px] text-[#030303]  hover:border-black transition-all ">

                            Email: info@example.com
                        </div>
                        <div>
                            <Button />
                        </div>

                    </div>


                </div>

            </header >

        </>
    )
}

export default Header
