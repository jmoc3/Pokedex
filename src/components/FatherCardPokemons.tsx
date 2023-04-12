import { useEffect, useState, useContext } from 'react'
import { PokemonCard } from './PokemonCard'
import { inputContext } from './LayoutApp'

type PokemonStats = {
    abilities: Array<Record<string,(number|boolean|Pokemon)>>;
    base_experience:number;
    forms:Array<Pokemon>;
    game_indices:Array<Record<string,(number|Pokemon)>>;
    height:number;
    held_items:Array<Record<string,(Pokemon|Array<Record<string,(number|Pokemon)>>)>>;
    id:number;
    is_default:boolean;
    location_area_encounters:string
    moves:Array<Pokemon|Array<Record<string,(number|Pokemon)>>>;
    name:string;
    order:number
    past_types:Array<Record<string,(Pokemon|Array<Record<string,number|Pokemon>>)>>;
    species:Pokemon;
    sprites:Record<string,string>;
    stats: Array<Record<string,(number|Pokemon)>>;  
    types:Array<Record<string,(Pokemon)>>;
    weight:number;
  } 
  
  type Pokemon = {
    name:string,
    url:string
  }

export const FatherCardPokemon = () : JSX.Element=>{
  const [homePokemons,setHomePokemons] = useState<PokemonStats[]>([])

  const pokemons = async():Promise<void>=>{
    const api = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    const apiResponse = await api.json()
    const pokemons = apiResponse.results

    const allPokemons = pokemons.map(async (e:Pokemon):Promise<void>=>{
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
    <div className='Pokemons z-10 grid grid-cols-6 gap-y-8 h-1/2 w-4/5 p-7 justify-items-center overflow-x-auto'>
      {
        homePokemons.map((pokemon) =>(
          <PokemonCard  key={pokemon.id} src={pokemon.sprites.front_default} id={pokemon.id.toString()} name={pokemon.name} type={pokemon.types[0].type.name}/>
        ))
      }
    </div>
  )
}