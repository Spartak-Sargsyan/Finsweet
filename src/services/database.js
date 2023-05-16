import axios from "axios"

const homePost = "http://localhost:3005/homePost";

export const homePostGet = ()=>{
    return axios.get(homePost).then(res=>res.data).catch(errors=>{
        console.log(errors);
    })
} 