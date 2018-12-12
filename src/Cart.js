import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addToCart } from './actions';
import { removeFromCart } from './actions';

class Cart extends Component {
  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Hot Dog
          <span className="badge badge-primary badge-pill">14</span>
          <span className="badge badge-primary badge-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Ice Cream
          <span className="badge badge-primary badge-pill">2</span>
          <span className="badge badge-primary badge-pill">2</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Root Beer
          <span className="badge badge-primary badge-pill">1</span>
          <span className="badge badge-primary badge-pill">1</span>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: (product) => {
      dispatch(addToCart(product))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

