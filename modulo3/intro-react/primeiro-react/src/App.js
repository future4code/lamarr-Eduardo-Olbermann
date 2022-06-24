import logoEu from './img/logo-eu.jpg';
import './App.css';

function App() {
  function mensagem () {
    alert("Boa noite!")
  }
  return (
    <div className="App">
      <h1 className='texto-h1'>Olá! Eu sou o Eduardo!</h1>
      <img src={logoEu} alt='logo pessoa' />
      <p>Este é o meu primeiro site React</p>
      <button onClick={mensagem}>Aperte este butão</button>
    </div>
  );
}

export default App;
