import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Cadastro from './components/cadastro';
import Corpo from './components/corpo';
import Login from './components/login';
import KanbanDark from './components/kanbanDark.jsx';
import LoginSenhaIncorreta from './components/loginSenhaIncorreta.jsx';
import CadastroSenhaIncorreta from './components/cadastroIncorreto.jsx'

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom';
import App from './App.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element: <Login/>,
  },
  {
    path:'cadastro',
    element: <Cadastro/>,
  },
  {
    path:'kanban',
    element: <Corpo/>,
  },
  {
    path:'kanbanDark',
    element: <KanbanDark/>,
  },
  {
    path:'senhaIncorreta',
    element: <LoginSenhaIncorreta/>,
  },
  {
    path:'cadastroIncorreto',
    element: <CadastroSenhaIncorreta/>,
  },
  {
    path:'/teste',
    element: <App/>,
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div style={{height: '100vh'}}>
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
  </div>
 
);
