import React, { Component } from 'react';

class Product extends Component {

    addToCartOnClick = () => {
        this.props.addToCart(this.props.e);
    }
   
    render() {
        return (<div className="item col-4">
                    <div className="thumbnail card">
                        <div className="img-event">
                            <img className="group list-group-image img-fluid" src="http://placehold.it/400x250/000/fff" alt=""/>
                        </div>
                        <div className="caption card-body">
                            <h4 className="group card-title inner list-group-item-heading">{this.props.e}</h4>
                            <p className="group inner list-group-item-text">
                            Product description... Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat.
                            </p>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <p className="lead">$21.000</p>
                                </div>
                                <div className="col-12 col-md-6">
                                <button className="btn btn-primary" onClick={this.addToCartOnClick} >Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="pushy pull-right text-center">
                            <div className="btn-group">
                                <button className="btn btn-info" id="list">List View</button>
                                <button className="btn btn-danger" id="grid">Grid View</button>
                            </div>
                        </div>
                    </div>
                </div>);
    }
}

export default Product;