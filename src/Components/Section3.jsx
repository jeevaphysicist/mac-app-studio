import React ,{Fragment} from 'react';
import YourAppHere from "../Assests/Yourapphere.png";

export default function Section3() {
  return (
    <Fragment>
        <div className='px-10 xl:px-60  py-20'>
         <div className='font-bold text-center text-3xl xl:text-5xl'>Your dream made a reality, on any platform!</div>
         <div className=' text-center pb-10 text-xl xl:text-3xl'>Having built over <b>120+ apps</b> on almost every single platform and device, we can make your dream a reality</div>
         <div>
            <img src={YourAppHere} alt="YourAppHere..." />
         </div>
         </div>
    </Fragment>
  )
}
