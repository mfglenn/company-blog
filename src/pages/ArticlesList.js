import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Article from '../components/Article'
import articles from './article-content'

export default class ArticlesList extends Component {
    render() {
        return(
            <React.Fragment>    
                <h1>Articles:</h1>
                {articles.map((article, i) => {
                    return (
                        <Link className="article-list-item" key={i} to={`/article/${article.name}`}>
                            <h3>{article.title}</h3>
                            <p>{article.content[0].substring(0, 150)}</p>
                        </Link>
                    )
                })}
            </React.Fragment>
        )
    }
}