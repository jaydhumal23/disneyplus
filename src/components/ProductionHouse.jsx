import React from 'react'
import disney from "../a/Images/disney.png"
import marvel from "../a/Images/marvel.png"
import nationalG from "../a/Images/nationalG.png"
import pixar from "../a/Images/pixar.png"
import starwar from "../a/Images/starwar.png"

import viddisney from "../a/Videos/disney.mp4"
import vidmarvel from "../a/Videos/marvel.mp4"
import vidnationalG from "../a/Videos/nationalG.mp4"
import vidpixar from "../a/Videos/pixar.mp4"
import vidstarwar from "../a/Videos/star-wars.mp4"


export default function ProductionHouse() {
    const list = [
        {
            id: 1,
            image: disney,
            video: viddisney,
        }
        ,
        {
            id: 2,
            image: marvel,
            video: vidmarvel,
        },
        {
            id: 3,
            image: starwar,
            video: vidstarwar,
        },
        {
            id: 4,
            image: pixar,
            video: vidpixar,
        },
        {
            id: 5,
            image: nationalG,
            video: vidnationalG,
        },
    ]
    return (
        <div className=''>
            <div className='flex gap-7 max-md:gap-2 px-8 p-1 max-md:px-1 '>
                {list.map((data) => (
                    <div key={data.id} className='border-2 max-md:border-1 border-gray-500 bg-zinc-950 max-md:rounded-sm  rounded-xl trasition-all duration-[0.5s] hover:scale-110 curosr-pointer overflow-hidden shadow-xl shadow-gray-800 relative'>
                        <video src={data.video} autoPlay loop playsInline muted className='cursor-pointer absolute top-0 z-0 opacity-0 hover:opacity-40 object-cover w-full h-full' />
                        <img src={data.image} className=' object-cover cursor-pointer w-full z-[1] ' />
                    </div>
                ))}
            </div>

        </div>
    )
}

