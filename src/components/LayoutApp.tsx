import React, { PropsWithChildren } from "react"
import { useState } from "react";

export const inputContext = React.createContext<string>('');
export const inputToggleContext = React.createContext<React.Dispatch<React.SetStateAction<string>>|null>(null);

export const LayoutApp = ({children}:PropsWithChildren):JSX.Element =>{
  const [inputText, setInputText] = useState<string>('')
    
  return(
    <inputContext.Provider value={inputText}>
        <inputToggleContext.Provider value={setInputText}>
            {children}
        </inputToggleContext.Provider>
    </inputContext.Provider>
  )
}