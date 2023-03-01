import React from 'react'
import broad1 from '../Assets/portfolio/broad1.png'
import broad2 from '../Assets/portfolio/broad2.png'
import broad3 from '../Assets/portfolio/broad3.png'


const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: broad1
        },
        {
            id: 2,
            src: broad2
        },
        {
            id: 3,
            src: broad3
        },
       
    ]
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black
    to-gray-800 w-full text-white md:h-screen '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Services :</p>
                <p className='py-6'>Services We Are Offering :</p>
            </div>

        
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8
            px-12 sm:px-0'>
                 {
                portfolios.map(({id,src})=>(
                    <div className='shadow-md shadow-gray-600 rounded-lg '>
                    <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        
                    </div>
                </div>
                ))
            }
               
            </div>
        </div>
    </div>
  )
}

export default Portfolio