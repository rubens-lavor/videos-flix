import React from 'react';
import PageDefault from '../../../components/PageDefault/PageDefault'
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField/FormField';
import Button from '../../../components/Button/Button';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {

  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: 'Vídeo padrão',
    url: 'https://www.youtube.com/watch?v=c8mVlakBESE',
    categoria: 'Front End'
  });

  return (
    <PageDefault>

      <h3>Cadrastro de Video</h3>

      <form onSubmit={(event) => {
        event.preventDefault();

        videosRepository.create({
          titulo:values.titulo,
          url:values.url,
          categoriaId: 1,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do vídeo: "
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL do vídeo: "
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria: "
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>

      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  )
}

export default CadastroVideo;