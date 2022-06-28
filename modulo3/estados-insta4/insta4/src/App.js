import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
            nomeUsuario2={'eduardo'}
            fotoUsuario2={'https://picsum.photos/50/50'}
            fotoPost2={'https://picsum.photos/200/150'}
            nomeUsuario3={'pedrinho'}
            fotoUsuario3={'https://picsum.photos/50/50'}
            fotoPost3={'https://picsum.photos/200/150'}
          />
  </div>
)

}


export default App;
