import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem='https://media.discordapp.net/attachments/808877606140379177/989683400044605491/logo-eu.jpg'
          nome="Eduardo F. Olbermann"
          descricao="Olá, Me chamo Eduardo, tenho 21 anos, gosto muito de video games e e-sportes, atualmente quero ser um Desenvolvedor web full stack! "
        />


        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png"
          texto="Ver mais"
        />
      </div>

      <div className='page-email'>
        <CardPequeno
          imagem="https://w7.pngwing.com/pngs/718/873/png-transparent-computer-icons-email-symbol-email-miscellaneous-angle-logo-thumbnail.png"
          nome="Email: eduardoolbermann@hotmail.com"
        />

        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/1239/1239525.png"
          nome="Endereço: Floriánopolis - SC"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://toppng.com/uploads/preview/exercito-brasileiro-logo-vector-download-free-11574125810djipbl5js8.png"
          nome="Exército Brasileiro"
          descricao="Soldado - 2019 a 2020"
        />

        <CardGrande
          imagem="https://logospng.org/wp-content/uploads/itau.jpg"
          nome="Banco Itaú"
          descricao="Jovem aprendiz Itaú - 2021-"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
