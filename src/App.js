import React, { useEffect } from 'react';
import Menu from './components/Menu/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel/index';
import Footer from './components/Footer';
import categoriasRepository from './repositories/categorias'

function App() {


  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos);
      })
      .catch((erro) => {
          console.log(erro.message);
          /**/
      });
  });
  return (
    <div style={{ backgroundColor: '#141414' }}>
      <Menu />

      
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="O que é Front-End? Trabalhando na área"
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Footer />
    </div>
  );
}

export default App;
