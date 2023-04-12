import {useContext} from 'react'
import type{ ImgHTMLAttributes } from "react"
import { inputContext } from "./LayoutApp"

type cardProps = {
    id:string;
    name:string;
    type:string;
}

type functionProps = cardProps & ImgHTMLAttributes<HTMLImageElement>

const colorDiccionary:Record<string,string[]> = {
  'grass':['bg-emerald-200','hover:bg-green-400'],
  'fire':['bg-orange-200','hover:bg-red-400'],
  'water':['bg-cyan-200','hover:bg-blue-400'],
  'bug':['bg-lime-200','hover:bg-lime-400'],
  'normal':['bg-slate-200','hover:bg-gray-400'],
  'electric':['bg-amber-200','hover:bg-yellow-400'],
  'ground':['bg-amber-400','hover:bg-amber-800'],
  'poison':['bg-violet-200','hover:bg-violet-400'],
  'fairy':['bg-violet-200','hover:bg-violet-400'],
  'psychic':['bg-fuchsia-200','hover:bg-pink-400'],
  'rock':['bg-neutral-200','hover:bg-stone-400'],
  'ghost':['bg-purple-200','hover:bg-purple-400'],
  'fighting':['bg-amber-300','hover:bg-amber-700'],
  'ice':['bg-sky-300','hover:bg-sky-700'],
  'dragon':['bg-indigo-200','hover:bg-indigo-400'],
  
}

export const PokemonCard = ({id,name,type, ...imgProps}:functionProps):JSX.Element =>{
  const inputText = useContext<string>(inputContext)
  return(
    <div className={`group flex relative flex-col gap-2 p-5 border border-black rounded ${colorDiccionary[type][0]} ${colorDiccionary[type][1]} ${name.includes(inputText)?'':'hidden'} ease-in-out duration-500 `} key={id}>
      <div className="info cursor-pointer absolute -z-10 right-0 group-hover:translate-x-12 ease-in-out duration-500 ">
        <div className={`pokeLogo p-1 border border-black rounded  w-10 h-auto ${colorDiccionary[type][0]}`}><img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png" alt="" /></div>
        <span>info</span>
      </div>
      <div className="topCard grid justify-items-center gap-2.5" >
      <span>#{`${id} ${name}`}</span>
        <div className={`imgContainer rounded-full w-24 border border-zinc-400 ${ colorDiccionary[type][0]} ease-in-out duration-500 group-hover:overflow-visible`}>
          <img {...imgProps} className="group-hover:scale-150 ease-in-out duration-500"/>
        </div> 
      </div>
      <span className='w-full text-center'>{}</span>
    </div>
    )
}