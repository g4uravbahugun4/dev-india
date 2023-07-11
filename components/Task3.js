import React from 'react';
import Link from 'next/link';
 
const Instruction = () => {
  return (
    <div className='bg-white dark:bg-gray-900'>
   
      <div className="px-4 pt-16">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className='pb-10'>
            <Link href="/"><img className='w-8 cursor-pointer' src="/images/back_arrow_icon.svg" alt="" /></Link>
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Instructions</h1>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">1. Capture {`'Before'`} Images</h2>
            <p className="mb-4 text-gray-700">
              Start by posting images of dirty places in your vicinity that you want to clean. Make sure the images clearly
              show the dirt or garbage in the area. For best results, follow these guidelines:
            </p>
            <div className="flex justify-center">
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
            </div>
          </div>
          <div className="flex justify-end mt-10">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default Instruction;