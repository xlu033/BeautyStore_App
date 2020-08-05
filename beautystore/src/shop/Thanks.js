import React, { Component } from "react";
import { Link } from "react-router-dom";

//present  the user with confirmation of their order 
//and to complete the checkout process

export class Thanks extends Component {
    render() {
        return <div>
            <div className="col bg-dark text-white">
                <div className="navbar-brand">BEAUTY STORE</div>
            </div>
            <div className="m-2 text-center">
                <h2>Thank You!</h2>
                <p>Thanks for shopping with us.</p>
                <p>Your order is #{ this.props.order ? this.props.order.id : 0 }</p>
                <p>We'll ship your goods as soon as possible.</p>
                <p>Enjoy your new beauty!</p>
                <Link to="/shop" className="btn btn-primary">
                    Return to Store
                </Link>
            </div>
        </div>
    }
}