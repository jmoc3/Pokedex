import { useEffect, useState } from 'react'
import { PokemonCard } from './PokemonCard'

export type PokemonStats = {
    id:number;
    name:string;
    order:number
    species:Stat;
    sprites:Record<string,string>;
    stats: Array<Record<string,(number|Stat)>>;  
    types:Array<Record<string,(Stat)>>;
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
    setHomePokemons(firstPokemonsDescription)
  }

  useEffect(()=>{
    pokemons()
  },[])

  return(
    <div className='Pokemons z-10 grid grid-cols-6 max-1600:grid-cols-4  gap-y-8 h-1/2 w-4/5 p-7 justify-items-center '>
      {
        homePokemons.map((pokemon) =>(
              <PokemonCard  key={pokemon.id} src={pokemon.sprites.front_default} id={pokemon.id.toString()} name={pokemon.name} types={pokemon.types} species={pokemon.species} stats={pokemon.stats}/>
        ))
      }
    </div>
  )
}