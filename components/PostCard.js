import React from 'react'
import CardSlider from './CardSlider'

function PostCard() {
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
    <div>
        
       <div className='flex flex-col bg-gray-800'>
       <div className={"flex py-1 border-4 border-gray-100 rounded-tl-lg "}>
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
        <main className='w-full'>
         
        <CardSlider img={img}/>
        </main>
        </div> 


    </div>
  )
}

export default PostCard