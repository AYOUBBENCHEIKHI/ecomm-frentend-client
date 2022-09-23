import axios from "axios"
import authHeader from "../Auth-Header"

const API_URL ='http://localhost:8000/api'
export const axiosOne = axios.create({
    baseURL: 'http://localhost:8000/api'
})
const getUsersPage = async (pageParam=1) =>{
    const response = await axiosOne.get(`/users?page=${pageParam}`,
    {
        headers:authHeader()
    }
    
    )
    return response.data
}
const signup = (user)=>{
    return axios.post(API_URL+"/users",user)
    .then((response)=>{
        if(response.data.token){
            
            //localStorage.setItem("user",JSON.stringify(response.data))
        }
        return response.data
    })
}
const login =(email,password)=>{
    
    return axios.post(API_URL+"/login",
    {
        email,password
    })
    .then((response)=>{
        console.log(response)
        if(response.data.accessToken){
            console.log(response.data.token)
            localStorage.setItem("auth",JSON.stringify(response.data))
        }
        return response.data
    })
}

const logout = async ()=>{
    return await axios.get(API_URL+"/logout",
    {
        headers:authHeader()
    })

}
const getCurrentUser =async()=>{
    return await axios.get(API_URL+"/My",
    {
        headers:authHeader()
    })
}
const UserService ={
    signup,
    login,
    logout,
    getCurrentUser,
    getUsersPage
}
export default UserService
