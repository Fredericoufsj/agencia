import React from 'react';
import ReactDOM from 'react-dom';
import Destinos from './Pages/Destinos/Destinos';
import Home from './Pages/Home/Home';
import Contatos from './Pages/Contatos/Contatos';
import Cadastro from './Pages/Cadastro/Cadastro';
import Promocoes from './Pages/Pomocoes/Promocoes';
import Admin from './Pages/Admin/index';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'



ReactDOM.render(
  <React.StrictMode>

<Router>
  <Routes>
    <Route path='/' exact element={<Home/>}></Route>
    <Route path='/Destinos' element={<Destinos/>}></Route>
    <Route path='/Contatos' element={<Contatos/>}></Route>
    <Route path='/Cadastro' element={<Cadastro/>}></Route>
    <Route path='/Promocoes' element={<Promocoes/>}></Route>
    <Route path='/Admin' element={<Admin/>}></Route>
  </Routes>
</Router>

    
  </React.StrictMode>,
  document.getElementById('root')
);


