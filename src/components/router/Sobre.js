import React, {useState, useEffect} from 'react';
import './Sobre.css'
function Sobre({ match }) {

useEffect(() => {
  PesquisaDeputad()
}, []);

const [item, setItem] = useState({});

const PesquisaDeputad = async () => {
  const PesquisaDeputad = await fetch(`https://dadosabertos.camara.leg.br/api/v2/deputados/${match.params.id}`);
  const item = await  PesquisaDeputad.json();
  setItem(item.dados);
  console.log(item.dados);
}

  return (
    <div className="Deputados">
      <p>Nome Civil:<p>{item.nomeCivil}</p></p>
      <p>CPF:<p>{item.cpf}</p></p>
      <p>Sexo:<p>{'SEXO: ' + item.sexo}</p></p>
      <p>Data de Nascimento:<p>{item.dataNascimento}</p></p>
    </div>
  );
}

export default Sobre;
