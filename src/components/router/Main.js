import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Deputados from './Deputados';
import Navegação from './Navegação';
import Sobre from './Sobre';

function Main() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' component={Navegação}/>
        <Route path='/deputados' exact component={Deputados}/>
        <Route path='/sobre' exact component={Sobre}/>
        <Route path='/deputados/:id' component={Sobre}/>
      </div>
    </BrowserRouter>
  );
}

export default Main;
