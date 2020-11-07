import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import articles from './article-content';
import NotFoundPage from './NotFoundPage';
import UpvoteSection from '../components/UpvoteSection';
import AddCommentForm from '../components/AddCommentForm';

const ArticlePage = ({ match }) => {     
    //Get query parameter name
    const name = match.params.name;
    
    //Set state variable and setter method
    const [articleInfo, setArticleInfo] = useState({upvotes: 0, comments: []});

    //Get article data from the server
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

    if (!article) {
        return (<NotFoundPage/>);
    }
    let relatedArticles = articles.filter(lkp => lkp.name !== name);

    return(
        <React.Fragment>    
            <h1>{article.title}</h1>
            <UpvoteSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo}/>
            {article.content.map( (paragraph, j) => {
                return (<p key={j}>{paragraph}</p>) 
            })}
            <CommentsList comments={articleInfo.comments}/>
            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo}/>
            <h3>Other Articles</h3>
            <ArticlesList articles={relatedArticles} /> 
        </React.Fragment>
    )
}

export default ArticlePage;