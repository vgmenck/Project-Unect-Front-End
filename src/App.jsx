import './App.css'
import Nav from './components/nav';
import Corpo from './components/corpo';
import Login from './components/login';
import Cadastro from './components/cadastro';




function App() {

  return (
    <>
    {/*<nav style={{height:'52px'}}></nav><Login/> */}
    {/*<nav><Nav/></nav><Corpo/> */}
      <div>
        <nav style={{height:'52px'}}></nav>
        <Cadastro/>
      </div>
      
    </>
      
          
  )
}

export default App
