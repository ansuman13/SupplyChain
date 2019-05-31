import React from 'react';

const SignedOutLinks = () => {
    return (

        <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="/register/">Register <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/user/signin/">Signin</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/dashboard/">Dashboard</a>
            </li>
        </ul>
    )
}

export default SignedOutLinks;