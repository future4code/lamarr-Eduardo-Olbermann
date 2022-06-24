import React from 'react';
import './CardPequeno.css'


function CardPequeno(props) {
    return (
        <div className="bigcard-container-email ">
            <img src={props.imagem}></img>
            <div>
                <h4>{props.nome}</h4>
            </div>
        </div>
    )
}

export default CardPequeno;