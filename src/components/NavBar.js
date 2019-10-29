import React from 'react';
import {NavLink} from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return(
            <div>
                <ul>
                    <li><NavLink exact to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                </ul>
            </div>
        )
    }
}












export default NavBar;