import GmClient from '../Assests/godmusic_client.png';
import GM from "../Assests/godmusic1.svg"


const section13 = () => {
  return (
    <div className='bg-gray-100'>
        <div className='mx-10 lg:mx-20 xl:mx-40 pt-10 pb-0 xl:py-20'>
        <div className="grid grid-cols-10">
              <div className="col-span-10 lg:col-span-5">
                   <img src={GM} className="mb-5"   />
                   <div className='pb-10 text-lg xl:text-xl'>"They have a tremendous ability to understand your vision behind the project and they become 
                        part of your team while working on your project. They have exceptional technological capabilities."
                    </div>
                    <div className='text-xl xl:text-2xl font-bold pb-5'>Joel Thomasraj</div>
                    <div className='text-lg xl:text-xl pb-4'>Founder, God Music</div>
              </div>
              <div className="col-span-10 lg:col-span-5">
                <div className='lg:relative'>
                <img src={GmClient} className='lg:absolute w-[400px] lg:w-[320px] xl:w-[410px] lg:-top-[55px] xl:-top-[120px] m-auto'  /> 
                </div>
                
              </div>
        </div>
        </div>
         
    </div>
  )
}

export default section13