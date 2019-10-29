import React from 'react';
import Navbar from './Navbar';

import axios from 'axios';

import './About.css'

export default class About extends React.Component {
    state = {
        data : []
    }
    componentWillMount() {
        axios.get('https://melroune.github.io/starwars-api/api/all.json').then((response) => {
            this.setState({
                data: response.data
            })
        })
    }
    render() { 
        return (
         <div>
            <Navbar /> 
            <div>
                {this.state.data.map(jedi=> {
                    return (
                        <div className="card">
                            <p className="name">{jedi.name}</p>
                            <img className="image" src={jedi.image} alt=""/> 
                            <p className="homeworld">Homeworld : {jedi.homeworld}</p>
                        </div>
                        )
                    })
                }
            </div> 
         </div>
        )
    }
}