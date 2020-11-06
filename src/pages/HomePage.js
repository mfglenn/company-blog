import React, { Component } from 'react';
import ArticlesList from '../components/ArticlesList';
import articles from './article-content';

export default class HomePage extends Component {
    render () {
        return(
            <React.Fragment>
                <section>
                    <h1>Hello, welcome to the BlockCraft development blog!</h1>
                    <p>
                        BlockCraft specializes in the implementation of the Accolade software suite 
                        and the development of supporting applications and plugins.  The majority 
                        of our development work is aimed at improving the user experience for Accolade
                        users, and by doing so improve the adoption of the software suite as a whole.
                    </p>
                    <p>
                        Accolade is a powerful project management solution, but due to the age of the 
                        codebase, customers are forced to use outdated interfaces that feel clumsy and riogid 
                        when compared to modern web applications.  BlockCraft aims to bridge the gap between 
                        the outdated Accolade product and new design methodologies that leverage responsive design, 
                        emphasize accessibility, and provide flexibility to customers that is not currently 
                        possible through the Accolade software solution.  
                    </p>  
                    <p>
                        BlockCraft's custom web applications take the form of either standalone applications, that
                        interface with the Accolade using the RESTful API that the software suite provides.  This
                        ensures that all of the appropriate user authentication and project management business logic
                        that is at the core of the Accolade software offering is incorporated directly into our custom 
                        applications, meaning there is no additional configuration required to get up and running with
                        our solutions.
                    </p>
                </section>
                <section>
                    <h2>Useful Articles:</h2>
                    <ArticlesList articles={articles} /> 
                </section>
            </React.Fragment>
        )
    }
}