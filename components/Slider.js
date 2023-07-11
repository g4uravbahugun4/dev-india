import React from 'react'
import Card from './Card'
import Track from './Track'
function Slider({slides,current}) {
  return (
   <>
   <div className='w-full relative overflow-hidden '>
    <Track {...{current}} slideWidth={100}>
    <ul className='flex relative list-none m-auto mr-40 p-10 '>
     
      {slides.map((item,index)=>(
        
          <li className={`${current === index ? 'p-4 min-w-full  max-w-full  px-4 md:min-w-[33%] xl:min-w-[25%] md:max-w-[33%] xl:max-w-[25%] m-5 transition-all ease-out duration-300 scale-125' :'p-4 min-w-full max-w-full  px-4 md:min-w-[33%] xl:min-w-[25%] md:max-w-[33%]  xl:max-w-[25%] m-5 opacity-30  transition-all ease-out duration-300'} `}>{item} 
          </li>
          ))
          } 
     
    </ul>
    </Track>
   </div>
   </>
   
  )
}

export default Slider