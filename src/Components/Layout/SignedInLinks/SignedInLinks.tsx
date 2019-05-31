import React from 'react';
import '../SignedInLinks/signedinlinks.css'

const SignedInLinks = () => {
    return (
        <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link 2</a>
            </li>
        </ul>
    )
}

export default SignedInLinks;