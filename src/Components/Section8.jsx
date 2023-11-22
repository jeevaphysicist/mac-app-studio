import React from 'react';
import SEVENyear from "../Assests/achive_img.png"

const Section8 = () => {
  return (
    <div className='  pt-10'>
         <div>
            <div className="grid grid-cols-8 px-10 xl:px-40">
                <div className='col-span-12 lg:col-span-4 m-auto'>
                    <img src={SEVENyear} className='h-[350px]' alt="" />
                </div>
                <div className='col-span-12 lg:col-span-4'>
                     <div className='text-xl xl:text-3xl text-left'> <span className='font-bold'>7 years in</span>, here is what we have achieved</div>
                     <div className='grid grid-cols-12  py-6 mx-3'>
                         <div className='border col-span-12 lg:col-span-4 py-4 my-3 px-3 mx-3 m-auto'>
                            <div className='text-4xl font-bold'>20+</div>
                            <div className='text-lg'>Multi-Million Dollar Startups</div>
                         </div>
                         <div className='border col-span-12 lg:col-span-4 py-4 my-3 px-3 mx-3 m-auto'>
                            <div className='text-4xl font-bold'>150+</div>
                            <div className='text-lg'>Projects Completed</div>
                         </div>
                          <div className='border col-span-12 lg:col-span-4 py-4 my-3 px-3 mx-3 m-auto'>
                            <div className='text-4xl font-bold'>275</div>
                            <div className='text-lg'>Entrepreneurs Consulted Worldwide</div>
                         </div>
                         <div className='border col-span-12 lg:col-span-4 py-4 my-3 px-3 mx-3 m-auto'>
                            <div className='text-4xl font-bold'>120+</div>
                            <div className='text-lg'>Apps and growing</div>
                         </div>
                         <div className='border col-span-12 lg:col-span-4 py-4 my-3 px-3 mx-3 m-auto'>
                            <div className='text-4xl font-bold'>4 Million+</div>
                            <div className='text-lg'>Daily Users across the Globe</div>
                         </div>
                         <div className='border col-span-12 lg:col-span-4 py-4 my-3 px-3 mx-3 m-auto'>
                            <div className='text-4xl font-bold'>125 Million+</div>
                            <div className='text-lg'>Daily Transactions</div>
                         </div>
                        
                     </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Section8