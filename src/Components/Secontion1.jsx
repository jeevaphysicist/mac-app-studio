import React, { useState, useEffect, Fragment } from 'react';
import Rocket from "../Assests/Rocket-smooth.gif";
// import './BlinkingText.css'; // Import a CSS file for styling

const BlinkingText = () => {
  const points = [
    "Let's confidently scale your business process worldwide",
    "Let's digitally transform your organization to the next level",
    "Let's seamlessly take your app idea to the global market"
  ];

  const [currentPointIndex, setCurrentPointIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPointIndex((prevIndex) => (prevIndex + 1) % points.length);
    }, 2000); // Change the duration for displaying each text

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [currentPointIndex, points.length]);



  return (
    <Fragment>
      <div className="grid grid-cols-10">
         <div className="col-span-10 lg:col-span-5 flex flex-col items-center m-auto p-10 ">
              <div className='text-4xl xl:text-5xl font-bold mb-8'>
                 {points[currentPointIndex]}
              </div>
              <div className=' text-left mt-8'>
                <button className='text-2xl px-10 py-2 font-semibold bg-black text-white'> Get a Proposal </button>
              </div>
         </div>
         <div className="col-span-10 lg:col-span-5 m-auto">
               <img src={Rocket}/>
         </div>
      </div>

    </Fragment>
  );
};

export default BlinkingText;
