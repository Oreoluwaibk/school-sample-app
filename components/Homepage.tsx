import React from 'react';
import Header from './reusables/Header';
import Footer from './reusables/Footer';
import { Carousel } from 'antd';
import Image from 'next/image';

const Homepage = () => {
  return (
    <div>
        <Header />
        <div>
          <Carousel autoplay>
            <div style={{height: 400}}>
              <Image 
                alt="image pictures" 
                src="https://picsum.photos/200/300/?blur"
                width={100}
                className='w-full h-full'
                // width={500}
                // height={500}
              />
            </div>
          </Carousel>
        </div>
        <p>Homepage</p>
        <Footer />
    </div>
  )
}

export default Homepage