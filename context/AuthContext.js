  
  import React from "react";
import { Children } from "react";
import { createContext } from "react";
 
  export const AuthContext = createContext();

  const AuthProvider = ({children})=>{
 return <AuthContext.Provider>
{children}
 </AuthContext.Provider>
  }