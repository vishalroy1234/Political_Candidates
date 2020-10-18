import React from 'react';
import {Link,NavLink,withRouter} from 'react-router-dom';
function Navbar(props) {
    
    return (
        <div>
            <nav className="nav-wrapper blue darken-3">
                <div className="container">
                    <Link to="/" className="brand-logo center">Ninjapp</Link>
                    <ul className="right">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default withRouter(Navbar);