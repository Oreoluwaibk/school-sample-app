import React, { useState } from 'react'


type hoverCard = {
    title: string;
    image: string;
    description: string
}

const HoverCards = ({ title, image, description}: hoverCard) => {
    const [ isMouseEnter, setIsMouseEnter ] = useState(false); 

    const handleMouseEnter = () => {
        setIsMouseEnter(true)
    }

    const show = isMouseEnter ? " block" : " hidden"
    const showBorder = isMouseEnter ? " border-secondary border" : ""
  return (
    <div 
        className="relative w-1/3"
        style={{
            height: 400,
            background: `url(${image}) center center/cover no-repeat`,
            backgroundColor: "rgba(90,146,197,0.8)",
            backgroundBlendMode: "multiply"
        }}
    >
        <div 
            style={{height: 350}} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsMouseEnter(false)}
            className={"m-6 px-2 pb-14 flex flex-col items-center justify-center gap-4 "+ showBorder}
        >
            <p className="text-secondary font-bold text-3xl">{title}</p>
            <p className={"text-lg text-secondary transition-all duration-1000 ease-in-out "+ show}>{description}</p>
        </div>
    </div>
  )
}

export default HoverCards