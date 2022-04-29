import React from 'react';
import '../estilos/boton.css'
//componente funcional
function Boton({texto, esBotonDeClic, clic }) {
	return (
		<button 
		className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
		onClick={clic}>
		{texto}
		</button>
	);
}

export default Boton;