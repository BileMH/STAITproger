
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Profayle from './Componet/Profayle';
import React, { Component } from 'react'

export default class App extends Component {
  constructor (props){
    super (props);
    this.state ={show :false,
    };
    
  }
  toggle=() => {
    this.setState ({ show :!this.state.show})
  }
  render() {
    return (
      <div className='APP'>
        <h1>CHECKPOINT STATE</h1>
<button onClick={this.toggle} >AFFICHAGE PROFAYLE </button>
{  this.state.show ?   <Profayle/> : null }
      </div>
    )
  }
}
