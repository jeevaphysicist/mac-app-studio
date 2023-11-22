import { useState } from 'react';
import FastTrack from "../Assests/fast_logo.png";
import Android from "../Assests/android.svg";
import Apple from "../Assests/apple.svg";
import Html from "../Assests/html.svg";
import FastTrackBanner from "../Assests/fasttrack_banner_img.png";
import Fast from './Fast';
import Howdy from "../Assests/howdy_logo.png";
import HowdyBanner from "../Assests/howdy_banner_img.png";
import Sarva from "../Assests/sarva_logo.svg";
import SarvaBanner from "../Assests/sarvaapp_image.png";
import speedLearningBanner from "../Assests/speed_banner_img.png";
import speedLearninig from "../Assests/logo (3).png";

let Data = [ 
  {
     id:1,
     image:FastTrack,
     Banner:FastTrackBanner,
     h1:`Cloud-based, end-to-end Uber-like Cab Aggregation Platform.`,
     h2:`Cloud-based, end-to-end Uber-like Cab Aggregation Platform. Fast Track is one of the best taxi service providers in India. They provide both out-station taxi booking and local cab services. They operate a large network with offices in all major cities 
     of Tamil Nadu. They have 10,000 professional drivers covering 9,000+ routes having a customer base of 15 Million users`,
     question:`What we achieved?`,
     answer:`We created a reliable, scalable, and modular cab management platform with apps for users, drivers, owners, and board of directors.`
  },
  {
    id:2,
    image:Howdy,
    Banner:HowdyBanner,
    h1:`Hire eco friendly electric scooters for rent`,
    h2:`Howdy is an end-to-end bike rental company that is fully automated and environmentally friendly. They envisioned a system
     that allows users to pick up bikes from any hub and drop them off at any hub, which makes it simple for the end riders.`,
    question:`What we achieved?`, 
    answer:`Created an IOT based application where the entire
     bike operation like start, stop, speed control, remote immobilization can be controlled via the app.`
 },
 {
  id:3,
  image:Sarva,
  Banner:SarvaBanner,
  h1:`Robust and seamless system to support 1000+ yoga videos`,
  h2:`Sarva is a contemporary yoga app with an established international presence, 
  and they needed a robust system to support their backend. We designed and provided a seamless experience for their users.`, 
  question:`What we achieved?`,
  answer:`A robust backend system that supports AWS for seamless integration.`
},
{
  id:4,
  image:speedLearninig,
  Banner:speedLearningBanner,
  h1:`India’s #1 NEET Training app`,
  h2:`Speed Medical Institute has over 20 centers and has trained over 1 Lakh students all over the country. 
  The end-to-end app-based digital content delivery and learning platform helps Speed students to study anywhere, anytime, and on any device.`, 
  question:`What we achieved?`,
  answer:`A digital institute with 1000+ e-learning content, Realtime Mock exams, and All India Rankings all in one place.`
}

]

const Section7 = () => {
  const [activeTab, setActiveTab] = useState(2); 
  const [data,setData] = useState(Data[0]);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
    let dataindex = tabNumber -1 ;
        dataindex = Data[dataindex];
        console.log("data",dataindex);
    setData(dataindex);
  };
console.log("data",data);
  return (
    <div className='pt-20 '>
      
        <div className='text-lg xl:text-4xl font-bold text-center py-3'>Powering innovations worldwide</div>
        <div className='text-sm xl:text-xl  text-center py-3'>Bring your ideas to life through great expertise and consultations</div>
        <div className="grid grid-cols-8 container py-5 px-5 xl:px-40 text-center m-auto divide-y divide-gray-300 my-3">
             <div className={`col-span-8 md:col-span-2 py-3 px-3 border text-center m-3 ${
               activeTab === 1 ? ' border-b-3 border-gray-700 ' : ''
                }`} onClick={() => handleTabClick(1)}>
               <div className='text-lg xl:text-xl'>IT CONSULTING</div>
               <div className='text-lg xl:text-xl font-bold'>FASTTRACK</div>
              
             </div>
             <div className={`col-span-8 md:col-span-2 py-3 px-3 border text-center m-3 ${
               activeTab === 2 ? ' border-b-3 border-gray-700 ' : ''
                }`} onClick={() => handleTabClick(2)}>
              <div className='text-lg xl:text-xl'>IOT APPLICATION</div>
              <div className='text-lg xl:text-xl font-bold'>HOWDY</div>
              
             </div>
             <div className={`col-span-8 md:col-span-2 py-3 px-3 border text-center m-3 ${
               activeTab === 3 ? ' border-b-3 border-gray-700 ' : ''
                }`} onClick={() => handleTabClick(3)}>
             <div className='text-lg xl:text-xl'>ON DEMAND APP</div>
             <div className='text-lg xl:text-xl font-bold'>SARVA</div>
             
             </div>
             <div className={`col-span-8 md:col-span-2 py-3 px-3 border text-center m-3 ${
               activeTab === 4 ? ' border-b-3 border-gray-700 ' : ''
                }`} 
              onClick={() => handleTabClick(4)}>
             <div className='text-lg xl:text-xl'>DIGITAL TRANSFORMATION</div>
             <div className='text-lg xl:text-xl font-bold'>SPEED LEARNING APP</div>
             </div>
             
        </div>
        <Fast data={data}/>
        <hr className='mx-10 lg:mx-40'/>
        

    </div>
  )
}

export default Section7