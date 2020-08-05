import React, { Component } from "react";
import { ToggleLink } from "../ToggleLink";

//navigate products
export class CategoryNavigation extends Component {
    render() {
        //it is highlighted when no category has been selected
        return <React.Fragment>
            
            <ToggleLink to={ `${this.props.baseUrl}/all` }  exact={ false }> All </ToggleLink>
            { this.props.categories && this.props.categories.map(cat =>
                <ToggleLink key={ cat }
                            to = { `${this.props.baseUrl}/${cat.toLowerCase()}`}>
                    { cat }
                </ToggleLink>
            )}

        </React.Fragment>
    }
}