import React from 'react';
import Lista from './components/ListaPost';
import Post from './components/Post/Post';
import './style.css'


function App() {

  const Lista = () => {

    const listaInformacoes = [
        objetoPost,
        objetoPostDois,
        objetoPostTres,
    ]

    let listaDeInformacoesConvertida = listaInformacoes.map((item) => {
        return <li>{item}</li>
    })


    return (

        <div>
            <ul>{listaDeInformacoesConvertida}</ul>
        </div>
    )


}


const objetoPost = {
    nomeUsuario: 'paulinha',
    fotoUsuario: 'https://picsum.photos/50/50',
    fotoPost: 'https://picsum.photos/200/150'
}
const objetoPostDois = {
    nomeUsuario2: 'eduardo',
    fotoUsuario2: 'https://picsum.photos/50/50',
    fotoPost2: 'https://picsum.photos/200/150'
}

const objetoPostTres = {
    nomeUsuario3: 'pedrinho',
    fotoUsuario3: 'https://picsum.photos/50/50',
    fotoPost3: 'https://picsum.photos/200/150'
}

return (
  <div className='MainContainer'>

    <Lista/>

    {/* <Post
    

    nomeUsuario={'paulinha'}
    fotoUsuario={'https://picsum.photos/50/50'}
    fotoPost={'https://picsum.photos/200/150'}


    nomeUsuario2={'eduardo'}
    fotoUsuario2={'https://picsum.photos/50/50'}
    fotoPost2={'https://picsum.photos/200/150'}


    nomeUsuario3={'pedrinho'}
    fotoUsuario3={'https://picsum.photos/50/50'}
    fotoPost3={'https://picsum.photos/200/150'}
    /> */}
  </div>
)

}


export default App;
