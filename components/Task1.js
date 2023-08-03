import React from 'react';
import Link from 'next/link';
import Form from './Form';
const Task1 = ({user}) => {
  return (
    <div className='bg-white  dark:bg-gray-900'>
   
      <div className="px-4 pt-16">
        <div className="w-11/ mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className='pb-10'>
            <Link href="/"><img className='w-8 cursor-pointer' src="/images/back_arrow_icon.svg" alt="" /></Link>
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Identify Nearest Priority Areas:</h1>
            <p className="mb-4 text-gray-700 font-semibold">
              Inspect your neighnour area ( around your residence) and click different images from different directions to confirm about your nearest cleaning priority.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">1. Instructions: </h2>
           
           
            <ul className="list-disc pl-6 mt-4 text-gray-700">
             
              <li className='p-2'>Stand at the  <span className='font-bold text-amber-600'>entance</span> of your house/building, take 3 images of the front view .Note that each image should contain the  view after the previous image with some overlaped part of previous image. Overlaping should be done keeping in mind the amount of view left to cover.(If the reamaining view is less, more overlaping. If the remaining view is large, less overlaping)  </li>
              <li className='p-2'>Stand at the <span className='font-bold text-amber-600'>entance</span> of your house/building, take image of the road left to your house/building</li>
              <li className='p-2'>Stand at the  <span className='font-bold text-amber-600'>entance</span> of your house/building,  take image of the road right to your house/building</li>           
              <li className='p-2'>Stand at the <span className='font-bold text-teal-900'>backside</span> of your house/building, take image of the road left to your house/building</li>
              <li className='p-2'>Stand at the   <span className='font-bold text-teal-900'>backside</span> of your house/building,  take image of the road right to your house/building</li>   
              <li className='p-2'>Stand at the   <span className='font-bold text-teal-900'>backside</span> of your house/building, take 3 images of the back view .Note that each image should contain the  view after the previous image with some overlaped part of previous image. Overlaping should be done keeping in mind the amount of view left to cover.(If the reamaining view is less, more overlaping. If the remaining view is large, less overlaping)  </li>
             
              <li>Ensure good lighting for better image quality.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800"> Demo: </h2>
            <p className="mb-4 text-gray-700">
              Your uploaded 9 photos would be arranged like this:
            </p>
            
            {/* <div class="container mx-auto mt-10">
              <div class="grid grid-cols-3 gap-4">
                <div class="bg-gray-200 p-4 rounded-lg shadow-md">
                  <img src="/mapping_images/1.jpg" alt="Image 1" class="w-full h-40 object-cover rounded-lg"/>
                </div>
                <div class="bg-gray-200 p-4 rounded-lg shadow-md">
                  <img src="/mapping_images/2.jpg" alt="Image 2" class="w-full h-40 object-cover rounded-lg"/>
                </div>
                <div class="bg-gray-200 p-4 rounded-lg shadow-md">
                  <img src="/mapping_images/3.jpg" alt="Image 3" class="w-full h-40 object-cover rounded-lg"/>
                </div>
                <div class="bg-gray-200 p-4 rounded-lg shadow-md">
                  <img src="mapping_images/4.jpg" alt="Image 4" class="w-full h-40 object-cover rounded-lg"/>
                </div>
                <div class="bg-gray-200 p-4 w-56 h-56 m-auto rounded-full shadow-md">
                  <div  class="  object-cover rounded-lg text-black m-auto  ">YOU ARE HERE</div>
                </div>
                <div class="bg-gray-200 p-4 rounded-lg shadow-md">
                  <img src="mapping_images/6.jpg" alt="Image 6" class="w-full h-40 object-cover rounded-lg"/>
                </div>
                <div class="bg-gray-200 p-4 rounded-lg shadow-md">
                  <img src="mapping_images/7.jpg" alt="Image 7" class="w-full h-40 object-cover rounded-lg"/>
                </div>
                <div class="bg-gray-200 p-4 rounded-lg shadow-md">
                  <img src="mapping_images/8.jpg" alt="Image 8" class="w-full h-40 object-cover rounded-lg"/>
                </div>
                <div class="bg-gray-200 p-4 rounded-lg shadow-md">
                  <img src="mapping_images/9.jpg" alt="Image 9" class="w-full h-40 object-cover rounded-lg"/>
                </div>
              </div>
            </div> */}

            <div class="container mx-auto mt-10">
              <div class="grid grid-cols-3 gap-4">
              
                <div class="bg-gray-200 sm:p-4 p-1 rounded-lg shadow-md">
                  <img src="/mapping_images/1.jpg" alt="Image 1" class="w-full h-20 sm:h-40 object-cover rounded-lg"/>
                </div>
                <div class="bg-gray-200 sm:p-4 p-1 rounded-lg shadow-md">
                  <img src="/mapping_images/2.jpg" alt="Image 2" class="w-full h-20 sm:h-40 object-cover rounded-lg"/>
                </div>
                <div class="bg-gray-200 sm:p-4 p-1 rounded-lg shadow-md">
                  <img src="/mapping_images/3.jpg" alt="Image 3" class="w-full h-20 sm:h-40 object-cover rounded-lg"/>
                </div>

              
                <div class="col-span-1 bg-gray-200 sm:p-4 p-1 rounded-lg shadow-md">
                  <div class="grid grid-rows-2 sm:gap-4 gap-0 ">
                    <img src="/mapping_images/4.jpg" alt="Image 4" class="w-full h-20 sm:h-40 object-cover rounded-lg" />
                    <img src="/mapping_images/5.jpg" alt="Image 5" class="w-full h-20 sm:h-40 object-cover rounded-lg mt-4" />
                  </div>                   
                  </div>
                  
                <div class="col-span-1 md:col-span-1 sm:w-full sm:h-full sm:m-auto sm:mt-auto rounded-md w-full h-full m-auto mt-auto ">
                  <img src='/images/location.jpg' class=" sm:m-auto sm:mt-auto mt-auto  m-auto p-1 sm:p-5 object-cover rounded-full"/>
                  </div>
                
                
                <div class="col-span-1 bg-gray-200 sm:p-4 p-1 rounded-lg shadow-md">
                    <div class="grid grid-rows-2 sm:gap-4 gap-0">
                    <img src="/mapping_images/6.jpg" alt="Image 7" class="w-full h-20 sm:h-40 object-cover rounded-lg"/>
                    <img src="/mapping_images/7.jpg" alt="Image 8" class="w-full h-20 sm:h-40 object-cover rounded-lg mt-4"/>
                        </div>
                    </div>

                    
                <div class="bg-gray-200 sm:p-4 p-1 rounded-lg shadow-md">
                  <img src="/mapping_images/8.jpg" alt="Image 9" class="w-full h-20 sm:h-40    object-cover rounded-lg"/>
                    </div>
                <div class="bg-gray-200 sm:p-4 p-1 rounded-lg shadow-md">
                  <img src="/mapping_images/9.jpg" alt="Image 10" class="w-full h-20 sm:h-40 object-cover rounded-lg"/>
                    </div>
                <div class="bg-gray-200 sm:p-4 p-1 rounded-lg shadow-md">
                  <img src="/mapping_images/10.jpg" alt="Image 11" class="w-full h-20 sm:h-40 object-cover rounded-lg"/>
                    </div>
                  </div>
                </div>
          
          </div>
         
        
            {/* <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button> */}

            <h1 className='text-black text-center font-bold text-3xl mt-10'>TASK SUBMISSION</h1>
            <div className=" ">
              {/* <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button> */}

              <div class="flex justify-center mt-8">
                <div class="rounded-lg shadow-xl bg-gray-50 lg:w-1/2">
                  <div class="m-4">
                    <label class="inline-block mb-2 text-gray-500">Upload
                      Image(jpg,png,svg,jpeg)</label>
                    <div class="flex items-center justify-center w-full">
                      <label class="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                        <div class="flex flex-col items-center justify-center pt-7">
                          <svg xmlns="http://www.w3.org/2000/svg"
                            class="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clip-rule="evenodd" />
                          </svg>
                          <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Select a photo</p>
                        </div>
                        <input type="file" class="opacity-0" />
                      </label>
                    </div>
                  </div>
                  <div class="flex p-2 space-x-4">

                    <button class="px-4 py-2 text-white bg-red-500 rounded shadow-xl">Cannel</button>
                    <button class="px-4 py-2 text-white bg-green-500 rounded shadow-xl">Upload</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
  //  <Form name={user.name} task={"cleaning"} status={"complete"} index={0}time={"0"}/>
    // </div>
 

  );
};

export default Task1;