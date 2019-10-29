import React from 'react';
import NavBar from './NavBar';
import axios from 'axios';

class About extends React.Component {
    state = {
        data: []

    }
    componentDidMount() {
        axios.get('https://melroune.github.io/starwars-api/api/all.json')
            .then(res => { this.setState({ data: res.data }) })
    }
    render() {
        // const data = this.state.data
        // console.log(data)
        return (
            <div>
                <NavBar />
                {this.state.data.map(characters => {
                    console.log(characters)
                    return (<div><p>{characters.name}</p>
                    <img src={characters.image} alt=''></img>
                    </div>
                        
                        )
                })}
            </div>
        )
    }
}














export default About;