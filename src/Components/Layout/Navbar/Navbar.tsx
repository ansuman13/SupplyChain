import React from 'react'
import './navbar.css';
import SignedInLinks from '../SignedInLinks/SignedInLinks' 
import SignedOutLinks from '../SignedOutLinks/SignedOutLinks' 


const Navbar = () =>{

    return (
        <div className="navbar-head">           
            <nav className="navbar navbar-expand-lg navbar-dark bg-supply">
                <a className="navbar-brand" href="/">Supply Chain</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            { 1<0?  <SignedInLinks/> : <SignedOutLinks/> }
                </div>
            </nav>
        </div>

    )
}

export default Navbar;