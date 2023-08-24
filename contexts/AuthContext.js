import {createContext, useState} from "react";


const initialState = {
    isAuthenticated : false,
    user : null,
    signIn:(user)=>{},
    signOut:()=>{}
}
export const AuthContext = createContext(initialState)

export const AuthProvider = ({children}) =>{
    const [user,setUser] = useState({})
    const [isAuthenticated,setAuthenticated] = useState(false)

    const signIn = (user) =>{
        setUser(user)
        setAuthenticated(true)
        localStorage.setItem('user',JSON.stringify(user))
        localStorage.setItem('isAuthenticated',JSON.stringify(true))
    }

    const signOut =() =>{
        setUser({})
        setAuthenticated(false)
        localStorage.setItem('user',JSON.stringify({}))
        localStorage.setItem('isAuthenticated',JSON.stringify(false))
    }

    const value ={
        user,
        isAuthenticated,
        signIn,
        signOut,
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}