import React, { Component } from "react";
import ShoppingItem from "./ShoppingItem";

export default class Shopping extends Component {
  render() {
    const { items } = this.props;
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                style={{ width: "25rem" }}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          {items.map(item => {
            return (<ShoppingItem
            increment = {this.props.increment}
            decrement = {this.props.decrement}
            key={items.id}
            item={item} />)
          })}
        </div>
      </div>
    );
  }
}
