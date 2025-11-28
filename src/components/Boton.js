import React from "react";
import '../style/boton.css'

function Boton({texto, esBotonDeClic, manejarClick}) {
    return(
        <button
        className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
        onClick={manejarClick}>
        
            {texto}
        </button>
    );
}


export default Boton ;