import React, { Component } from 'react';
import ArticlesList from '../components/ArticlesList';
import Article from '../components/Article';
import articles from './article-content';

export default class ArticlePage extends Component {
    render() {
        //Deconstruct match property from props
        const { match } = this.props;
        
        //Get query parameter name
        const name = match.params.name;
        
        //Lookup article
        let article = articles.find(lkp => lkp.name === name);    
        
        if (!article){
            return (<h1>Article does not exist.</h1>)
        }
        let relatedArticles = articles.filter(lkp => lkp.name !== name);

        return(
            <React.Fragment>    
               <Article key={1} article={article} />
               <h3>Other Articles</h3>
               <ArticlesList articles={relatedArticles} /> 
            </React.Fragment>
        )
    }
}