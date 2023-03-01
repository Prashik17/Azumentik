import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b
    from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg
        mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4
                border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/98770b45-8a74-49bf-bd03-40d56c5c7a21' 
                className='flex flex-col w-full md:w-1/2'
                method='POST'>
                  <input type='text' 
                     name='name' 
                     placeholder='Enter your name'
                     className='p-2 bg-transparent border-2 rounded-md 
                     text-white focus:outline-none'
                   />
                  <input type='text' 
                     name='email' 
                     placeholder='Enter your email'
                     className='my-4 p-2 bg-transparent border-2 rounded-md 
                     text-white focus:outline-none'
                   />
                   <textarea name='message' rows='10' 
                   placeholder='Enter your message'
                   className='p-2 bg-transparent border-2 rounded-md
                   text-white focus:outline-none'></textarea>

                   <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-700
                   px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                     
                </form>
                
            </div>
            <div className='grid grid-cols-4 gap-36 lg:pl-24 pt-28'>
            <div className='cursor-pointer hover:scale-105 duration-300'><FaGithub size={40}/></div>
            <div className='cursor-pointer hover:scale-105 duration-300'><FaLinkedin size={40}/></div>
            <div className='cursor-pointer hover:scale-105 duration-300'><FaInstagram size={40}/></div>
            <div className='cursor-pointer hover:scale-105 duration-300'><HiOutlineMail size={40}/></div>
            </div>
        </div>
    </div>
  )
}

export default Contact