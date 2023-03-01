import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import {Link} from 'react-scroll'
import broad from '../Assets/broad.png'

const Home = () => {
  return (
    <div 
    name="home" 
    className='h-screen w-full bg-gradient-to-b
    from-black via-black to-gray-800 '>
        
        <div className='max-w-screen-lg mx-auto flex flex-col
        items-center justify-center h-full px-2 md:flex-row '>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white '>
                    Internet Services
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>

                <div>
                  <Link to='contact' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2
                  flex items-center rounded-md bg-gradient-to-r 
                  from-cyan-500 to-blue-700 cursor-pointer'>
                    Contact us
                    <span className='group-hover:rotate-90 duration-300'>
                    <MdOutlineKeyboardArrowRight 
                    size={25}
                    className='ml-1'/>
                    </span>
                  </Link>
                  
                </div>
            </div>
            <div>
              <img 
              src={broad} 
              alt="my profile" 
              className='lg:pl-12 sm:pl-32 rounded-md sm:w-[80%]'/>
            </div>
        </div>
    </div>
  )
}

export default Home 