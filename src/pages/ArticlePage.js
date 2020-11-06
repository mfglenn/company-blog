import React, { Component } from 'react';
import Article from '../components/Article'
import articles from './article-content'

export default class ArticlePage extends Component {
    render() {
        //Deconstruct match property from props
        const { match } = this.props;
        
        //Get query parameter name
        const name = match.params.name;
        
        //Lookup article
        let article = articles.find(lkp => lkp.name === name);    
        if (!article){
            article = articles[0];
        }
        return(
            <React.Fragment>    
               <Article key={1} article={article} />
            </React.Fragment>
        )
    }
}