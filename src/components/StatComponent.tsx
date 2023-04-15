import { Stat } from "./FatherCardPokemons"

type StatProps = {
    base_stat:number,
    stat: Stat
}

export const StatComponent = ({base_stat,stat}:StatProps):JSX.Element =>{
    return(
        <li className="text-xs ml-2"><span className="font-semibold">{stat.name}:</span> {base_stat}</li>
    )
}