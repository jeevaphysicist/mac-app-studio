import React ,{Fragment} from 'react';
import intel from "../Assests/intel.svg";
import apple from "../Assests/apple.svg";
import disney from "../Assests/disney.svg";
import ATt from "../Assests/ATt.svg";
import paytm from "../Assests/paytam.svg";

export default function Section2() {
  return (
    <Fragment>
        <div   className='flex flex-wrap mt-10 bg-gray-50 p-10 gap-20 items-center justify-center'>
            <div className='flex-4' ><img src={intel} alt="intel..." /></div>
            <div  className='flex-4'><img src={apple} alt="intel..." /></div>
            <div  className='flex-4'><img src={disney} alt="intel..." /></div>
            <div  className='flex-4'><img src={ATt} alt="intel..." /></div>
            <div className='flex-4' ><img src={paytm} alt="intel..." /></div>
        </div>
    </Fragment>
  )
}
