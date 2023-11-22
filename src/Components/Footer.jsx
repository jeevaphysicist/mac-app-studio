import Logo from '../Assests/logo.png';
import linkedin from "../Assests/linkedin.svg";
import youtube from "../Assests/youtube.svg";
import { Fragment } from 'react';

const Footer = () => {
  return (
    <Fragment>
    <div className='mx-10 lg:mx-20 xl:mx-40 '>
          <hr/>
        <div className='py-10'>
           <img src={Logo} className='h-[26px]' alt="Logo..." />
           <div className="grid grid-cols-12 text-left  font-semibold">
                 <div className=" col-span-12 lg:col-span-4 pt-10">
                    <div>What we do?</div>
                    <div>App Development</div>
                    <div>Technology Consulting</div>
                    <div>Research and Development</div>   
                 </div>
                 <div className=" col-span-12 lg:col-span-4 pt-10">
                    <div>How we do it?</div>
                    <div>Success Stories</div>
                    <div>For Enterprises</div>
                    <div>Who we are?</div>
                    <div>Contact Us</div>
                    <div>Careers</div>
                    <div>Accelerator</div>              
                 </div>
                 <div className=" col-span-12 lg:col-span-4 pt-10">                    
                 <div>FOLLOW US</div>
                 <div className='flex gap-4 py-2 m-xuto'>
                    <img src={linkedin} alt="linkedin" />
                    <img src={youtube} alt="youtube" />
                 </div>
                 </div>
           </div>
        </div>
       
      <div>

      </div>
      <hr className='mb-5'/>
      
    </div>
    <div className=' h-[50px] text-center m-auto'> MacAppStudio © Copyright 2023 | All Rights Reserved.</div>
    </Fragment>
  )
}

export default Footer