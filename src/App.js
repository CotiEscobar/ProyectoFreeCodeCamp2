import './App.css';
import Boton from './componentes/boton.js'
import Contador from './componentes/contador.js'
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import { useState } from 'react';

function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }
  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
        className='freecodecamp-logo'
        src={freeCodeCampLogo} 
        alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton
          texto='Clic'
          esBotonDeClic={ true }
          clic={manejarClic} />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={ false }
          clic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
