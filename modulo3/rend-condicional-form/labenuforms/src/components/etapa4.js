import React from "react";
import styled from "styled-components";

const TituloFormulario = styled.div`
text-align:center;
p {
    text-align: center;
}
`

export function EtapaQuatro () {


    return (
        <TituloFormulario>
            <h1>O Formulário Acabou</h1>
            <p>Muito obrigado por participar! Entraremos em contato!</p>
        </TituloFormulario>
    )
}