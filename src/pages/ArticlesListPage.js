import React, { Component } from 'react';

import ArticlesList from '../components/ArticlesList';
import articles from './article-content';

export default class ArticlesListPage extends Component {
    render() {
        return(
            <React.Fragment>    
                <ArticlesList articles={articles} /> 
            </React.Fragment>
        )
    }
}