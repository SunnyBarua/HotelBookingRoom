import React, { useState } from "react"

// import { styles } from "./styles"

// import axios from 'axios'

// import { LoadingOutlined } from '@ant-design/icons'
// import Avatar from "./Avatar"
import ChatBot from "react-simple-chatbot";


const ChatBar = props => {    
  const steps = [

    {

      id: "Greet",

      message: "Hello, Welcome to our Platform",

      trigger: "Done",

    },

    {

      id: "Done",

      message: "Please enter your name!",

      trigger: "waiting1",

    },

    {

      id: "waiting1",

      user: true,

      trigger: "Name",

    },

    {

      id: "Name",

      message: "Hi {previousValue}, Please select your issue",

      trigger: "issues",

    },

    {

      id: "issues",

      options: [

        {

          value: "Order Issue",

          label: "Order Issue",

          trigger: "Order Issue",

        },

        { value: "Payment Issue", label: "Payment Issue", trigger: "Payment Issue" },
        { value: "Want to know how can you be vendor ?", label: "Want to know how can you be vendor?", trigger: "Want to know how can you be vendor" },

      ],

    },

    {

      id: "Order Issue",

      message:

        "Please email to sunnybarua.it@gmail.com with your order id",

      end: true,

    },

    {

      id: "Payment Issue",

      message:

        "Please describe us elaborately and send it  to sunnybarua.it@gmail.com ",

      end: true,

    },
    {

      id: "Want to know how can you be vendor",

      message:

        "After login you will get an option name 'Dashboard' . Click it . Then you will get to see 'Your Hotel' menu. After clicking it You will get an option name 'Setup Payouts'.Click it and add your stripe connected through platform owner.After that you will be vendor and can upload your hotel info and rent it  ",

      end: true,

    },

  ]; 

    return (
      <div className="chatbar">
        <ChatBot steps={steps}/>
      </div>
        
    )
}

export default ChatBar;