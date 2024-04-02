import React from 'react';

type smallCard = {
    title: string;
    image: any;
}

const SmallCards = ({ title, image }: smallCard) => {
  return (
    <div 
        className="h-40 bg-primary transition-opacity duration-1000 hover:opacity-60"
    >
        
    </div>
  )
}

export default SmallCards