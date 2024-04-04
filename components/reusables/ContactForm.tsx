import React from 'react'
import { Form, Input, Button } from 'antd';
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";

const FormItem = Form.Item;
type contact = {
    title: string;
}
const ContactForm = ({ title }: contact) => {

    const handleSubmit = () => {

    }
  return (

    <div>
        <p className="font-bold text-primary">{title}</p>
         <Form
            layout="vertical"
            onFinish={handleSubmit}
        >
            <FormItem
                name="name"
                rules={[{required: true, message: "please enter your full name"}]}
                >
                <Input placeholder="Full name" />
            </FormItem>

            <FormItem
                name="email"
                rules={[{required: true, message: "please enter your mail"}]}
                >
                <Input placeholder="Email" />
            </FormItem>

            <FormItem
                name="phone_number"
                rules={[{required: true, message: "please enter your phone number"}]}
                >
                <PhoneInput 
                    country="us"
                    placeholder='Phone'
                />
            </FormItem>

            <FormItem
                name="message"
                rules={[{required: true, message: "please enter your mail"}]}
                >
                <Input.TextArea placeholder="message" cols={5}/>
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
  )
}

export default ContactForm