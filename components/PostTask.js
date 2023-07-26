import React from 'react'


function PostTask() {
    let post ={
        name:"name",
        rookie:"rookie",
        elite:"elite",
        core:"core",
        dev:"dev", 
        admin:"admin",
    }
    let img=["https://www.planet.com/static/1fa65bb2083dc731d903d5e10072f3f8/2d264/mapping-hero%403x.jpg",
              "https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg",
            "https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg"  ]
  return (
   
        
       <div className='flex flex-col z-10 border-4 rounded-lg  border-blue-500 relative bg-gray-800'>
        
       <div
        
        className="absolute -z-10 -left-0  -top-5 inset-0   "
      >
        <div className=" h-5 blur-[5px]    bg-gradient-to-r  to-info from-secondary"></div>
        {/* <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div> */}
      </div>
       <div className={"flex py-1  border-b rounded-tl-lg "}>
      
      <div className=" flex  px-2 ">
        <img
          className=" rounded-full z-0  w-28 h-16   m-0.5   "
          src="/44753.jpg"
        />
      </div>
      <div className="flex  flex-col  p-0 w-full">
        <div className="flex justify-between h-6  ">
        {/* <Link href={`#`}>  */}
        <a className=" p-1  rounded-sm  font-semibold ">
            {post?.name ? post?.name : <>unknow</>}
            {post?.rookie ? (
              <span className=" p-1   text-xs font-semibold ">
                rookies
                {/* <Icon size="small" name="star" color="red" /> */}
                |
              </span>
            ) : post?.elite?(
<></>
            //   <Icon size="small" name="star" color="yellow" />
            ) : post?.core? (
                <></>
            //   <Icon size="small" name="star" color="blue" />
            ) : post?.dev?(
<></>
                // <Icon size="small" name="star" color="purple" />
            
            ):post?.admin&&<>
           
           {/* <Icon size="small" name="star" color="teal" /> */}
            </>
            }
          </a>
          {/* </Link> */}
         
        </div>
        <div className=" flex flex-wrap py-2  text-blue-400  break-normal justify-center font-extrabold  items-center ">
          <p className="break-all">{`Task`}</p>
        </div>
        
      </div>
    </div>
        <main className='w-full h-96 overflow-y-scroll'>
           <p className='break-all p-5'>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam assumenda saepe sint numquam vitae dolor, pariatur, optio, in adipisci possimus illo quod. Delectus, sapiente ipsum recusandae autem adipisci quo porro?
           Lorem ipsum dolor sit amet consectetur adipisicing elit. In cum asperiores culpa at ipsam cumque sequi similique rem adipisci labore saepe quae, nemo laboriosam repellendus sint! Cumque, natus quod. Est.
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore consequuntur veniam ratione sapiente rem quos reiciendis amet, voluptas minus delectus eum, molestias repellat voluptatem cumque. Eum fuga harum delectus doloribus, iste, qui dicta molestias eligendi voluptate soluta quod perferendis alias voluptatibus minima nostrum? Ducimus unde cum minima fuga iusto obcaecati. Fuga saepe laboriosam iste a numquam perspiciatis nostrum sed dolor, maxime ullam cum totam aliquid delectus odio excepturi, quasi error quia officiis laborum nihil alias labore? Excepturi nobis inventore, in eveniet itaque veritatis tenetur quia aliquam culpa maxime quidem illum voluptates beatae ducimus doloribus cumque non perspiciatis veniam aspernatur tempora.
           </p>
           <div className='mt-4 cursor-pointer gap-2 w-4/5 flex sm:grid overflow-x-scroll grid-cols-2  p-2 bg-slate-800 rounded-lg m-auto'>       
            { img.map((img,index)=>(
             
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