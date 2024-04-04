import React, { useState } from 'react';
import $ from 'jquery';


type hoverCard = {
    title: string;
    image: string;
    description: string;
    num: number;
}

const HoverCards = ({ title, image, description, num}: hoverCard) => {
    const [ isMouseEnter, setIsMouseEnter ] = useState(false); 

    const handleMouseEnter = (num: number) => {
        setIsMouseEnter(true)
        $(`#desc${num}`).addClass("show")
        $(`#bord${num}`).addClass("bord")
    }

    const handleMouseLeave = (num: number) => {
        setIsMouseEnter(false)
        $(`#desc${num}`).removeClass("show")
        $(`#bord${num}`).removeClass("bord")
    }

    // const show = isMouseEnter ? "opacity-100" : "opacity-0"
    const showBorder = isMouseEnter ? " border-secondary border" : ""
  return (
    <div 
        className="relative w-full md:w-1/3"
        style={{
            height: 400,
            background: `url(${image}) center center/cover no-repeat`,
            backgroundColor: "rgba(90,146,197,0.8)",
            backgroundBlendMode: "multiply"
        }}
    >
        <div 
            style={{height: 350}} 
            onMouseEnter={()=>handleMouseEnter(num)}
            onMouseLeave={()=>handleMouseLeave(num)}
            className={"m-6 px-2 pb-14 flex flex-col items-center justify-center gap-4 "}
            id={`bord${num}`}
        >
            <p className="text-secondary font-bold text-3xl">{title}</p>
            <p className={"text-lg text-secondary transition-all duration-1000 ease-in-out hidden opacity-0"} id={`desc${num}`}>{description}</p>
        </div>
    </div>
  )
}

export default HoverCards