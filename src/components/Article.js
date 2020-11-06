import React, { Component } from 'react';

export default class Article extends Component {
    render() {
        const { article, i } = this.props;

        return (
            <React.Fragment key={i}>
                <h1>{article.title}</h1>
                {article.content.map( (paragraph, j) => {
                    return (<p key={j}>{paragraph}</p>) 
                })}
            </React.Fragment>  
        )
    }
}