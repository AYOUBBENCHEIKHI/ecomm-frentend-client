import axios from "axios"
import authHeader from "../Auth-Header"

const API_URL =""
const signup = (name,email,password)=>{
    return axios.post(API_URL+"/users",
    {
        name,email,password
    })
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
        if(response.data.token){
            localStorage.setItem("user",JSON.stringify(response.data))
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
    getCurrentUser
}
export default UserService
