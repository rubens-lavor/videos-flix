import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault/PageDefault';
import FormField from '../../../components/FormField/FormField';
import Button from '../../../components/Button/Button';
import useForm from '../../../hooks/useForm';


function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais)
;
  const [categorias, setCategorias] = useState([]);



  useEffect(() => {

    const URL =  window.location.hostname.includes('localhost') 
    ? 'http://localhost:8080/categorias' 
    : 'https://video-flix.herokuapp.com/categorias';

    fetch(URL).then(async (response) => {
      //console.log(response)
      const resposta = await response.json();
      setCategorias([
        ...resposta,
      ]);
    });

  }, [
    values.nome,
  ])


  return (
    <PageDefault>

      <h3>
        Cadrastro de Categoria:
        {values.nome}
      </h3>

      <form onSubmit={function handleSubmit(ev) {
        ev.preventDefault();
        // console.log("submit")
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="Nome da categoria: "
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição: "
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />


        <FormField
          label="cor: "
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 &&
        <div>
          Loading...
      </div>

      }
      <ul>
        {categorias.map((categoria, indice) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
