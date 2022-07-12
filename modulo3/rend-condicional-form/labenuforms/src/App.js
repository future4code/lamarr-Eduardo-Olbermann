import './App.css';
import { useState } from 'react';
import { EtapaUm } from './components/etapa1';
import { EtapaDois } from './components/etapa2';
import { EtapaTres } from './components/etapa3';
import { EtapaQuatro } from './components/etapa4';

function App() {

  const [cont, setCont] = useState(1);

  function RenderizarEtapa() {

    switch (cont) {
      case 1:
        return <EtapaUm />;
        break;
      case 2:
        return <EtapaDois />;
        break;
      case 3:
        return <EtapaTres />;
        break;
      case 4:
        return <EtapaQuatro />;
        break;
      default:
        break;
    }
  }


  function ProximaEtapa() {
    let novoValor = cont + 1
    setCont(novoValor)
  }


  return (
    <div>
      <EtapaUm />
      <EtapaDois />
      <EtapaTres />
      <EtapaQuatro />

      <RenderizarEtapa />
      <button onClick={ProximaEtapa}>Próxima etapa</button>

    </div>
  );
}

export default App;
