import React, { Component } from 'react';

export default class AboutPage extends Component {
    render() {
        return(
            <React.Fragment>    
                <h1>Hello, welcome to the BlockCraft about us page!</h1>
                <p>
                    BlockCraft specializes in the implementation of the Accolade software suite 
                    and the development of supporting applications and plugins.  The majority 
                    of our development work is aimed at improving the user experience for Accolade
                    users, and by doing so improve the adoption of the software suite as a whole.
                </p>
            </React.Fragment>
        )
    }
}