import React from 'react';
import award1 from "../Assests/award01.png";
import award2 from "../Assests/award02.png";
import award3 from "../Assests/award03.png";
import award4 from "../Assests/award04.png";
import award5 from "../Assests/award05.png";
import award6 from "../Assests/award06.png";
import { Swiper , SwiperSlide} from "swiper/react";
import { Navigation  ,Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation"

const Section9 = () => {
  return (
    <div className='py-10 bg-gray-50'>
       <div className='mx-10 xl:mx-40'> 
             <div className='text-left text-lg xl:text-6xl font-bold'> Our Awards</div>
             <div className='text-left text-lg xl:text-2xl py-3 '>MacAppStudio has been recognized by Intel</div>
             <div className='block sm:hidden'>
             <div className='w-full p-10 m-auto'> 
                        <img src={award1} alt="award1..."  />
                        <div className='text-md py-5 text-center font-semibold'>Intel worldwide Top Innovator 2017</div>
                </div>
                <div className='w-full p-10'> 
                        <img src={award4} alt="award1..." />
                        <div className='text-md py-5 text-center font-semibold'>Winner of Intel Best App to stay in sync contest</div>
                </div>
                <div className='w-full p-10'> 
                        <img src={award5} alt="award1..." />
                        <div className='text-md py-5 text-center font-semibold'>Winner of Intel Best App to stay informed content</div>
                </div>
                <div className='w-full p-10'> 
                        <img src={award6} alt="award1..." />
                        <div className='text-md py-5 text-center font-semibold'>Winner of Intel Dixons Home Innovation Challenge</div>                        
                </div>
                <div className='w-full p-10'> 
                        <img src={award1} alt="award1..." />
                        <div className='text-md py-5 text-center font-semibold'>Intel worldwide Top Innovator 2016</div>                        
                </div>
                <div className='w-full p-10'> 
                        <img src={award2} alt="award1..." />
                        <div className='text-md py-5 text-center font-semibold'>Intel Blackbelt for App Development</div>
                </div>
                <div className='w-full p-10'> 
                        <img src={award3} alt="award1..." />
                        <div className='text-md py-5 text-center font-semibold'>Most Valuable Developers Award</div>
                </div>
             </div>
             <div className='hidden sm:block'> <Swiper
              loop={true}
              slidesPerView={window.innerWidth > 768 ? 4 : 2}
              spaceBetween={0}
              className=' my-5  '
            //   navigation={true}
              modules={[Autoplay , Navigation]}
              autoplay={{ delay : 4500}}
              >
                 <SwiperSlide className='w-[50px] p-10'> 
                        <img src={award1} alt="award1..."  />
                        <div className='text-md py-5 text-center font-semibold'>Intel worldwide Top Innovator 2017</div>
                </SwiperSlide>
                <SwiperSlide className='w-[50px] p-10'> 
                        <img src={award4} alt="award1..." />
                        <div className='text-md py-5 text-center font-semibold'>Winner of Intel Best App to stay in sync contest</div>
                </SwiperSlide>
                <SwiperSlide className='w-[50px] p-10'> 
                        <img src={award5} alt="award1..." />
                        <div className='text-md py-5 text-center font-semibold'>Winner of Intel Best App to stay informed content</div>
                </SwiperSlide>
                <SwiperSlide className='w-[50px] p-10'> 
                        <img src={award6} alt="award1..." />
                        <div className='text-md py-5 text-center font-semibold'>Winner of Intel Dixons Home Innovation Challenge</div>                        
                </SwiperSlide>
                <SwiperSlide className='w-[50px] p-10'> 
                        <img src={award1} alt="award1..." />
                        <div className='text-md py-5 text-center font-semibold'>Intel worldwide Top Innovator 2016</div>                        
                </SwiperSlide>
                <SwiperSlide className='w-[50px] p-10'> 
                        <img src={award2} alt="award1..." />
                        <div className='text-md py-5 text-center font-semibold'>Intel Blackbelt for App Development</div>
                </SwiperSlide>
                <SwiperSlide className='w-[50px] p-10'> 
                        <img src={award3} alt="award1..." />
                        <div className='text-md py-5 text-center font-semibold'>Most Valuable Developers Award</div>
                </SwiperSlide>
             </Swiper></div>
            
       </div>
    </div>
  )
}

export default Section9