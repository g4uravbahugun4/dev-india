import Link from 'next/link'
import React from 'react'

function Mapping() {
  return (
   <>
   
       <div className='cursor-pointer  sm:hover:scale-150 transition ease-in-out   duration-300  sm:w-1/4 sm:p-2 hover:p-1  sm:bg-slate-800 w-4/5 p-4  hover:bg-gradient-to-r  from-yellow-300 via-red-500 to-red-500 bg-slate-800 rounded-lg m-auto'>
        <Link href={'/mapping'}>
              <img src='https://www.planet.com/static/1fa65bb2083dc731d903d5e10072f3f8/2d264/mapping-hero%403x.jpg'/>
      </Link>
          </div>
 
   </>
  )
}

export default Mapping