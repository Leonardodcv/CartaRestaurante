import React, {useState, useEffect, createContext} from "react";
import { setToken, getToken, removeToken } from "../api/token";
import { useUser } from "../hooks";

export const AuthContext = createContext({
    auth: undefined,
    login:()=>null,
    logout:()=>null,
 });

 export function AuthProvider(props){
    const {children} = props;
    const [auth, setAuth]= useState(undefined);
    const {getMe} = useUser();
    
    useEffect(()=>{
        ( async () =>{
            const token=getToken();
            if(token){
                const me = await getMe(token);
                setAuth({token, me})
            } else{
                setAuth(null)
            }
        })();
    },[])

    const login = async (token) => {
        setToken(token);
        const me = await getMe(token)
       setAuth({token, me});
    }

    const logout = ()=>{
        console.log("entro a borrar el token");
        if (auth){
            console.log("entro al if");
            removeToken();
            setAuth(null);
            console.log("Fin de if");
        }else{
            console.log("entro al else");
        }
    };

    const valueContext = {
        auth,
        login,
        logout,
    }

    if(auth === undefined) return null;
    return(
        <AuthContext.Provider value={valueContext} >
            {children}
        </AuthContext.Provider>
    )
 }