import React, { Component } from 'react';

export default class Article extends Component {
    render() {
        const { article, i } = this.props;

        return (
            <React.Fragment key={i}>
                <h1>{article.title}</h1>
                <p>This post has been upvoted {article.upvotes} times.</p>
                {article.content.map( (paragraph, j) => {
                    return (<p key={j}>{paragraph}</p>) 
                })}
            </React.Fragment>  
        )
    }
}