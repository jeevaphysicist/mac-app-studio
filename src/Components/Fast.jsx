import React from 'react';
import FastTrack from "../Assests/fast_logo.png";
import Android from "../Assests/android.svg";
import Apple from "../Assests/apple.svg";
import Html from "../Assests/html.svg";
import FastTrackBanner from "../Assests/fasttrack_banner_img.png";

export default function Fast({data}) {
    console.log(data);
  return (
    <div className="grid grid-cols-8 container px-5 xl:px-40 text-center my-5 m-auto">
            <div className="col-span-8 xl:col-span-4 py-3 px-3 m-3">
              <img src={data.image} alt="FastTrack..." className='h-[40px]' />
              <div className='text-left py-3 text-lg xl:text-2xl font-bold'>{data.h1}</div>
              <div className='text-left py-3 text-sm xl:text-lg '>{data.h2}
              </div>
              <div >
                  <div className='text-sm xl:text-lg text-left'>Platforms developed :</div>
                  <div className='flex py-3'>
                  <div className='flex gap-2'>
                          <img src={Android} alt="Android..." className='h-[25px] w-[25px]' /> 
                          <span className='m-auto'>Android&nbsp;&nbsp; <span className=' text-gray-500'>|</span> &nbsp; </span>
                       </div>
                       <div className='flex gap-2'>
                          <img src={Apple} alt="Apple..."  className='h-[25px] w-[25px]' /> 
                          <span className='m-auto'>IOS&nbsp;&nbsp; <span className=' text-gray-500'>|</span> &nbsp; </span>
                       </div>
                       <div className='flex gap-2'>
                          <img src={Html} alt="Web..."  className='h-[25px] w-[25px]' /> 
                          <span className='m-auto'>Web</span>
                       </div>
                       
                  </div>
              </div>
              <div className='text-left bg-gray-50'>
                  <div className=' px-10 py-5'>
                     <div className='text-lg font-semibold py-2'>{data.question}</div>
                     <div className='text-2xl font-bold py-2'>{data.answer}
                     </div>
                     <div className='text-lg font-semibold py-2'>Read more 	&#8594;</div>
                  </div>
              </div>
            </div>
            <div className="col-span-8 xl:col-span-4 py-3 px-3 m-3 ">
                  <img src={data.Banner} alt="fasttrack..." />
            </div>
            
        </div>
  )
}
