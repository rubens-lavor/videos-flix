import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault/PageDefault';
import FormField from '../../../components/FormField/FormField';
import Button from '../../../components/Button/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(ev) {
    /* const { getAttribute, value } = ev.target; */
    setValue(
      ev.target.getAttribute('name'),
      ev.target.value,
    );
  }

  useEffect(() => {
    console.log('oi')

    const URL = 'http://localhost:8080/categorias';

    fetch(URL).then(async (response) => {
      console.log(response)
      const resposta = await response.json();
      setCategorias([
        ...resposta,
      ]);
    });

    // eslint-disable-next-line
    {/*setTimeout(() => {
      setCategorias([
        ...categorias,
        {
          "id":1,
          "nome": "Front End",
          "descricao": "Uma categoria",
          "cor": "#6bd1ff"
      },
      {
          "id":2,
          "nome": "Back End",
          "descricao": "Outra categoria",
          "cor": "#6bd1ff"
      }
      ]);
    }, 4*1000);*/}

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

        setValues(valoresIniciais);
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
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
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
