import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault/PageDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField/FormField'

function CadastroCategoria() {


    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#121212',
    }

    const [categorias, setCategorias] = useState([]);

    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor, //nome: 'valor'
        })
    }

    function handleChange(ev) {
        /*const { getAttribute, value } = ev.target;*/
        setValue(
            ev.target.getAttribute('name'),
            ev.target.value
        );
    }
    return (
        <PageDefault>

            <h3>Cadrastro de Categoria: {values.nome}</h3>

            <form onSubmit={function handleSubmit(ev) {
                ev.preventDefault();
                //console.log("submit")
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais)
            }}>


                <FormField
                    label="Nome da categoria: "
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />
                {/*
                <FormField
                    label="Descrição: "
                    type="text"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                >
                    textarea
                    
                </FormField>
                */}

                <FormField
                    label="cor: "
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />

                {/*
                <div>
                    <label>
                        Nome da Categoria:
                    <input
                            type="text"
                            name="nome"
                            value={values.nome}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                
                <div>
                    <label>
                        Descrição:
                    <textarea
                            type="text"
                            value={values.descricao}
                            name="descricao"
                            onChange={handleChange}
                        />
                    </label>

                </div>

                <div>

                    <label>

                        Cor:
                        
                        <input

                            type="color"
                            value={values.cor}
                            name="cor"
                            onChange={handleChange}

                        />
                    </label>

                </div>
                */}

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para Home
      </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;