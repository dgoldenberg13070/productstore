import React, { Component } from 'react';
import Product from './Product';
import NavBar from './NavBar'; 

class App extends Component {
  constructor(){
    super();

    this.state = {
      cart: []
    }
  }

  addToCart = (product) => {

    this.setState(state => {return {cart: this.state.cart.concat([product])}});
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="container">
          <div className="row">
            <div className="col-12 my-3">
            <p>There are {this.state.cart.length} items in your cart</p>
		<ul>
			{this.state.cart.map(e => <li>{e}</li>)}
		</ul>
            </div>
          </div>
          <div id="products" className="row view-group">
            {["hot dog", "ice cream", "root beer", "french fries", "hanburger", "chilli dog"].map(e => <Product e={e} addToCart={this.addToCart}></Product>)}            
            </div>
        </div>
      </div>
    );
  }
}

export default App;