import React, { Component } from 'react';
import './App.css'
import Card from './services/Card'
import { Button } from '@material-ui/core';
import LandingPage from './services/LandingPage'
import Template from './templates/AppTemplate';
import Typography from '@material-ui/core/Typography';
import AddButton from './services/AddButton'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deeds: [
                {message: "This is the first message", name: "shaafi", location: "Dhaka"},
                {message: "This is the second message", name: "tamanna", location: "Chittagong"},
                {message: "No idea what is this", name: "no name", location: "Rajshahi"}
            ]
        }
    }
    handleClick = () => {
        const newDeeds = {message: "This is the added message", name: "shaafi", location: "Dhaka"};
        this.setState({deeds: [...this.state.deeds, newDeeds]});
        console.log('click happened');
    }
    render() {
        return(
            <div className = "App">
                <Template>
                    <Typography variant="h4" align="center">
                        What is the one good deed that you've done today?
                        <AddButton handleClick = {this.handleClick}/>
                    </Typography>
                    {this.state.deeds.map((deed, index) => (
                        <Card message = {deed.message} name = {deed.name} location = {deed.location}></Card>
                    ))}
                    {/* <Card message = {this.state.deeds[0].message} name = {this.state.deeds[0].name} location={this.state.deeds[0].location}/> */}
                    {/* <Card message = {this.state.deeds[1].message} name = {this.state.deeds[1].name} location={this.state.deeds[1].location}/> */}
                </Template>
            </div>
            
        );
    }
};

export default App;