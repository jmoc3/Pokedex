import { useEffect, useState } from 'react'
import { PokemonCard } from './PokemonCard'

export type PokemonStats = {
    abilities: Array<Record<string,(number|boolean|Stat)>>;
    base_experience:number;
    forms:Array<Stat>;
    game_indices:Array<Record<string,(number|Stat)>>;
    height:number;
    held_items:Array<Record<string,(Stat|Array<Record<string,(number|Stat)>>)>>;
    id:number;
    is_default:boolean;
    location_area_encounters:string
    moves:Array<Stat|Array<Record<string,(number|Stat)>>>;
    name:string;
    order:number
    past_types:Array<Record<string,(Stat|Array<Record<string,number|Stat>>)>>;
    species:Stat;
    sprites:Record<string,string>;
    stats: Array<Record<string,(number|Stat)>>;  
    types:Array<Record<string,(Stat)>>;
    weight:number;
  } 
  
export type Stat = {
    name:string,
    url:string
  }

export const FatherCardPokemon = () : JSX.Element=>{
  const [homePokemons,setHomePokemons] = useState<PokemonStats[]>([])

  const pokemons = async():Promise<void>=>{
    const api = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    const apiResponse = await api.json()
    const pokemons = apiResponse.results

    const allPokemons = pokemons.map(async (e:Stat):Promise<void>=>{
      const pokemonPromise = await fetch(e.url)
        const pokemon = await pokemonPromise.json()
        return pokemon 
    })

    const allPokemonDescription = await Promise.all(allPokemons)
    const firstPokemonsDescription = allPokemonDescription.filter((e:any)=>e!=undefined)
    console.log(firstPokemonsDescription)
    setHomePokemons(firstPokemonsDescription)
  }

  useEffect(()=>{
    pokemons()
  },[])

  return(
    <div className='Pokemons z-10 grid grid-cols-6 gap-y-8 h-1/2 w-4/5 p-7 justify-items-center '>
      {
        homePokemons.map((pokemon) =>(
              <PokemonCard  key={pokemon.id} src={pokemon.sprites.front_default} id={pokemon.id.toString()} name={pokemon.name} types={pokemon.types} stats={pokemon.stats}/>
        ))
      }
    </div>
  )
}