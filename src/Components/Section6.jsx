import React from 'react';
import GM from "../Assests/godmusic.png";
import God_Music from "../Assests/codmusic.svg";
import sarvaimg from "../Assests/sarvaimg.png";
import Sarvalogo from "../Assests/sarva_logo.svg";
import { Swiper , SwiperSlide} from "swiper/react";
import { Navigation  } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation"



const Section6 = () => {
  return (
    <div className=' bg-blue-100 w-[100%]'>
          <Swiper
              loop={true}
              spaceBetween={0}
              className=' h-[50%] '
              navigation={true}
              modules={[ Navigation]}
              >
                 <SwiperSlide>    
            <div className='grid grid-cols-10 py-10 xl:py-20 px-10 xl:px-40'>
             <div className='col-span-10 lg:col-span-5  text-left'>
               <div className='text-4xl  text-gray-800 font-bold'>
                 Our Recent Great Work
               </div>
               <img src={God_Music} className=' w-[300px]  py-10 ' alt="img..." />
               <div  className='text-4xl text-gray-800 py-10 '>
               Trending in <span className='text-3xl font-bold text-gray-800 '> Music Category </span> at Google play store
               </div>
             </div>
             <div className='col-span-10 lg:col-span-5 text-left'>
                <img src={GM} className=' ' alt='img...' />
             </div>
             {/* <div className="py-20 px-40">
            <div className='flex flex-row'> 
            <div className=' text-5xl px-[20px] '><span className='border border-black rounded-full w-16 h-16 mt-4 px-4'>&lt;</span></div>
            <div className='text-5xl px-[20px]'><span>________</span></div>
            <div className=' text-5xl px-[20px]'> <span  className='border border-black rounded-full w-16 h-16 mt-4 px-4'>&gt;</span></div>
            </div>
        </div> */}
        </div> </SwiperSlide>
                 <SwiperSlide>
                 <div className='grid grid-cols-10 py-20 px-5 xl:px-40'>
             <div className='col-span-10 lg:col-span-5  text-left'>
               <div className='text-4xl  text-gray-800 font-bold'>
                 Our Recent Great Work
               </div>
               <img src={Sarvalogo} className=' w-[300px]  py-10 ' alt="img..." />
               <div  className='xl:text-4xl text-gray-800 py-10 '>
               Yoga, Meditation, Sleep, Mindfulness <span className='text-3xl font-bold text-gray-800 '> Yoga for you, from India </span> 
               </div>
             </div>
             <div className='col-span-10 lg:col-span-5 text-left'>
                <img src={sarvaimg} className=' ' alt='img...' />
             </div>
             
        </div>
                 </SwiperSlide>
           </Swiper>
    
        
       
    </div>
  )
}

export default Section6