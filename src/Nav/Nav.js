import React from 'react';
import './Nav.css';
/*import Link from 'react-router';*/

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state={};
    }

    render() {
        return (
            <header className="header">
                <div className="constrain">
                    <h1>Cory R. Dunn</h1>
                    <nav className="navigation">
                        <a className="nav-toggle" href="#">
                            <span className="trigger">&#9776;</span>
                            <ul>
{/*                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/projects'>Projects</Link></li>
                                <li><Link to='/resume'>Resume</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>*/}
                                <li>Home</li>
                                <li>About</li>
                                <li>Projects</li>
                                <li>Resume</li>
                                <li>Contact</li>
                            </ul>
                        </a>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Nav;