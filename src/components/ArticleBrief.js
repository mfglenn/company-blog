import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ArticleBrief extends Component {
    render() {
        const { article, i } = this.props;

        return (
            <React.Fragment key={i}>
                <Link className="article-list-item" key={i} to={`/article/${article.name}`}>
                    <h3>{article.title}</h3>
                    <p>{article.content[0].substring(0, 150)}</p>
                </Link>
            </React.Fragment>  
        )
    }
}