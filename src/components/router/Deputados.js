import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './D';
function Deputados() {

useEffect(() => {
  PesquisaDeputado();
}, []);

const [items, setItems] = useState([]);

const PesquisaDeputado = async () => {
  const data = await fetch('https://dadosabertos.camara.leg.br/api/v2/deputados/');
  const items = await data.json();
  console.log(items.dados);
  setItems(items.dados)
}

  return (
    <div className="Deputados">
      {items.map(item => (
        <p key={item.id}>
        <img className='foto' src={item.urlFoto}/>
        <br/>
        <p>Dados Pessoais: <Link className="dec" to={`/deputados/${item.id}`}>{item.uriPartido}</Link></p>
        </p>
    ))}
    </div>
  );
}

export default Deputados;
