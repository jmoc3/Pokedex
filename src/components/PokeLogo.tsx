import { useContext } from "react";
import { PokemonStats, Stat } from "./FatherCardPokemons"
import { StatComponent } from "./StatComponent"
import { parStatusContext, setParStatusContext } from "./PokemonCard";

type PokeLogoProps = Pick<PokemonStats,'stats'> & {color:string[];description:Record<string,string>}

export const PokeLogo = ({stats,color,description}:PokeLogoProps):JSX.Element =>{
  const parStatus = useContext(parStatusContext)
  const setParStatus = useContext(setParStatusContext)
  return(
        <div className={`pokeLogo p-2 absolute cursor-pointer -z-10 group-hover:translate-x-12 left-3/4 top-3 border border-black rounded w-14 h-10 overflow-hidden ${color[0]} hover:absolute hover:w-vmin hover:z-20 hover:h-96 ease-in-out duration-1000 `} onMouseEnter={()=>{setParStatus(!parStatus)}} onMouseLeave={()=>{setParStatus(!parStatus)}}>
          
          <div className={`line absolute left-px top-px w-1 h-full rounded ${color[1]}`}></div>
          <img className={`flex translate-x-2 -translate-y-px w-6 ease-in-out duration-1000 max-1830:hidden ${!parStatus&&'translate-y-3/4 translate-x-3/4'}`} src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png" alt="" />

          <div className={`desc flex flex-col gap-2 mt-10 max-1830:mt-14 ml-2 mb-5 w-42 -translate-x-50 ${parStatus&&'opacity-0'} ease-in-out duration-1000`} >
            <span className="p-1 rounded font-semibold text-sm w-fit max-1830:text-xs">Description</span>
            <p className={`text-xs ml-2 min-w-0`}>{description.flavor_text}</p>
          </div>

          <div className={`baseStats flex flex-col gap-2 ml-2 ${parStatus&&'opacity-0'} ease-in-out duration-3000`}>
            <span className={`p-1 rounded font-semibold text-sm w-fit max-1830:text-xs`} >Estadisticas Base</span>
            <ol>
              {
                stats.map((stat,index)=>(
                    <StatComponent key={index} base_stat={stat.base_stat as number} stat={stat.stat as Stat}/>
                ))
              }
            </ol>
          </div>
        </div>
    )
}