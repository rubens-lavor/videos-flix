import React from 'react';
import PageDefault from '../../../components/PageDefault/PageDefault'
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  return (
    <PageDefault>

      <h3>Cadrastro de Categoria</h3>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;