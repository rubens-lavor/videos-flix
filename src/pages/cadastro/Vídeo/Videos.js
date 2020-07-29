import React from 'react';
import PageDefault from '../../../components/PageDefault/PageDefault'
import { Link } from 'react-router-dom';

function CadastroVideo() {
  return (
    <PageDefault>

      <h3>Cadrastro de Video</h3>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  )
}

export default CadastroVideo;