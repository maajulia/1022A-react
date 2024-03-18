import './App.css'
import MeuComponente from './componentes/MeuComponente'

function App() {
  let nome = "MAJU"
  let sobrenome = "ALVES"
  return (
    <MeuComponente>
   <h1 className= "meu-nome">Olá eu sou a {nome} {sobrenome}!</h1>
   <h1>Olá eu sou a {nome} {sobrenome}!</h1>
</>
  )// JSX - Javascript
}

export default App
