import './styles/App.css'
import { LayoutApp } from './components/LayoutApp'
import { WelcomeContainer } from './components/WelcomeContainer'
import { FatherCardPokemon } from './components/FatherCardPokemons'

function App():JSX.Element{
  
  return (
    <LayoutApp>
      <div className="App w-full h-screen flex flex-col justify-evenly items-center bg-cyan-100 overflow-x-auto select-none">
        <WelcomeContainer/>
        <FatherCardPokemon/>
      </div>
    </LayoutApp>
  )
}

export default App
