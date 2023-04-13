import { PokemonStats } from "./FatherCardPokemons"

type PokeLogoProps = Pick<PokemonStats,'stats'> & {color:string}

export const PokeLogo = ({stats,color}:PokeLogoProps):JSX.Element =>{
    return(
        <div className={`info cursor-pointer absolute -z-10 right-0 group-hover:translate-x-12 ease-in-out duration-500 hover:z-20`} onClick={()=>{console.log(stats[0].stat, color)}}>
        <div className={`pokeLogo p-2 absolute border border-black rounded w-10 h-10 ${color} hover:absolute  hover:w-96 hover:h-64 hover:ease-in-out hover:duration-1000 ease-in-out duration-1000`}>
          <img className={`absolute w-6 ease-in-out duration-1000`} src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png" alt="" />
          <div className="baseStats">
            <li>
              <ol></ol>
            </li>
          </div>
        </div>
        <span className={``}>info</span>
      </div>
    )
}