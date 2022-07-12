import React from "react";
import styled from "styled-components";


const TituloH1 = styled.h1`
text-align: center;
`
const Box = styled.div`
text-align: center;
display: grid;
justify-content: center;
`

const BoxNome = styled.div`
border: 1px solid black;
width: 140px;
height: 25px;
margin-left: 35px;
`
const BoxIdade = styled.div`
border: 1px solid black;
width: 140px;
height: 25px;
margin-left: 35px;
`
const BoxEmail = styled.div`
border: 1px solid black;
width: 140px;
height: 25px;
margin-left: 35px;
`
const BoxEscolaridade = styled.div`
border: 1px solid black;
width: 140px;
height: 25px;
margin-left: 35px;
`


export function EtapaUm() {



    return (
        <div>

            <div>
                <TituloH1>Etapa 1 - Dados Gerais</TituloH1>
            </div>

            <Box>
                   
                 <p>1. Qual seu nome?</p>
                <BoxNome></BoxNome>

                <p>2. Qual sua idade?</p>
                <BoxIdade></BoxIdade>

                <p>3. Qual seu email?</p>
                <BoxEmail></BoxEmail>

                 <p>4. Qual a sua escolaridade?</p>
                <BoxEscolaridade></BoxEscolaridade>

            </Box>

        </div>
    )
}