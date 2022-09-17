import axios from 'axios'
import authHeader from '../Auth-Header'

const API_URL = "http://localhost:8000/api"
const getAllCategories = async () =>{
    return axios.get(API_URL+"/categories",
    {
        headers : authHeader()
    })
}
const AddCategory=async(data)=>{
    return  axios.post(API_URL + "/categories",data,
   { 
      headers: authHeader() 
    }
   ).then((response)=>{
    console.log(response.data)
   })
}

const CategoryService ={
    getAllCategories,
    AddCategory
}

export default CategoryService