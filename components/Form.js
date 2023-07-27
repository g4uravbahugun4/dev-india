import uploadPic from '@/utils/uploadPicToCloudinary';
import React, { useState, useRef } from "react";
import { submitNewTask,submitNewPost } from "@/utils/postActions";
import { toast } from "react-toastify";
let mediaPreview=[]
function Form({name,task,status,index,time,postTask,user,setPosts}) {

  const [category, setCategory] = useState();

  const [link, setLink] = useState();
  const [images, setImgs] = useState(null);
  const [media, setMedia] = useState(null);
  const [taskname, setName] = useState("");
  const [loading, setLoading] = useState(false);

  // const inputRef = useRef();
  const [error, setError] = useState(null);

  const handelSubmit = async (e) => 
  {
    e.preventDefault();
   setLoading(true)

   let picUrl;

   if (images) {
     picUrl = await uploadPic(images);
     if (!picUrl) {
       setLoading(false);
       return toast.error("Error Uploading Image");
     }
   }
    console.log(picUrl)
    try {
      if(postTask){
      let  { data } =    await submitNewPost(picUrl,link,task,user.name,user.rookies,

        user.traine,
        user.elite,
   
        user.core,
   
        user.dev,
        user.userimg,
        taskname)
      
      const createdPost = {
        ...data,
        user
      };
      setPosts(prev => [createdPost, ...prev]);
      }else{

     
        await submitNewTask(user.name,task,status,picUrl,index,time,link,user. rookies,

          user.traine,
          user.elite,
     
          user.core,
     
          user.dev,
          user.userimg)
 }

   

      setLink('');

      setName('');
     
    } catch (error) {
      toast.error(error);
    }
   if(images){
    setImgs(null)
    mediaPreview.length=0
   }
    setLoading(false);


     
  }
 
   const onchange = async (e) => 
    {
     setImgs(e.target.files);
   
for (let index = 0; index < e.target.files.length; index++) {
  let url=  URL.createObjectURL(e.target.files[index])
    mediaPreview.push(url)
  
}
    
    };
 
  return (
    <div className='p-10'>

 <form  className='w-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-950 via-violet-900 to-purple-950 rounded-lg p-10 flex flex-col  justify-center items-center   '
   onSubmit={handelSubmit}
   >
    <h1 className=" flex w-full font-semibold text-lg">Images</h1>
           
              <input
              multiple 
              name="image"
              onChange={onchange}
             className='mt-1'
              type="file"
              />
                
          <h1 className="flex w-full font-semibold text-lg mt-4 ">Preview</h1>
            <div className='cursor-pointer gap-2 w-4/5 flex sm:grid overflow-x-scroll grid-cols-2 md:grid-cols-3 p-2 bg-slate-800 rounded-lg m-auto'>       
            {mediaPreview.map((img,index)=>(
             
             <img
             className='w-11/12  sm:w-full min-h-[16rem] rounded-3xl'
               key={index}
             
               src={img}
               alt="PostImage"
               centered
               size="medium"
             />))}
        </div>
          <h1 className='flex w-full mt-3 font-semibold text-lg'>{postTask?<>Content</>:<>Link</>}</h1>
     {postTask?<textarea className='w-full rounded-lg text-black font-serif p-5 mt-1' type="text" name="name" value={link} onChange={(e) => setLink(e.target.value)}/>: <input className=" ml-7 p-2 mb-2 rounded-lg text-black w-1/2" type="text" name="name" value={link} onChange={(e) => setLink(e.target.value)} />}
         <h1 className='flex w-full font-semibold text-lg'>
          TaskName
         </h1>
     {postTask&&<input
             
              name="taskname"
              value={taskname} 
              onChange={(e) => setName(e.target.value)}
             className=' mt-3 p-2 mb-2 rounded-lg text-black w-1/2'
              type="text"
              />}
  
  
    
    <button
    disabled={loading}
    className={`shadow-inner shadow-black w-24 bg-gradient-to-br hover:shadow-white rounded-lg from-blue-500 to-transparent hover:bg-primary h-8 mt-5`}>
      submit
    </button>
    </form>
   



    </div>
  )
}

export default Form