import React, { Component } from "react";

//displaying details of a list of products
export class ProductList extends Component {

    render() {
        if (this.props.products == null || this.props.products.length === 0) {
            return <h5 className="p-2">No Products Available</h5>
        }

        return this.props.products.map(p =>
                <div className="card m-4 p-1 bg-light" key={ p.id }>
                    <h3 className="m-3">
                        { p.name }

                    </h3>
                    <h5 className="m-3">
                        <span className="badge badge-info ml-1">
                            {p.size}
                        </span>

                        <span className="badge badge-pill badge-primary float-right">
                            ${ p.price.toFixed(2) }
                        </span>
                    </h5>
                    <div className="card-text bg-white p-2">
                        <h6 className="m-2">{ p.description }</h6>
                        <button className="btn btn-success btn-sm float-right m-2"
                                onClick={ () => this.props.addToCart(p) } >
                                 Add To Cart
                        </button>
                    </div>

                </div>
        )
    }
}