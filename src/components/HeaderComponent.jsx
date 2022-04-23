import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
               <header>
                   <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://javaspring.net" className="navbar-brand">Employee Management App</a></div>
                   </nav>
                   </header> 
            </div>
        );
    }
}

export default HeaderComponent;