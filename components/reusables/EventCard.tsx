import { Button, Image } from 'antd';
// import Image from 'next/image';
import React from 'react'


type eventCard = {
    image: string;
    date: string;
    time: string;
    title: string;
}
const EventCard = ({ image, date, time, title }: eventCard) => {
  return (
    <div
        style={{height: 500}}
        className="flex flex-col shadow-md transition-all duration-[1s] ease-linear hover:shadow-2xl rounded-sm w-full md:w-1/3"
    >
        <div className="relative">
            <Image 
                src={image}
                alt={title}
                preview={false}
                style={{height: 250}}
                // width={200}
                // height={200}
            />
            <p className="absolute bottom-1 left-3 md:left-0 p-4 font-bold text-2xl text-secondary" style={{backgroundColor: "rgba(90,146,197,0.5)"}}>{date}</p>
        </div>
        <div
            className="flex flex-col items-center justify-between h-full py-4"
        >
            <p className="text-primary font-bold text-3xl">{title}</p>
            <p className="text-lg text-gray-700 font-medium">{time}</p>
            <p className="cursor-pointer transition-opacity duration-700 ease-in-out hover:opacity-50">read more</p>
            <Button 
                type="primary" 
                className="h-12 flex items-center justify-center font-semibold w-36 rounded-none"
            >
                Register
            </Button>

        </div>
    </div>
  )
}

export default EventCard