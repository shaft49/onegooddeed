import React, { Component } from 'react';
import './App.css'
import Card from './services/Card'
import Template from './templates/AppTemplate';
import Typography from '@material-ui/core/Typography';
import Dialog from'./services/Dialog'
import axios from './axios-deeds'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deeds: [
                // {id: "0", message: "This is the first message", name: "shaafi", location: "Dhaka"},
                // {id: "1", message: "This is the second message", name: "tamanna", location: "Chittagong"},
                // {id: "2", message: "No idea what is this. I'm trying to build a site with react. Lets's see how far can I go. And it'll be awesome. You wanto to know. I don't know how to write . Just checking whether it breaks", name: "no name", location: "Rajshahi"}
            ]
        }
    }

    componentDidMount() {
        console.log('here we are');
        axios.get('/deeds.json')
            .then(response => {
                // const posts = response.data.slice(0, 4);
                // const updatedPosts = posts.map(post => {
                //     return {
                //         ...post,
                //         location: 'Dhaka'
                //     }
                // });
                const data = [];
                for(let key in response.data) {
                    data.push({
                        ...response.data[key],
                        id: key
                    });
                }
                this.setState({deeds: data})
                // console.log(data);
            })
            .catch( error => {
                console.log(error);
            });
    }

    addNewDeed = (props) => {
        const {message, name, location} = props;
        const newDeeds = {
            id: this.state.deeds.length,
            message: message,
            name: name,
            location: location
        };
        this.setState({deeds: [...this.state.deeds, newDeeds]});
        axios.post('/deeds.json', newDeeds)
        .then(response => {
            // console.log(response)
        })
        .catch( error => {
            console.log(error);
        });
    }

    render() {
        let cards = null;
        if (this.state.deeds) {
            cards = (
                <div>{
                    this.state.deeds.map((deed, index) => {
                        return <Card key = {deed.id} message = {deed.message} name = {deed.name} location = {deed.location}/>
                    })
                    }
                </div>
            );
        }

        return(
            <div className = "App">
                <Template>
                    <Typography variant="h4" align="center">
                        What is the one good deed that you've done today?

                        <Dialog addNewDeed = {this.addNewDeed}/>
                    </Typography>
                    {cards}
                </Template>
            </div>
            
        );
    }
};

export default App;