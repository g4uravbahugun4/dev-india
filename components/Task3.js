import React from 'react';
import Link from 'next/link';
 
const Task3 = () => {
  return (
    <div className='bg-white dark:bg-gray-900'>
   
      <div className="px-4 pt-16">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className='pb-10'>
            <Link href="/"><img className='w-8 cursor-pointer' src="/images/back_arrow_icon.svg" alt="" /></Link>
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">  Clear Vegetation and Overgrowth:</h1>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Instructions: </h2>
            <p className="mb-4 text-gray-700">
            

              Trim overgrown vegetation that obstructs pathways or hinders the aesthetics of the environment.
              Dispose of the trimmed vegetation appropriately.
            </p>
            {/* <div className="flex justify-center">
              <img className="w-3/5 rounded-lg shadow-md" src="/images/clients/before.png" alt="Before image example" />
            </div>
            <ul className="list-disc pl-6 mt-4 text-gray-700">
              <li>Take photos from an appropriate height for a clear view.</li>
              <li>Ensure good lighting for better image quality.</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">2. Clean the Places</h2>
            <p className="mb-4 text-gray-700">
              Once you have captured the {`'Before'`} images, go ahead and clean the places you have photographed. Remove any
              garbage or dirt, and make the area as clean as possible.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">3. Capture {`'After'`} Images</h2>
            <p className="mb-4 text-gray-700">
              After cleaning the places, take another set of photos to capture the {`'After'`} images. These images should
              show the cleaned area and reflect the positive change you have made. Remember to follow the guidelines
              mentioned earlier for clear and high-quality images.
            </p>
            <div className="flex justify-center">
              <img className="w-3/5 rounded-lg shadow-md" src="/images/clients/after.png" alt="After image example" />
            </div> */}
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
   

  );
};

export default Task3;