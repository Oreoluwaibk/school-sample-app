import Image from 'next/image';
import React from 'react';

type smallCard = {
    title: string;
    image: any;
}

const SmallCards = ({ title, image }: smallCard) => {
  return (
    <div 
        className="bg-primary transition-opacity duration-1000 hover:opacity-60 flex flex-col justify-center items-center gap-4 p-8 w-full"
        style={{height: 250}}
    >
        <Image 
          src={image}
          alt={title}
        />
        <p className="text-secondary font-bold text-2xl">{title}</p>
    </div>
  )
}

export default SmallCards