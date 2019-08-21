import React from 'react';
import axios from 'axios';

export default class Repositorios{

  state = {
    Repositorios: []
  }

  componentDidMount(){
    const { id } = this.props.match.params;

    axios.get(`https://api.github.com/users/${id}/repos`).then(res => {
      this.setState({Repositorios: res});
      console.log(Repositorios);
    })
  }
  render(){
    return(
      <div></div>
    );
  }
}
