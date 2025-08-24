import React from "react";

export default function HeaderItems(props) {
    return (

        <div className="text-white flex items-center gap-[8px]  text-[1.3rem] font-semibold cursor-pointer transition-all duration-[0.3s] hover:underline underline-offset-[15px]  max-lg:text-[1.6rem] max-lg:mb-4 max-lg:underline-offset-[10px] max-lg:gap-5">
            <props.Icon />
            <h2 className="max-lg:text-xl font-medium">{props.name}</h2>
        </div>
    )
} 