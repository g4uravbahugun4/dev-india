import React, { useState } from 'react'
import Link from 'next/link'
import axios from "axios";
import baseUrl from "../utils/baseUrl";

import { parseCookies } from "nookies";
import Navbar from '@/components/Navbar'
import Card from '@/components/Card';
import Slider from '@/components/Slider';
import { HiChevronRight } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";
function Mapping({user,postsData}) {
  const[post,setPost]=useState(postsData||[])
  const[img,setImg]=useState(2)
const[slideIndex,setSlideIndex]=useState(2)
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

  const slides = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  return (
   <>
    <Navbar user={user}/>
    
    <div className='bg-gray-900  pt-28 p-3'>
        {/* <section class=" pt-20 pb-10 lg:pt-[120px] w-3/4 flex min-w-full max-w-full overflow-x-auto lg:pb-20  "> */}
     
      <Slider slides={post} setImg={setImg} current={slideIndex} setCurrent={setSlideIndex}/>
      <div className='flex justify-around'>
      <button onClick={handlePrevSlide} className='cursor-pointer' >
       <a href={`#${slideIndex}`}>left</a> </button>
      <button onClick={handleNextSlide} className='cursor-pointer' >
       <a href={`#${slideIndex}`}>right</a> </button>
      </div>
     
      <h1 className='text-center text-xl p-3'>Your Mapping Gallery</h1>
      <div className='mt-4 cursor-pointer w-4/5 grid grid-cols-3 p-2 bg-slate-800 rounded-lg m-auto'>       
          <img className='p-3 rounded-3xl' src={post[img]?.a} />

          <img className='p-3 rounded-3xl' src={post[img]?.b}  />

                  <img className='p-3 rounded-3xl' src={post[img]?.c}  />

                  <img className='p-3 rounded-3xl' src={post[img]?.d}  />

                  <img className='p-3 rounded-3xl' src={post[img]?.e}  />

                  <img className='p-3 rounded-3xl'src={post[img]?.f}  />
        </div>
    
    </div>
    </>
  )
}
export const getServerSideProps = async ctx => {
  try {
   
    const { token } = parseCookies(ctx);
     
    const getFollowingData = "cleaning";

    const res = await axios.get(`${baseUrl}/api/task`, {
      headers: { Authorization: token },
      params: { getFollowingData }
      
    });

    return { props: { postsData: res.data } };
  } catch (error) {
    return { props: { errorLoading: true } };
  }
};

export default Mapping