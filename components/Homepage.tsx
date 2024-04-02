import React from 'react';
import Header from './reusables/Header';
import Footer from './reusables/Footer';
import { Button, Carousel } from 'antd';
import Image from 'next/image';



const Homepage = () => {
  return (
    <div>
        <Header />
        <div className="bg-secondary text-gray-700">
          <Carousel 
            autoplay 
            dots
            nextArrow={<i className="bi bi-caret-right"></i>}
            prevArrow={<i className="bi bi-caret-left"></i>}
          >
            <div className="w-full">
              <div 
                style={{
                  height: 500,
                  background: `url('https://picsum.photos/1400/400') center center/cover no-repeat`,
                }}
                className="w-full h-96 flex flex-col items-center justify-center px-52 gap-4"
              >
                <h2 className="text-4xl font-semibold text-neutral-200">About Us</h2>
                <p className="text-neutral-200 font-normal opacity-80 text-base text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem voluptatibus temporibus, impedit doloribus libero, iure suscipit magni soluta, excepturi possimus ratione sed mollitia explicabo! Rerum nihil aut nam natus accusantium.</p>
                <Button type="primary" className="h-10 w-36 flex items-center justify-center font-medium text-sm">Read More</Button>
              </div>
            </div>
            <div className="w-full">
              <div 
                style={{
                  height: 500,
                  background: `url('https://picsum.photos/1400/400') center center/cover no-repeat`,
                }}
                className="w-full h-96 flex flex-col items-center justify-center px-52 gap-4"
              >
                <h2 className="text-4xl font-semibold text-neutral-200">Our testimonies</h2>
                <p className="text-neutral-200 font-normal opacity-80 text-base text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem voluptatibus temporibus, impedit doloribus libero, iure suscipit magni soluta, excepturi possimus ratione sed mollitia explicabo! Rerum nihil aut nam natus accusantium.</p>
                <Button type="primary" className="h-10 w-36 flex items-center justify-center font-medium text-sm">Read More</Button>
              </div>
            </div>
            <div className="w-full">
              <div 
                style={{
                  height: 500,
                  background: `url('https://picsum.photos/1400/400') center center/cover no-repeat`,
                }}
                className="w-full h-96 flex flex-col items-center justify-center px-52 gap-4"
              >
                <h2 className="text-4xl font-semibold text-neutral-200">Events</h2>
                <p className="text-neutral-200 font-normal opacity-80 text-base text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem voluptatibus temporibus, impedit doloribus libero, iure suscipit magni soluta, excepturi possimus ratione sed mollitia explicabo! Rerum nihil aut nam natus accusantium.</p>
                <Button type="primary" className="h-10 w-36 flex items-center justify-center font-medium text-sm">Read More</Button>
              </div>
            </div>
          </Carousel>

          {/* intro page */}
          <div className="px-52 mt-12 text-center">
            <h2 className="text-center text-4xl font-bold">Welcome to </h2>
            <p className="text-primary text-center text-4xl font-bold">XYZ International School</p>
            
            <div className="w-full flex items-center justify-center">
              <hr className="w-2/5 block text-center border-2 border-primary my-4" />
            </div>

            <p className="text-gray-700 text-base opacity-80">Our mission is to empower our children to achieve their greatest potential both as students and as members of their communities.</p>

            <div className="flex">
              
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Homepage