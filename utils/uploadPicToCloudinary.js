import axios from "axios";

const uploadPic = async files => {

let pick=[]

  for (let i = 0; i < files.length; i++) {
    const element = files[i]; 
  try {
    const form = new FormData();
    form.append("file", element);
    form.append("upload_preset", "debatable");
    form.append("cloud_name", "darkillisour");
    console.log("no mola 2")
    const res = await axios.post("https://api.cloudinary.com/v1_1/darkillisour/image/upload", form);

   pick.push( res.data.secure_url);
 
    
  } catch (error) {
    return;
  }
}
return pick
};

export default uploadPic;
