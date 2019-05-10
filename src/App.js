import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Shopping from './components/Shopping';
import {items} from './items';
import './App.css';

export default class App extends Component {
  state = {
    items : items,
    total_items : 0
  }

  handleIncreament = (value) =>{
      this.setState({
        total_items : this.state.total_items + value
      })
  }
  handleDecrement = (value) =>{
    this.setState({
      total_items : this.state.total_items - value
    })
}
  render() {

    return (
      <React.Fragment>  

        <div><Navbar /></div>

        <div id="div1">
        <Shopping 
        increment = {this.handleDecrement}
        decrement = {this.handleIncreament}
        items = {this.state.items}
        />
        </div>

        <div id="div2" >
        <h3>Total items = {this.state.total_items}</h3>
        </div>   
        
      </React.Fragment>
    )
  }
}
