import './App.css'
import NavBar from './components/navbar/navbar'
import chatBotLogo from '/ChatBot.svg'

function App() {

  return (
    <>
    <NavBar className="navbar" logo={chatBotLogo} />
    </>
  )
}

export default App
