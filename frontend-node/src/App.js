import React, {useContext} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Sidebar from "./components/sidebar/Sidebar";
//routes
import Clientes from "./components/clientes/Clientes";
import NuevoCliente from "./components/clientes/NuevoCliente";
import EditarCliente from "./components/clientes/EditarCliente";

import Productos from "./components/productos/Productos";
import NuevoProducto from "./components/productos/NuevoProducto";
import EditarProducto from "./components/productos/EditarProducto";

import Pedidos from "./components/pedidos/Pedidos";
import NuevoPedido from "./components/pedidos/NuevoPedido";

import Login from "./components/auth/Login";

//importar context
import {CRMContext} from "./context/CRMContext"


function App() {
  
//utilizar context en el componente
  const [auth] = useContext(CRMContext)

  return (
    <div >
      <BrowserRouter>
             {auth.auth ? (
              <div className="contenedor" >
               <Sidebar />
                 <Header />
               <div className="main" >
                    <div className="main-interno" >
                    <Switch>
                      <Route exact={true} path="/" component={Clientes} />
                      <Route exact={true} path="/clientes/nuevo" component={NuevoCliente} />
                      <Route exact={true} path="/clientes/editar/:id" component={EditarCliente} />
          
                      <Route exact={true} path="/productos" component={Productos} />
                      <Route exact={true} path="/productos/nuevo" component={NuevoProducto} />
                      <Route exact={true} path="/productos/editar/:id" component={EditarProducto} />
          
                      <Route exact={true} path="/pedidos" component={Pedidos} />
                      <Route exact={true} path="/pedidos/nuevo/:id" component={NuevoPedido} />
          
                    </Switch>
                    </div>
                  </div>
              </div>
             ): (
              <Route exact={true} path="/iniciar-sesion" component={Login} />
             )} 
      </BrowserRouter>
    </div>
  );
}

export default App;
