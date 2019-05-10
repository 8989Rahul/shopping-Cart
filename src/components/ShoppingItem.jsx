import React, { Component } from "react";
import Purches from "./Purches";

export default class ShoppingItem extends Component {

  add=()=>{
    console.log(this.props);
    
  };

  remove = ()=> {
    return (newtotal_items =
      total_items > 0 ? total_items - 1 : total_items - 0);
    this.setState({ total_items: newtotal_items });
  };

  render() {
    const { id, url, name, price } = this.props.item;
    const { total_items } = this.props;
    let newtotal_items;

    return (
      <div>
        <Purches add={this.add} remove={this.remove} />
        <div className="col-10 mx-auto  my-3">
          <div className="card">
            <img
              src={url}
              alt="item"
              className="img-card-top"
              className="d-block w-95"
              style={{ height: "14em" }}
            />
            <div className="card-body ">
              <h6>
                Name : <b>{name}</b>
              </h6>
              <h6>
                Price : <b>{price}</b>
              </h6>
              <button  onClick={this.add()} className="mx-2 btn btn-primary">
                +
              </button>
              <button  onClick={ this.remove(id)} className="mx-2 btn btn-danger">
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
