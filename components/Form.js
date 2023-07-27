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
  const [type, setType] = useState(null);
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
   
        user.dev)
      
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
     
          user.dev)
 }

   

      setLink('');

     
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
    <div>

 <form  className='w-full h-96'
   onSubmit={handelSubmit}
   >
           
              <input
              multiple 
              name="image"
              onChange={onchange}
             
              type="file"
              />
                <h1 className="font-semibold text-lg">Image</h1>
          
            <div className='mt-4 cursor-pointer gap-2 w-4/5 flex sm:grid overflow-x-scroll grid-cols-2 md:grid-cols-3 p-2 bg-slate-800 rounded-lg m-auto'>       
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
          
     {postTask?<textarea type="text" name="name" value={link} onChange={(e) => setLink(e.target.value)}/>: <input className=" ml-7 mb-2" type="text" name="name" value={link} onChange={(e) => setLink(e.target.value)} />}
         
    
  
  
    
    <button>
      submit
    </button>
    </form>
   



    </div>
  )
}

export default Form