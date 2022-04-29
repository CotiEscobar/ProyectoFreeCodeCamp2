import React from 'react';
import '../estilos/contador.css'

//componente funcional
function Contador({ numClics }){
  return (
    <div className='contador'>
			{numClics}
    </div>
  )
}

export default Contador;