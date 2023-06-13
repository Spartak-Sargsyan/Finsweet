import axios from "axios"

const homePost = "http://localhost:3005/homePost";
const cotagory = "http://localhost:3005/cotegory";
const homeAuthor = 'http://localhost:3005/homeAuthor';
const blogCotegory = 'http://localhost:3005/blogPage';

export const homePostGet = ()=>{
    return axios.get(homePost)
    .then(res => res.data)
    .catch(errors => console.error(errors))
}

export const cotagoryGet = ()=>{
    return axios.get(cotagory)
    .then(res=>res.data)
    .catch(errors => console.error(errors))
}

export const homeAuthorGet = ()=>{
    return axios.get(homeAuthor)
    .then(res => res.data)
    .catch(errors => console.error(errors))
}

export const blogPageGet = ()=>{
    return axios.get(blogCotegory)
    .then(res => res.data)
    .catch(errors => console.error(errors))
}