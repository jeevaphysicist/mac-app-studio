import React ,{ useState , useEffect } from 'react';
import MindPartner from "../Assests/mind_partner_images.png";
import partner1 from "../Assests/partner_icon02 (1).svg";
import partner2 from "../Assests/partner_icon02.svg";

let images =[partner1,partner2]

const Section10 = () => {
  const [currentPointIndex, setCurrentPointIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPointIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change the duration for displaying each text

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [currentPointIndex, images.length]);
  return (
    <div className='mx-10 lg:mx-20 xl:mx-40 py-10 xl:py-20'>
        <div className='grid grid-cols-10'>
            <div className="col-span-12 lg:col-span-5 xl:py-10">
            <div className='text-4xl font-bold my-5'>We work with great minds like you</div>
            <div className='text-lg my-3 '>We are very selective about who we work or partner with. We have worked with small startups
             and huge corporations but we only do work that excites us and with people who are as passionate as we are.
            </div>
           
               
            <div className='py-5'>
            <div className=" text-center ">
     
          <div     
             className={`blinking-text  font-bold `}
           >
             <img src={images[currentPointIndex]} />
            </div>
           </div>
           </div>
               
            
            </div>

            <div className="col-span-12 lg:col-span-5 px-10 xl:py-10 text-center ">
                   <img src={MindPartner} className='w-100 m-auto' alt="mind partner..." />
            </div>

        </div>
        
    </div>
  )
}

export default Section10