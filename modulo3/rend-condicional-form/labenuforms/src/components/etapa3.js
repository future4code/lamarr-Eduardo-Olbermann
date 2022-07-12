import React from "react";
import styled from "styled-components";

const TituloH1EtapaTres = styled.h1`
text-align: center;
`
const BoxEtapaTres = styled.div`
text-align: center;
display: grid;
justify-content: center;
`

const BoxCurso = styled.div`
border: 1px solid black;
width: 140px;
height: 25px;
margin-left: 140px;
`
const BoxCursoComplementar = styled.div`
border: 1px solid black;
width: 140px;
height: 25px;
margin-left: 140px;
`

export function EtapaTres() {


    return (
        <div>
            <div>
                <TituloH1EtapaTres>Etapa 3 - Informações Gerais de Ensino</TituloH1EtapaTres>
            </div>


            <BoxEtapaTres>
                <p>7. Por que você não terminou um curso de graduação?</p>
                <BoxCurso></BoxCurso>

                <p>8. Você fez algum curso complementar?</p>
                <BoxCursoComplementar></BoxCursoComplementar>
            </BoxEtapaTres>

        </div>

    )
}