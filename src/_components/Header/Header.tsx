"use client"

import Button from "../Button"
import { CiGlobe } from "react-icons/ci";
const Header = () => {

    return (

        <>
            <header>
                <div className="w-full  flex items-center justify-between">
                    <div className="container-fluid flex items-center  justify-between h-19">
                        <div className="font-bold text-4xl">
                            ANAS.
                        </div>
                        <div className="flex items-center uppercase gap-8 text-lg font-medium tracking-tight">
                            <div >Work</div>
                            <div>About</div>
                            <div>Contact</div>

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
