import Image from 'next/image'
import { Inter } from 'next/font/google'
import Mapping from '@/components/Mapping'
import Growing from '@/components/Growing'
import Cleaning from '@/components/Cleaning'
import { RxDotFilled } from 'react-icons/rx';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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


  return (
    <>
      <Navbar />
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

        <main className=' rounded-md p-3 mt-10'>
          <h1 className='font-bold text-2xl text-white text-center tracking-wider '>TASK LIST:</h1>

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

      </div>
    </>
  )
}


