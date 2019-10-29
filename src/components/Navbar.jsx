import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends React.Component {
    render() {
        return (
         <div>
             <nav> 
                <ul>
                    <li>
                        <NavLink exact to ="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact to ="/about">About</NavLink>
                    </li>
                </ul>
             </nav>
         </div>
        )
    }
}