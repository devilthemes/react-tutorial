import axios from "axios";
export const getNews = (filepath)=>{
    try{
        return axios.get(filepath);
    }catch(error){
        console.error(error.response);
    }   
}

export const getOldNews = ()=>{
    try{
        return axios.get("https://jsonplaceholder.typicode.com/comments?postId=1");
    }catch(error){
        console.error(error.response);
    }
}

export const sendPersonalData = (payload) =>{
    try{
        return axios.post("https://dummy.restapiexample.com/api/v1/create",payload);
    }catch(error){
        console.error(error.response);
    }
}