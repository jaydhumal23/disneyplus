import React, { useState } from "react"
import logo from "./../assets/disney.png";
import person from "./../assets/person.jpg";
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
} from "react-icons/hi2";
import HeaderItems from "./HeaderItems.jsx";
import { HiPlus, HiDotsVertical } from "react-icons/hi"

export default function Header() {
    const [togle, setTogle] = useState(false)
    const menu = [
        {
            name: "HOME",
            icon: HiHome,
        },
        {
            name: "SEARCH",
            icon: HiMagnifyingGlass,
        },
        {
            name: "WATCHLIST",
            icon: HiPlus,
        },
        {
            name: "ORIGINALS",
            icon: HiStar,

        },
        {
            name: "MOVIES",
            icon: HiPlayCircle,
        },
        {
            name: "SERIES",
            icon: HiTv,
        }

    ]
    return (
        <div className="flex  items-center p-6 justify-between">

            <div className=" flex gap-[40px] items-center  ">
                <img src={logo} alt="image of disney logo" className="h-[60px]   object-cover " />
                <div className="flex max-lg:hidden gap-8  ">
                    {menu.map((items) => (<HeaderItems name={items.name} Icon={items.icon} />))}
                </div>

                <div className=" flex lg:hidden gap-8 items-center  ">
                    {menu.map((items, index) => index < 2 && (<HeaderItems name={""} Icon={items.icon} />))}


                </div>
                <div className="lg:hidden " onClick={() => {
                    setTogle(!togle);
                }}>
                    < HeaderItems name="" Icon={HiDotsVertical} />
                    {togle ? <div className="absolute mt-5 border-[1px] border-gray-700 bg-[#121212e9]  px-8 py-7 rounded-2xl">
                        {menu.map((items, index) => index > 2 && (<HeaderItems name={items.name} Icon={items.icon} />))}


                    </div> : null}
                </div>

            </div>
            <img src={person} alt="image of user" className="h-[50px] rounded-[500px] cursor-pointer  max-lg:h-[40px]" />


        </div>
    )
}