import React from 'react';
import WallFrameicn from "../Assests/wall_fame_icon.svg"

const Section11 = () => {
  return (
    <div className='bg-blue-50'>
        <div className='mx-10 lg:mx-20 xl:mx-40 py-10 xl:py-20'>
            <img src={WallFrameicn} alt="WallFrameICon..." />
            <div className=' text-4xl lg:text-6xl font-bold my-5'>Wall of Fame</div>
            <div className='text-xl lg:text-3xl'>Here is a list of <span className='font-bold'>15+ projects</span>  which inspired us and touched a million lives</div>
        </div>
    </div>
  )
}

export default Section11