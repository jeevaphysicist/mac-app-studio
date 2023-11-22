import React, { useState , Fragment } from 'react';
import Logo from "../Assests/logo.png";
import linkedicon from "../Assests/linkedin.svg";
import youtube from "../Assests/youtube.svg";

export default function Header() {
    const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return ( 
    <Fragment>
    <header className='h-[86px] w-full top-0 fixed border bg-white z-30 border-b-1 pt-2 '>
            <div className='px-4' >
                   <div className='flex items-center '>
                    <div className='block lg:hidden'> 
                    
                     <button className='text-2xl focus:outline-none' onClick={toggleMenu} >
                       {isActive ? (
                                  <span className='text-3xl'>X</span>
                                   ) : (
                                   <span className='text-3xl'>&#9776;</span>
                                   )}
                      </button>
                    </div>
                     <img className='h-[26px] m-auto lg:ml-[50px] xl:ml-[100px]' src={Logo}  />
                    
                     <div className=' hidden lg:block'>
                       <div className='flex text-sm  font-semibold xl:mr-[100px] p-4 text-black gap-10'>
                       <div className=' '>Who we are?</div> 
                      <div> What we do?</div> 
                      <div>How we do it?</div> 
                      <div>Success Stories</div> 
                      <div>For Enterprises</div> 
                       <button className='p-2 bg-black text-white'>Get a Proposal</button>
                       </div>
                      
                     </div>
                   </div>
            </div>

            {
              isActive && 
              <div className={`${ isActive ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
                                            h-screen transition-transform ease-in-out duration-300 mt-10 w-full bg-white px-4`}>
               
            
              <div className='flex flex-col text-md   font-semibold text-gray-800 gap-2 p-4'>
                       
                      <div> What we do?
                        <div className='flex flex-col gap-1 pt-2 mb-4'>
                        <div className='text-sm font-normal'>App Development</div>
                        <div className='text-sm font-normal'>Technology Consulting</div>
                        <div className='text-sm font-normal'>Research and Development</div>
                        </div>
                        </div> 
                      <div>How we do it?</div> 
                      <div>Success Stories</div> 
                      <div>For Enterprises</div> 
                      <div>Who We are ?</div> 
                      <div>Contant US</div> 
                      <div>Careers</div> 

                      <div className='my-4'>
                         <div>FOLLOW US</div>
                         <div className='flex gap-4 mt-2'>
                           <img src={linkedicon} alt="linkedin.." />
                           <img src={youtube} alt="youtube.." />
                         </div>
                      </div>
                       <button className='p-2 text-xl w-60 bg-black text-white'>Get a Proposal</button>
                       </div>
            </div>
          
            }

    </header>


    </Fragment>
  )
}
