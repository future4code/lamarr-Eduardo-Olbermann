import React, { useState } from 'react';
import styled from 'styled-components';

const Box = styled.div`
border: 1px solid;
width:  700px;
height: 860px;
margin-left: 300px;
`
const Container = styled.div`
display: flex;
justify-content: space-between;
margin-top: 857px;
`
const DivUsuario = styled.div`
input {
    border: 1px solid;
    width: 130px;
    height: 20px;
}
`
const DivMensagem = styled.div`
input {
    border: 1px solid;
    width: 505px;
    height: 20px;
 }
`


export function Mensagem() {

    const [InputUsuario, setInputUsuario] = useState("Usuário")
    const [InputMensagem, setInputMensagem] = useState("Mensagem")

    const handleInputUsuario = (event) => {
        setInputUsuario(event.target.value)
    }

    const handleInputMensagem = (event) => {
        setInputMensagem(event.target.value)
    }

    return (
        <>
            <Box>

                <Container>

                    <DivUsuario>
                        <input Usuario="Usuario" onChange={handleInputUsuario} value={InputUsuario}></input>
                    </DivUsuario>

                    <DivMensagem>
                        <input Mensagem="Mensagem" onChange={handleInputMensagem} value={InputMensagem}></input>
                    </DivMensagem>

                    <button>Enviar</button>

                </Container>



            </Box>


        </>
    )

}






