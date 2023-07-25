import Image from 'next/image'
import { Inter } from 'next/font/google'
import Mapping from '@/components/Mapping'
import Growing from '@/components/Growing'
import Cleaning from '@/components/Cleaning'
import { RxDotFilled } from 'react-icons/rx';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { HiSwitchHorizontal } from "react-icons/hi";
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Post from '@/components/Post'

import { FaHeart } from "react-icons/fa";
import Donation from '@/components/Donation'


export default function Home({user}) {
  const slides = [<Mapping />, <Growing />, <Cleaning />]
  const [currentIndex, setCurrentIndex] = useState(0);


  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const[list,setList]=useState("task")
 const[showForm,setShowForm]=useState(false);
  const [showDonation, setShowDonation] = useState(false);
  return (
    <>
    <div>
      <Navbar user={user}/>
      <div className='bg-gray-900 h-screen pt-28 '>

        <div className='sm:w-4/5 sm:m-auto sm:p-3 sm:border sm:hidden sm:justify-evenly sm:bg-white w-full p-3 m-auto relative block group'>

          {slides[currentIndex]}

          <div className='block sm:hidden absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer '>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>

          <div className='block sm:hidden absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2  text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>

        </div>

        <div className='sm:w-4/5 sm:bg-slate-700  sm:pt-7 sm:pb-7 sm:p-3  sm:flex sm:justify-evenly  w-full p-3 m-auto relative group hidden rounded-md'>
          <Mapping />
          <Cleaning />
          <Growing />
        </div>

        <main className=' rounded-md p-3 mt-10 bg-[#ffffff2c]'>
          
        <div className='flex justify-center items-center'>          
        <div onClick={() => { setList("task") }} className={`${list == 'task' ? 'font-bold text-3xl text-[#dcff2b]    text-center  p-3' :'font-semibold text-sm text-white text-center tracking-wider  hover:scale-110 transition-all  cursor-pointer p-3  hover:text-[#eeff97]'} `}>TASK LIST</div>

        
        
        <HiSwitchHorizontal className='' size={50}/>
        
         <div onClick={() => { setList("project") }} className={`${list == 'project' ? 'font-bold text-3xl  text-[#dcff2b]  text-center  p-3' :'font-semibold text-sm text-white text-center tracking-wider hover:scale-110 transition-all group cursor-pointer p-3 hover:text-[#ebff89]'} `}>
          PROJECT LIST</div>

        </div>
        
          <div className='flex  flex-wrap mt-3 '>

            <Link className='w-1/4 rounded-xl' href={{ pathname: '/tasks', query: { name: 'a' }, }}>

              <div href="#_" className="p-3 m-2  rounded-xl bg-[#407364] text-gray-200 font-bold text-xl text-center  overflow-hidden group  relative hover:bg-gradient-to-r  hover:from-[rgb(10,98,69)] hover:to-[rgb(16,185,129)]  hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">

                <ul role="list" class=" h-full divide-y divide-gray-200 dark:divide-gray-700">
                  <li class="">
                    <div class="flex items-center space-x-3">
                      <div class="flex-shrink-0">
                        <img class="w-20 h-20 rounded-full" src="https://thumbs.dreamstime.com/z/people-clean-dirty-city-park-nature-save-ecology-rescue-young-volunteer-team-working-people-cleaning-dirty-city-park-nature-save-226221872.jpg" alt="Neil image" />
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class=" font-semibold text-gray-900 truncate dark:text-white">
                          Task1
                        </p>

                      </div>
                      <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                        <span class="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                        Complete
                      </span>
                    </div>
                  </li>
                  {/* <li class="py-3 sm:py-4">
                    <div class="flex items-center space-x-3">

                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
                          Cleaning
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          Status
                        </p>
                      </div>
                      <span class="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                        <span class="w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
                        Incomplete
                      </span>
                    </div>
                  </li> */}
                </ul>
                <span class="absolute right-0 w-1/3 h-64 -mt-28 transition-all duration-1000 transform translate-x-64 bg-white opacity-10 rotate-12 group-hover:-translate-x-[31rem] ease">
                </span>

              </div>

            </Link>


            <Link className='w-1/4 rounded-xl' href={{ pathname: '/tasks', query: { name: 'b' }, }}>

              <div href="#_" className="p-3 m-2  rounded-xl bg-[#407364] text-gray-200 font-bold text-xl text-center  overflow-hidden group  relative hover:bg-gradient-to-r  hover:from-[rgb(10,98,69)] hover:to-[rgb(16,185,129)]  hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">

                <ul role="list" class=" h-full divide-y divide-gray-200 dark:divide-gray-700">
                  <li class="">
                    <div class="flex items-center space-x-3">
                      <div class="flex-shrink-0">
                        <img class="w-20 h-20 rounded-full" src="https://thumbs.dreamstime.com/z/people-clean-dirty-city-park-nature-save-ecology-rescue-young-volunteer-team-working-people-cleaning-dirty-city-park-nature-save-226221872.jpg" alt="Neil image" />
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class=" font-semibold text-gray-900 truncate dark:text-white">
                          Task2
                        </p>

                      </div>
                      <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                        <span class="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                        Complete
                      </span>
                    </div>
                  </li>
                  {/* <li class="py-3 sm:py-4">
                    <div class="flex items-center space-x-3">

                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
                          Cleaning
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          Status
                        </p>
                      </div>
                      <span class="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                        <span class="w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
                        Incomplete
                      </span>
                    </div>
                  </li> */}
                </ul>
                <span class="absolute right-0 w-1/3 h-64 -mt-28 transition-all duration-1000 transform translate-x-64 bg-white opacity-10 rotate-12 group-hover:-translate-x-[31rem] ease">
                </span>

              </div>

            </Link>


            <Link className='w-1/4 rounded-xl' href={{ pathname: '/tasks', query: { name: 'c' }, }}>

              <div href="#_" className="p-3 m-2  rounded-xl bg-[#407364] text-gray-200 font-bold text-xl text-center  overflow-hidden group  relative hover:bg-gradient-to-r  hover:from-[rgb(10,98,69)] hover:to-[rgb(16,185,129)]  hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">

                <ul role="list" class=" h-full divide-y divide-gray-200 dark:divide-gray-700">
                  <li class="">
                    <div class="flex items-center space-x-3">
                      <div class="flex-shrink-0">
                        <img class="w-20 h-20 rounded-full" src="https://thumbs.dreamstime.com/z/people-clean-dirty-city-park-nature-save-ecology-rescue-young-volunteer-team-working-people-cleaning-dirty-city-park-nature-save-226221872.jpg" alt="Neil image" />
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class=" font-semibold text-gray-900 truncate dark:text-white">
                          Task3
                        </p>

                      </div>
                      <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                        <span class="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                        Complete
                      </span>
                    </div>
                  </li>
                  {/* <li class="py-3 sm:py-4">
                    <div class="flex items-center space-x-3">

                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
                          Cleaning
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          Status
                        </p>
                      </div>
                      <span class="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                        <span class="w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
                        Incomplete
                      </span>
                    </div>
                  </li> */}
                </ul>
                <span class="absolute right-0 w-1/3 h-64 -mt-28 transition-all duration-1000 transform translate-x-64 bg-white opacity-10 rotate-12 group-hover:-translate-x-[31rem] ease">
                </span>

              </div>

            </Link>        
          </div>
          </main>

        {showForm && (
          <div className="fixed inset-0 z-20 bg-black bg-opacity-75 flex justify-center items-center">
            <div className="bg-white  rounded-md shadow-md" style={{  width:"50%" }}>
              <Post setShowForm={setShowForm} />
            </div>
          </div>
        )}  

        {showDonation&&(
            <div className="fixed inset-0 z-20 bg-black bg-opacity-75 flex justify-center items-center">            
              <div className="bg-white  rounded-md shadow-md" style={{ width: "30%" }} >
                <Donation setShowDonation={setShowDonation} />
              </div>
              </div>
        )}

        <div className='flex justify-end p-5'>
          <div class="relative p-5 cursor-pointer   px-6 py-3 font-bold text-white rounded-lg group" onClick={()=>{setShowForm(true)}}>
            <span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
            <span class="relative">Contribute Task</span>
          </div>
        </div>
     
 
      </div>
      </div>
      <div onClick={()=>{setShowDonation(true)}} className="fixed top-1/2 right-0 transform -translate-y-1/2 w-24 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-l-lg flex items-center justify-center text-white font-semibold text-sm shadow-lg cursor-pointer group transition-all ease-in-out hover:w-36">
        <div className="w-0 h-0 border-r-12 border-t-12 border-transparent border-solid border-yellow-100 transform rotate-45 -mr-1"></div>
        <span className="ml-3  ">Donate for a Cause</span>
        <span className="group-hover:block hidden text-xs p-2">Become a Contributor</span>
      </div>

 


    </>
  )
}


