import React, { Component } from 'react';
import Article from '../components/Article'
import articles from './article-content'

export default class ArticlesList extends Component {
    render() {
        return(
            <React.Fragment>    
                <h1>These are some recommended articles from BlockCraft!</h1>
                {articles.map((article, i) => {
                    return <Article key={i} article={article} />
                })}
            </React.Fragment>
        )
    }
}