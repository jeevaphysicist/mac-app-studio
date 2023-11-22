import React from 'react';
import expertiseicon_1 from '../Assests/expertise_icon1.svg';
import expertiseicon_2 from '../Assests/expertise_icon2.svg';
import expertiseicon_3 from '../Assests/expertise_icon3.svg'

const Section5 = () => {
  return (
    <div className='py-20'>
        <div className='text-2xl xl:text-4xl font-bold text-center mb-5'> Our Expertise </div>
        <div className='text-lg xl:text-xl text-center mt-5'>Right from app development to scaling your organization, we have all the capabilities you need
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 mt-10 mx-10 text-center gap-10'>
            <div className='w-full'>
            <div className=' bg-gray-50  m-auto p-10'>
                <img src={expertiseicon_1} alt="img..." />
                <div className='text-left font-bold text-3xl py-3'>App Development</div>
                <div className='text-left  text-2xl py-3'>Build a secure, future-proof application through the latest technologies and enhance your user experience</div>
                <div className='text-left font-bold text-2xl py-3'>Read More <span className=' font-extrabold'> &#8594; </span></div>
            </div>          
            </div>
            <div className='w-full'>
            <div className=' bg-gray-50  m-auto p-10'>
                <img src={expertiseicon_2} alt="img..." />
                <div className='text-left font-bold text-3xl py-3'>Technology Consulting</div>
                <div className='text-left  text-2xl py-3'>Explore new opportunities, get insights and overcome your barriers by consulting with our experts</div>
                <div className='text-left font-bold text-2xl py-3'>Read More <span className=' font-extrabold'> &#8594; </span></div>
            </div>
            </div>
            <div className='w-full'>
            <div className=' bg-gray-50  m-auto p-10'>
                <img src={expertiseicon_3} alt="img..." />
                <div className='text-left font-bold text-3xl py-3'>Research and Development</div>
                <div className='text-left  text-2xl py-3'>Analyze, solve complex challenges and develop solutions that create a revolution</div>
                <div className='text-left font-bold text-2xl py-3'>Read More <span className=' font-extrabold'> &#8594; </span></div>
            </div>
            </div>

          
            
            
        </div>
</div>
    </div>
  )
}

export default Section5