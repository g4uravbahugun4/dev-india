import React, { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card';
import Slider from '@/components/Slider';
import { HiChevronRight } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";
function Mapping() {

const[slideIndex,setSlideIndex]=useState(1)
  const handleNextSlide = () => {
    setSlideIndex(prevIndex => (prevIndex < slides.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const handlePrevSlide = () => {
    setSlideIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

let arr= 
[
{a:"https://media.istockphoto.com/id/639426686/photo/asian-little-girl-helping-his-father-to-plant-the-tree.jpg?s=612x612&w=0&k=20&c=PdhVJdR7jnM7VqRuW-JZXuva5jhBa0zqUPy_aGVvgbM=",
b:"https://media.istockphoto.com/id/639426686/photo/asian-little-girl-helping-his-father-to-plant-the-tree.jpg?s=612x612&w=0&k=20&c=PdhVJdR7jnM7VqRuW-JZXuva5jhBa0zqUPy_aGVvgbM="},
 
{a:" https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
b: " https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
];

  const slides = [<Card  />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />]

  return (
   <>
    <Navbar/>
    
    <div className='bg-gray-900  pt-28 p-3'>
        {/* <section class=" pt-20 pb-10 lg:pt-[120px] w-3/4 flex min-w-full max-w-full overflow-x-auto lg:pb-20  "> */}
     
      <Slider slides={slides} current={slideIndex} setCurrent={setSlideIndex}/>
      <div className='flex justify-around'>
      <HiChevronLeft onClick={handlePrevSlide} className='cursor-pointer' size={80} />
      <HiChevronRight onClick={handleNextSlide} className='cursor-pointer' size={80}/>
      </div>
     
      <h1 className='text-center text-xl p-3'>Your Mapping Gallery</h1>
      <div className='mt-4 cursor-pointer w-4/5 grid grid-cols-3 p-2 bg-slate-800 rounded-lg m-auto'>       
          <img className='p-3 rounded-3xl' src={arr[1].a} />

          <img className='p-3 rounded-3xl' src='https://media.istockphoto.com/id/639426686/photo/asian-little-girl-helping-his-father-to-plant-the-tree.jpg?s=612x612&w=0&k=20&c=PdhVJdR7jnM7VqRuW-JZXuva5jhBa0zqUPy_aGVvgbM=' />

                  <img className='p-3 rounded-3xl' src='https://media.istockphoto.com/id/639426686/photo/asian-little-girl-helping-his-father-to-plant-the-tree.jpg?s=612x612&w=0&k=20&c=PdhVJdR7jnM7VqRuW-JZXuva5jhBa0zqUPy_aGVvgbM=' />

                  <img className='p-3 rounded-3xl' src='https://media.istockphoto.com/id/639426686/photo/asian-little-girl-helping-his-father-to-plant-the-tree.jpg?s=612x612&w=0&k=20&c=PdhVJdR7jnM7VqRuW-JZXuva5jhBa0zqUPy_aGVvgbM=' />

                  <img className='p-3 rounded-3xl' src='https://media.istockphoto.com/id/639426686/photo/asian-little-girl-helping-his-father-to-plant-the-tree.jpg?s=612x612&w=0&k=20&c=PdhVJdR7jnM7VqRuW-JZXuva5jhBa0zqUPy_aGVvgbM=' />

                  <img className='p-3 rounded-3xl' src='https://media.istockphoto.com/id/639426686/photo/asian-little-girl-helping-his-father-to-plant-the-tree.jpg?s=612x612&w=0&k=20&c=PdhVJdR7jnM7VqRuW-JZXuva5jhBa0zqUPy_aGVvgbM=' />
        </div>
    
    </div>
    </>
  )
}

export default Mapping