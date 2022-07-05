import styled from 'styled-components';
import React from 'react';
import './App.css';

const DivApp = styled.div`
overflow: hidden;
`

const TituloH1 = styled.h1`
text-align: center;
padding-left: 100px;
`
const Imagem = styled.img`
width: 50px;
`
const DivDaImagem = styled.div`
display: flex;
justify-content: center;
position: relative;
bottom: 78px;
right: 30px;
`
const BarraEsquerda = styled.span`
background-color: orange;
padding: 35px;
height: 580px;
color: orange;
`
const BarraDireita = styled.span`
background-color: orange;
padding: 35px;
height: 580px;
color: orange;
`
const ContainerBarrasLaterais = styled.div`
display: flex;
justify-content: space-between;
`

const ContainerMensagem = styled.div`
display: flex;
align-items: center;
position: relative;
bottom: 65px;
left: 200px;
gap: 10px;
`

const CaixaRemetente = styled.div`
width: 12%;
height: 20px;
border-style: solid;
border-width: 1px;
border-radius: 1px;
color: gray;
`
const CaixaMsg = styled.div`
width: 35%;
height: 20px;
border-style: solid;
border-width: 1px;
border-radius: 1px;
color: gray;
`
const Rodape = styled.footer`
background-color: gray;
width: 100%;
text-align: center;
position: relative;
bottom: 59px;
`




function App() {
  return (
    <DivApp>

      <TituloH1>LabZap</TituloH1>

      <DivDaImagem>
        <Imagem src='https://media.discordapp.net/attachments/808877606140379177/992429160150601808/logo-labenu.png'></Imagem>
      </DivDaImagem>

      <ContainerBarrasLaterais>

        <BarraEsquerda>Barra Esquerda</BarraEsquerda>
        <BarraDireita>Barra Direita</BarraDireita>

      </ContainerBarrasLaterais>

      <ContainerMensagem>

        <p>Remetente:</p>
        <CaixaRemetente></CaixaRemetente>

        <p>Msg:</p>
        <CaixaMsg></CaixaMsg>

        <div>
          <button>Enviar Mensagem</button>
        </div>

      </ContainerMensagem>

      <Rodape>
        <p>Copyright © 2022 All rights reserved. R. Pais Leme, 215, Conjunto 820 Pinheiros. CEP 05424-150</p>
      </Rodape>

    </DivApp>

  );
}

export default App;
