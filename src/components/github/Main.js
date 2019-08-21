import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Main extends Component {
  state = {
    usuarios: [],
    user: "",
    loading: false,
  };

  handleInput = e => {
    this.setState({
      user: e.target.value
    });
  };

  handleClick = async e => {
  
    e.preventDefault();

    await axios
      .get(
        `https://api.github.com/users/${this.state.user}`
      )
      .then(res => {
        this.setState({
          loading: true,
          usuarios: [...this.state.usuarios, res.data]
        });
      })
  
    console.log(this.state.usuarios);
  };
  render(){
    return(
        <div className="container">
          <input onChange={this.handleInput} className="form-control"/>
          <button onClick={this.handleClick} className="btn btn-default"> Pesquisar </button>
          {this.state.usuarios.map(res => (
            <div>
            <img src={res.avatar_url}/>
            <p>{res.login}</p> 
            </div> 
          ))}
        </div>
    );
  }
}

export default Main;
