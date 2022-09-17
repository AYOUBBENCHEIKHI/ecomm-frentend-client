import { createContext, useEffect, useState } from "react";

export const UserContext = createContext()

export const UserProvider=({children})=>{
    const [user,setUser] = useState({})
    useEffect(()=>{
        setUser(
            {
                name:"user",
                isAdmin:true,
        
            },)
    },[])
    if(!user.isAdmin) return null
    return(
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )
}