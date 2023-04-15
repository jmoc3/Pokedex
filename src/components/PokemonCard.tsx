import type{ ImgHTMLAttributes } from "react"
import type { PokemonStats } from './FatherCardPokemons'
import { useState,useEffect,useContext, createContext } from 'react'
import { inputContext } from "./LayoutApp"
import { PokeLogo } from './PokeLogo'

type CardProps = Pick<PokemonStats,'name'|'types'|'stats'|'species'>  & ImgHTMLAttributes<HTMLImageElement>

const colorDiccionary:Record<string,string[]> = {
  'grass':['bg-emerald-200','bg-green-400','hover:bg-green-400'],
  'fire':['bg-orange-200','bg-red-400','hover:bg-red-400'],
  'water':['bg-cyan-200','bg-blue-400','hover:bg-blue-400'],
  'bug':['bg-lime-200','bg-lime-400','hover:bg-lime-400'],
  'normal':['bg-slate-200','bg-gray-400','hover:bg-gray-400'],
  'electric':['bg-amber-200','bg-yellow-400','hover:bg-yellow-400'],
  'ground':['bg-amber-400','bg-amber-800','hover:bg-amber-800'],
  'poison':['bg-violet-200','bg-violet-400','hover:bg-violet-400'],
  'fairy':['bg-violet-200','bg-violet-400','hover:bg-violet-400'],
  'psychic':['bg-fuchsia-200','bg-pink-400','hover:bg-pink-400'],
  'rock':['bg-neutral-200','bg-stone-400','hover:bg-stone-400'],
  'ghost':['bg-purple-200','bg-purple-400','hover:bg-purple-400'],
  'fighting':['bg-amber-300','bg-amber-700','hover:bg-amber-700'],
  'ice':['bg-sky-300','bg-sky-700','hover:bg-sky-700'],
  'dragon':['bg-indigo-200','bg-indigo-400','hover:bg-indigo-400'],
  
}

export const parStatusContext = createContext<boolean>(false)
export const setParStatusContext = createContext<React.Dispatch<React.SetStateAction<boolean>>>(()=>{})

export const PokemonCard = ({id,name,types,stats,species, ...imgProps}:CardProps):JSX.Element =>{
  const inputText = useContext<string>(inputContext)
  const [description,setDescription] = useState<Record<string,string>>({})
  const [parStatus, setParStatus] = useState<boolean>(true)

  const traductor = async():Promise<void> =>{
    const url = await fetch(species.url)
    const descriptionPromise = await url.json()
    const spanish = descriptionPromise.flavor_text_entries.filter((entry:{language:Record<string,string|Record<string,string>>})=>{
      if(entry.language.name=='es') return entry
    }) 
    setDescription(spanish[1])
  }
  
  useEffect(()=>{
    traductor()
  },[])

  return(
    <div className={`group flex relative flex-col gap-2 p-5 w-8/12 h-fit border border-black rounded ${colorDiccionary[types[0].type.name][0]} ${colorDiccionary[types[0].type.name][2]} ${name.includes(inputText)?'':'hidden'} ease-in-out duration-500 `} key={id}>
      <parStatusContext.Provider value={parStatus}>
        <setParStatusContext.Provider value={setParStatus}>
          <PokeLogo stats={stats} color={colorDiccionary[types[0].type.name]} description={description}/>
        </setParStatusContext.Provider>
      </parStatusContext.Provider>
      <div className="topCard grid justify-items-center gap-2.5" >

        <div className={`spancitos absolute flex ${!parStatus&&'translate-x-52 translate-y-5 z-20 font-semibold text-sm max-1830:translate-x-44 '} ease-in-out duration-1000 pointer-events-none`}>
          <span className={` ${!parStatus?'relative top-0 -left-2 z-20 font-semibold':'opacity-0 absolute'} ease-in-out duration-1000 pointer-events-none`}>#{id}</span>
          <span className={`${!parStatus&&'relative z-20 font-semibold'}`}>{name}</span>
        </div>
        
        <div className={`imgContainer mt-10 rounded-full w-24 border border-zinc-400 ${colorDiccionary[types[0].type.name][0]} ${!parStatus&&'-translate-y-2/10'} ease-in-out duration-1000 group-hover:overflow-visible`}>
          <img {...imgProps} className={`${!parStatus&&'scale-150'} ease-in-out duration-1000`}/>
        </div> 
      
      </div>
    </div>
    )
}