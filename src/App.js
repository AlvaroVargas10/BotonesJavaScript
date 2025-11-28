import './App.css';
import Contador from './components/Contador';
import { useState } from 'react';
import Boton from './components/Boton';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // Estado del primer contador
  const [numClicks, setNumClicks] = useState(0);

  // Estado del segundo contador
  const [numClicks2, setNumClicks2] = useState(0);

  // Funciones del primer contador
  const manejarClick = () => setNumClicks(numClicks + 1);
  const reiniciarContador = () => setNumClicks(0);

  // Funciones del segundo contador
  const manejarClick2 = () => setNumClicks2(numClicks2 + 1);
  const multiplicar2 = () => setNumClicks2(numClicks2 * 2);

  return (
    <div className="App">
      <Header />

      {/* PRIMER CONTADOR */}
      <div className="contador-principal">
        <Contador numClicks={numClicks} />

        <Boton texto="Click" esBotonDeClic manejarClick={manejarClick} />
        <Boton texto="Reiniciar" manejarClick={reiniciarContador} />
        <Boton texto="Restar" manejarClick={() => numClicks > 0 && setNumClicks(numClicks - 1)} />
        <Boton texto="+5" esBotonDeClic manejarClick={() => setNumClicks(numClicks + 5)} />
      </div>

      {/* SEGUNDO CONTADOR */}
      <div className="contador-secundario">
        <Contador numClicks={numClicks2} />

        <Boton texto="Click" esBotonDeClic manejarClick={manejarClick2} />
        <Boton texto="x2" manejarClick={multiplicar2} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
