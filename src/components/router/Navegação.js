import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navegação.css';

class Navegação extends Component{
    render() {
        return(
            <div className='container'>
                <Link to='/'><h3>API  Deputados</h3></Link>
                <ul>
                    <Link to='/deputados'><li>Deputados</li></Link>
                </ul>
            </div>
        );
    }
}
export default Navegação;
