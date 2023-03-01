import React from 'react'

const logIn = () => {
  return (
    <div className='flex justify-center items-center'>
    <form
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
    
       <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-700
       px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Log In</button>
         
    </form>
</div>
  )
}

export default logIn
