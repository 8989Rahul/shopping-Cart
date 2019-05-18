import React, { Component } from 'react'

export default class ShoppingItem extends Component {
  render() {
    const { id, url, name, price } = this.props.item
    const { increment, decrement } = this.props

    return (
      <div>
        <div className="col-10 mx-auto  my-3">
          <div className="card">
            <img
              src={url}
              alt="item"
              className="img-card-top"
              className="d-block w-95"
              style={{ height: '14em' }}
            />
            <div className="card-body ">
              <h6>
                Name : <b>{name}</b>
              </h6>
              <h6>
                Price : <b>RS {price}</b>
              </h6>
              <button
                onClick={() => increment(price)}
                className="mx-2 btn btn-success"
              >
                +
              </button>
              <button
                onClick={() => decrement(price)}
                className="mx-2 btn btn-danger"
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
