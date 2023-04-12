import './styles/App.css'

import { WelcomeContainer } from './components/WelcomeContainer'
import { FatherCardPokemon } from './components/FatherCardPokemons'

function App():JSX.Element{

  return (
    <div className="App w-full h-screen flex flex-col justify-evenly items-center bg-cyan-100">
      <WelcomeContainer/>
      <FatherCardPokemon/>
    </div>
  )
}

export default App
