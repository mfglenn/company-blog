import React, { Component } from 'react';

export default class ArticlesPage extends Component {
    render() {
        //Deconstruct match property from props
        const { match } = this.props;

        //Get query parameter name
        const name = match.params.name;

        return(
            <React.Fragment>    
                <h1>This is the { name } article</h1>
            </React.Fragment>
        )
    }
}