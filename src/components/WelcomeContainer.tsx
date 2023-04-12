import { useState } from "react"
import type{ChangeEventHandler} from 'react'

export const WelcomeContainer = () =>{
    
    const [inputText, setInputText] = useState<string>('')
  
  const catchInputValue:ChangeEventHandler<HTMLInputElement>= (e):void =>{
    setInputText(e.target.value)
  }
    
    return (
        <div className="cardBox grid p-9 gap-3 bg-sky-300 rounded">
        <h1 className="text-4xl">Welcome to the Pokedex</h1>
          <span>Search some pokemon</span>
        <form action="" className="searchBox flex ">
          <input className="w-4/5 p-1 rounded" type="text" onChange={catchInputValue}/>
          <button className='w-1/5 text-center bg-red-400 hover:bg-red-500 hover:transition duration-1000 ease-in-out hover:text-lime-50' onClick={()=>{console.log(inputText)}}>Send</button>
        </form>
      </div>
    )
}