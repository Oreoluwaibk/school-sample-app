import React from 'react'
import { Form, Input, Button } from 'antd';
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";

const FormItem = Form.Item;


const ContactForm = () => {

    const handleSubmit = () => {

    }

  return (

    <div>
         <Form
            layout="vertical"
            onFinish={handleSubmit}
            
        >
            <div className="flex items-start g-4">
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
            
            <div>
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
                >
                    <PhoneInput 
                        country="us"
                        placeholder='Phone'
                    />
                </FormItem>
            </div>

            <FormItem
                name="message"
                rules={[{required: true, message: "please enter your mail"}]}
                >
                <Input.TextArea placeholder="message" cols={10} rows={10} size="large"/>
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