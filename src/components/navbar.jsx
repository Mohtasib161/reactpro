import React, { Component } from 'react';

// stateless functional component 

const Navbar = props => {
    console.log( 'Navbar - Rendered');
    return(

        <nav className="navbar navbar-light bd-light">
        <a className="navbar-brand" href="#">Navbar
        
        Navbar <span className="badge badge-pill badge-secondary">
        {props.totalCounters}</span>

        </a>
    </nav>


    );
};


 
export default Navbar;