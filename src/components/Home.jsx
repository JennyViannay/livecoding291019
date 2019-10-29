import React from 'react';
import NavBar from './NavBar';

const attackPlop = Math.random(10, 100);


class Home extends React.Component {
    state = {
        party: false,
        score : 150,
        pseudo: ''
    }

    startParty = (e) => {
        this.setState({
            party: true
        })
    }

    handleChange = (e) => {
        this.setState({
            pseudo: e.target.value
        })
    }

    attack = (e) => {
        if(this.state.party == true){
            const newScore = this.state.score - attackPlop;
             this.setState({
                score : newScore
             })
        }
        else {
            alert('Please start party before attack someone')
        }
    }

    render() {
        console.log(this.state);
        
        return(
            <div>
                <NavBar />
                <input type="text" name="pseudo" onChange={this.handleChange}/>
                <input type="button" value="Start party" onClick={this.startParty} />

                <input type='button' value="Attack" onClick={this.attack}/>
            </div>
        )
    }
}












export default Home;