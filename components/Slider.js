import React, { useState } from 'react'
import Card from './Card'
import Track from './Track'
function Slider({slides,current,setCurrent}) {

   
  return (
   <>
   <div className='w-full relative overflow-hidden '>
    <Track current={current} slideWidth={0}>
    <ul className='flex relative list-none  md:mr-40 md:w-auto  md:p-10 p-5 w-3/4'>
     
      {slides.map((item,index)=>(
        
          <li onClick={() => {
           
          setCurrent(index) }}
         className={`${current === index ? ' p-4 min-w-full  max-w-full  px-4 md:min-w-[50%] xl:min-w-[25%] md:max-w-[50%] xl:max-w-[25%] m-5 transition-all ease-out duration-300 scale-125' :'p-4 min-w-full max-w-full  px-4 md:min-w-[33%] xl:min-w-[25%] sm:max-w-[33%]  xl:max-w-[25%] m-5 cursor-pointer opacity-30  transition-all ease-out duration-300 hover:scale-110'} `}>
            {item} 
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