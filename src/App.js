import React, { Component } from 'react';

import Brews from './Brews'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            brews: [],
            loading: true
        }

        console.log('inside constructor')
        
    }

    // static getDerivedStateFromProps(props, state){
    //     console.log('inside getDerivedStateFromProps', state)
    //     return { user: props.user }
    // }

    componentDidMount(){
        console.log('component did mount')
        fetch('https://api.openbrewerydb.org/breweries')
        .then(resp => resp.json())
        .then(brews => this.setState({
            brews: brews,
            loading: false
        }))
        
    }

    loading(){
        if (this.state.loading){
            return 'Loading...'
        }
    }

    searchQuery = (brews) => {
        this.setState({
            brews: brews
        })
    }
    render() {

        console.log('inside render', this.state)

        return (

            <div>
                {this.loading()}
                <Brews brews={this.state.brews} searchQuery={this.searchQuery}/>
            </div>
        );
    }
}

export default App;


