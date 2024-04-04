import React from 'react';
import Header from './reusables/Header';
import Footer from './reusables/Footer';
import { Button, Carousel, Form, Input } from 'antd';
import Image from 'next/image';
import SmallCards from './reusables/SmallCards';
import { Contract, Growth, Handshake, Lesson } from '@/assets/logo';
import { Pexels1, Pexels10, Pexels11, Pexels17, Pexels14, Pexels15, Pexels18, Pexels19, Pexels2, Pexels3, Pexels6, Pexels7 } from '@/assets/images';
import HoverCards from './reusables/HoverCards';
import EventCard from './reusables/EventCard';
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";

const FormItem = Form.Item;


const imageForDisplay = [
  {image: Pexels2, text: "Events"}, 
  {image: Pexels3, text: "About Us"}, 
  {image: Pexels6, text: "Our Testimonials"}, 
  {image: Pexels7, text: "Donate"}
]


const Homepage = () => {
  
  const handleSubmit = () => {

  }

  return (
    <div>
        <Header />

        <div className="bg-secondary text-gray-700 h-fit">
          <Carousel 
            autoplay 
            dots
            nextArrow={<i className="bi bi-caret-right"></i>}
            prevArrow={<i className="bi bi-caret-left"></i>}
          >
            {imageForDisplay.map((images, index) => {
              return (
                <div className="w-full" key={index}>
                  <div 
                    style={{
                      height: 500,
                      background: `url(${images.image.src}) center center/cover no-repeat`,
                      backgroundColor: "rgba(0,0,0,0.3)",
                      backgroundBlendMode: "multiply"
                    }}
                    className="w-full h-96 flex flex-col items-center justify-center px-4 md:px-52 gap-4"
                  >
                    <h2 className="text-4xl font-bold text-secondary">{images.text}</h2>
                    <p className="text-secondary font-normal opacity-80 text-lg text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem voluptatibus temporibus, impedit doloribus libero, iure suscipit magni soluta, excepturi possimus ratione sed mollitia explicabo! Rerum nihil aut nam natus accusantium.</p>
                    <Button type="primary" className="h-10 w-36 flex items-center justify-center font-medium text-sm">Read More</Button>
                  </div>
                </div>
              )
            })}
          </Carousel>

          {/* intro page */}
          <div className="px-4 md:px-52 mt-12 text-center md:pt-8">
            <h2 className="text-center text-4xl font-bold">Welcome to </h2>
            <p className="text-primary text-center text-4xl font-bold">XYZ International School</p>
            
            <div className="w-full flex items-center justify-center">
              <hr className="w-2/5 block text-center border-2 border-primary my-4" />
            </div>

            <p className="text-gray-700 text-base opacity-80">Our mission is to empower our children to achieve their greatest potential both as students and as members of their communities.</p>

            <div className="flex flex-col md:flex-row gap-5 items-center justify-around py-8">
              <SmallCards title='Enroll' image={Contract}/>
              <SmallCards title='Teach' image={Lesson}/>
              <SmallCards title='Support' image={Handshake}/>
              <SmallCards title='Grow' image={Growth}/>
            </div>
          </div>

          <div 
            className="px-2 md:px-8 mt-12 pb-20 text-center bg-secondary flex flex-col md:flex-row items-center gap-8 justify-center"
          >
            <HoverCards 
              title='Instruction' 
              image={Pexels10.src} 
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto expedita quis ullam vero, saepe error perspiciatis enim deserunt consequatur nesciunt rem aut sed officiis repellat quas consectetur, libero vitae fugiat"
              num={1} 
            />
            <HoverCards 
              title='Resources' 
              image={Pexels18.src} 
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto expedita quis ullam vero, saepe error perspiciatis enim deserunt consequatur nesciunt rem aut sed officiis repellat quas consectetur, libero vitae fugiat"
              num={2}
            />
            <HoverCards 
              title='Leadership' 
              image={Pexels19.src} 
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto expedita quis ullam vero, saepe error perspiciatis enim deserunt consequatur nesciunt rem aut sed officiis repellat quas consectetur, libero vitae fugiat"
              num={3}
            />
          </div>

          <div
            className="px-2 md:px-16 py-12 text-center bg-white flex flex-col md:flex-row items-center gap-8 justify-center"
            // style={{
            //   height: 500
            // }}
          >
            <EventCard title="West African Council Exams" image={Pexels11.src} date="15th June" time='10:00am'/>
            <EventCard title="Summer lesson" image={Pexels14.src} date="15th June" time='10:00am'/>
            <EventCard title="Excursion" image={Pexels17.src} date="15th June" time='10:00am'/>
          </div>

          <div
            className="text-center flex flex-col items-center justify-center gap-6"
            style={{
              height: 300,
              background: `url(${Pexels2.src}) center center/cover no-repeat`,
              backgroundColor: "rgba(90,146,197,1)",
              backgroundBlendMode: "multiply"
            }}
          >
            <p className="text-secondary text-4xl font-bold">We need your support!</p>
            <p className="text-secondary text-lg font-normal w-full px-4 md:px-0 md:w-2/4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, totam facere dicta neque nisi id incidunt nam iste deleniti sapiente quam nihil, dolor molestias iusto cupiditate? Accusantium minima harum cupiditate</p>

            <Button type="primary" className="h-12 flex items-center justify-center font-semibold w-36 rounded-none">
              Donate
            </Button>
          </div>

          <div className="py-8 mx-4 md:mx-44">

            <p className="text-3xl text-primary font-bold text-center uppercase mb-8">Contact Us</p>
            <Form
                layout="vertical"
                onFinish={handleSubmit}  
            >
              <div className="flex items-center gap-4">
                  <FormItem
                      name="first_name"
                      rules={[{required: true, message: "please enter your first name"}]}
                      className="w-1/2"
                  >
                      <Input placeholder="First name"  size="large" />
                  </FormItem>

                  <FormItem
                      name="last_name"
                      rules={[{required: true, message: "please enter your last name"}]}
                      className="w-1/2"
                  >
                      <Input placeholder="Last name"  size="large"/>
                  </FormItem>
              </div>
              
              <div className="flex items-center gap-4">
                  <FormItem
                      name="email"
                      rules={[{required: true, message: "please enter your mail"}]}
                      className="w-1/2"
                  >
                      <Input placeholder="Email"  size="large"/>
                  </FormItem>

                  <FormItem
                      name="phone_number"
                      rules={[{required: true, message: "please enter your phone number"}]}
                      className="w-1/2"
                  >
                      <PhoneInput 
                          country="us"
                          placeholder='Phone'
                          inputStyle={{width: "100%"}}
                      />
                  </FormItem>
              </div>

              <FormItem
                  name="message"
                  rules={[{required: true, message: "please enter your mail"}]}
                  >
                  <Input.TextArea placeholder="message" cols={5} rows={5} size="large"/>
              </FormItem>
              
              <FormItem>
                  <Button 
                      type="primary"
                      className="h-12 flex items-center justify-center font-semibold w-36 rounded-none"
                      htmlType="submit"
                  >
                      Submit
                  </Button>
              </FormItem>
            </Form>
          </div>
        </div>

        <Footer />
    </div>
  )
}

export default Homepage