import React, { Component } from 'react';

import ArticleBrief from './ArticleBrief';

export default class ArticlesList extends Component {
    render() {
        const { articles } = this.props;

        return(
            <React.Fragment>    
                <h1>Articles:</h1>
                {articles.map((article, i) => {
                    return (
                        <ArticleBrief key={i} article={article}/>
                    )
                })}
            </React.Fragment>
        )
    }
}