import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import Login from './routes/Login';
import SectionClientes,{loader as clienteLoader} from './routes/Clientes/SectionClientes';
import ViewCliente, {loader as viewClienteLoader,action as viewClienteAction} from './routes/Clientes/ViewCliente';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Login/>
      },
      { 
        path: "/clientes", 
        element: <SectionClientes/>,
        loader: clienteLoader
      },
      {
        path: "/clientes/view/:clienteId",
        element: <ViewCliente/>,
        loader: viewClienteLoader,
        action: viewClienteAction
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
