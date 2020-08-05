import React, { Component } from "react";

//Defining the Form
export class ValidationError extends Component {
    render() {
        if (this.props.errors) {
            return this.props.errors.map(err =>
                <h6 className="text-danger m-1" key={err}>
                    { err }
                </h6>
            )
        }
        return null;
    }
}