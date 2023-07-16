import axios from "axios";
import baseUrl from "./baseUrl";
import catchErrors from "./catchErrors";
import cookie from "js-cookie";

export const Axios = axios.create({
  baseURL: `${baseUrl}/api/task`,
  headers: { Authorization: cookie.get("token") }
});



export const submitNewTask = async (
  name,task,status,img,index,time
) => {
  try {
    const res = await Axios.post("/", { name,task,status,img,index,time });

    const newPost = {
      ...res.data,
   
    
   
    };

    // setPosts(prev => [newPost, ...prev]);
    // setNewPost({ title: "", discription: "" });
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

