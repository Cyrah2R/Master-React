import logo from './logo.svg';
import './App.css';
import  MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';

function App() {

  const ficha_medica={
    altura: "169cm",
    grupo: "A+",
    estado: "Bueno",
    alergias: "Ninguna"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al master a React!
        </p>

        {/* Cargar mi primer componente */}
        <div className='componentes'>

          <hr/>
          <EventosComponente />
          
          <hr/>
          <TercerComponente 
            nombre="David" 
            apellidos="Rivera Ruz" 
            ficha= {ficha_medica}
          />

          <hr/>
          <SegundoComponente />
          <hr/>
          <MiComponente />
          
        </div>
          
      </header>
    </div>
  );
}

export default App;
