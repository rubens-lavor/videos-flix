import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';

import CadastroVideo from './pages/cadastro/Vídeo/Videos';
import CadastroCategoria from './pages/cadastro/Categoria/Categoria';

// eslint-disable-next-line react/jsx-filename-extension
const Pagina404 = () => (<div>Página 404</div>);
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
