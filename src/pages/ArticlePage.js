import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/ArticlesList';
import Article from '../components/Article';
import articles from './article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {     
    //Get query parameter name
    const name = match.params.name;
    
    const [articleInfo, setArticleInfo] = useState({upvotes: 0, comments: []});

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();
    }, [name]);

    //Lookup article
    let article = articles.find(lkp => lkp.name === name);    
    article.upvotes = articleInfo.upvotes;
    article.comments = articleInfo.comments;

    if (!article) {
        return (<NotFoundPage/>);
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

export default ArticlePage;