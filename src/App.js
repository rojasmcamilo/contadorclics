import './App.css';
import logo from './img/logo.png'
import Boton from './components/Boton'
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics ] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 5);

  }

  const reiniciarContador = () => {
    setNumClics( 0 );
  }

  return (
    <div className="App">
     <div className='freecodecamp-logo-contenedor' >
        <img
          className='freecodecamp-logo'
          src={logo}
          alt="Logo de freeCodeCamp"
        />
     </div>
     <div className='contenedor-principal' >
        <Contador
        numClics={ numClics } />
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
     </div>
    </div>
  );
}

export default App;
