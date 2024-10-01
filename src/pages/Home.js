import React from 'react';

// COMPONENTES
import Carrusel from '../components/Carrusel/Carrusel';

function Home () {
  return (
    <div className='Home'>
        <h1 className='titulo'>Clave de Sol</h1>

        
        <h2 className='subtitulo'>Lo que podés encontrar...</h2>
        <Carrusel/>
    </div>
  );
};

export default Home;