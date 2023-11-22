import React ,{Fragment , useState ,useEffect } from 'react'

let points = [ `We are the Top Innovators in the world for 2016 and 2017 awarded by Intel` ,
`We have digitally transformed over 12+ Enterprises in our operation for over a decade`,
`We have helped over 14 multi-million dollar startups in the last two years`
]
export default function Section4() {
    const [currentPointIndex, setCurrentPointIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPointIndex((prevIndex) => (prevIndex + 1) % points.length);
    }, 2000); // Change the duration for displaying each text

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [currentPointIndex, points.length]);
  return (
    <Fragment>
          <hr  />
          <div className='py-20'>
          <div className="blinking-text-container text-center ">
     
          <div
     
              className={`blinking-text  font-bold w-90 px-10 lg:px-20`}
             style={{ fontSize: "40px" }}
           >
              {points[currentPointIndex]}
            </div>
           </div>
          </div>
          <hr  />
    </Fragment>
  )
}
