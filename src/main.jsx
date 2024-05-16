import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Cadastro from './components/cadastro';
import Corpo from './components/corpo';
import Login from './components/login';
import KanbanDark from './components/kanbanDark.jsx';
import LoginSenhaIncorreta from './components/loginSenhaIncorreta.jsx';
import CadastroSenhaIncorreta from './components/cadastroIncorreto.jsx';
import { CounterContextProvider } from './context/CounterContext.jsx';
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom';
import {register} from 'swiper/element/bundle';
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const router = createBrowserRouter([
  {
    path:'cadastro',
    element: <Cadastro/>,
  },
  {
    path:'/',
    element: <Login/>,
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
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <CounterContextProvider>
      <RouterProvider router={router}/>
    </CounterContextProvider>
  </React.StrictMode>
  
 
);
