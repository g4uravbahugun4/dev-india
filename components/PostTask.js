import React from 'react'

import { useState } from "react";
import { likePost } from "../utils/postActions";

function PostTask({post,user}) {
  const [likes, setLikes] = useState(post.likes);
  const isLiked = likes.some(like => like.user === user._id);

   
  return (
   
        
       <div className='flex flex-col z-10 border-4 rounded-lg  0 relative bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-blue-900 via-gray-200 to-blue-900'>
          <div onClick={() => likePost( post._id, user._id, setLikes, isLiked ? false : true)} className={`absolute right-5 flex justify-center shadow-inner shadow-black ${isLiked?"bg-gradient-to-tr shadow-white from-transparent to-blue-900":"bg-transparent "} cursor-pointer top-3 h-8 rounded-lg w-20 `}>{isLiked?<>voted {likes.length}</>:<>vote {likes.length}</>}</div>
       <div
        
        className="absolute -z-10 -left-0  -top-5 inset-0   "
      >
        <div className=" h-5 blur-[5px]    bg-gradient-to-r  to-gray-500 from-white"></div>
        {/* <div className="blur-[106px] opacity-30 h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div> */}
      
      </div>
       <div className={"flex py-1  border-b-4  rounded-tl-lg "}>
      
      <div className=" flex  px-2 ">
        <img
          className=" rounded-full z-0  w-28 h-16   m-0.5   "
          src={post.userpicUrl }
         
            
        />
      </div>
      <div className="flex  flex-col  p-0 w-full">
        <div className="flex justify-between h-6  ">
        {/* <Link href={`#`}>  */}
        <p className=" p-1  rounded-sm  font-semibold ">
            {post?.name }
            {post?.rookies ? (
              <span className=" p-1   text-xs font-semibold ">
               - rookie
                {/* <Icon size="small" name="star" color="red" /> */}
                
              </span>
            ) : post?.elite?(
              <span className=" p-1   text-xs font-semibold ">
             elite
              {/* <Icon size="small" name="star" color="red" /> */}
              
            </span>
            //   <Icon size="small" name="star" color="yellow" />
            ) : post?.core? (
              <span className=" p-1   text-xs font-semibold ">
                core
                {/* <Icon size="small" name="star" color="red" /> */}
                
              </span>
            //   <Icon size="small" name="star" color="blue" />
            ) : post?.dev?(
               <span className=" p-1   text-xs font-semibold ">
            dev
            {/* <Icon size="small" name="star" color="red" /> */}
            
               </span>
                // <Icon size="small" name="star" color="purple" />
            
            ):post?.admin&& <span className=" p-1   text-xs font-semibold ">
          admin
            {/* <Icon size="small" name="star" color="red" /> */}
            
          </span>
            }
          </p>
          {/* </Link> */}
         
        </div>
        <div className=" flex flex-wrap py-2  text-gray-900  break-normal justify-center font-extrabold  items-center ">
          <p className="break-all font-bold text-xl ">Task - <font className="font-medium text-base">{post.taskname?post.taskname:"unknown"}</font></p>
        </div>
        
      </div>
    </div>
        <main className='w-full h-96 overflow-y-scroll'>
           <p className='break-all text-gray-900 font-medium p-5'>
       {post.text}
      
        </p>
           <div className='mt-4 cursor-pointer gap-2 w-4/5 flex sm:grid overflow-x-scroll grid-cols-2  p-2 bg-slate-800 rounded-lg m-auto'>       
            { post.picUrl.map((img,index)=>(
             
             <img
             className='w-11/12  sm:w-full min-h-[16rem] rounded-3xl'
               key={index}
             
               src={img}
               alt="PostImage"
               centered
               size="medium"
             />))}
        </div>
        </main>
        </div> 


    
  )
}

export default PostTask