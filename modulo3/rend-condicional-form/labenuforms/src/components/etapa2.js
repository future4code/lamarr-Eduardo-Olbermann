import React from "react";
import styled from "styled-components";

const TituloH1EtapaDois = styled.h1`
text-align: center;
`
const BoxEtapaDois = styled.div`
text-align: center;
display: grid;
justify-content: center;
`

const BoxCurso = styled.div`
border: 1px solid black;
width: 140px;
height: 25px;
margin-left: 35px;
`
const BoxEnsino = styled.div`
border: 1px solid black;
width: 140px;
height: 25px;
margin-left: 35px;
`

export function EtapaDois () {


    return (
        <div>
            <div>
                <TituloH1EtapaDois>Etapa 2 - Informações do Ensino Superior</TituloH1EtapaDois>
            </div>

            
            <BoxEtapaDois>
                <p>5. Qual curso?</p>
                <BoxCurso></BoxCurso>

                <p>6. Qual unidade de ensino?</p>
                <BoxEnsino></BoxEnsino>
            </BoxEtapaDois>

        </div>

    )
}