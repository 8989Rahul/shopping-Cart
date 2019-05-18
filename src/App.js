import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Shopping from './components/Shopping'
import { items } from './items'

export default class App extends Component {
  state = {
    items: items,
    total_price: 0
  }

  handleIncreament = value => {
    const convertToNumber = Number(value)
    this.setState({
      total_price: this.state.total_price + convertToNumber
    })
  }
  handleDecrement = value => {
    const convertToNumber = Number(value)
    const checkOutcome = this.state.total_price - convertToNumber
    if (checkOutcome >= 0) {
      this.setState({
        total_price: this.state.total_price - convertToNumber
      })
    }
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <Navbar />
        </div>

        <div id="div1">
          <Shopping
            increment={this.handleIncreament}
            decrement={this.handleDecrement}
            items={this.state.items}
          />
        </div>

        <div id="div2">
          <h3>Total items = {this.state.total_price}</h3>
        </div>
      </React.Fragment>
    )
  }
}
