import React, { Component } from 'react';

import Brews from './Brews'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: true
            brews: [],
            loading: true,
            type: ''
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

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("prevState", prevState)
        console.log("prevProps", prevProps)
        console.log(this.props)
        console.log(this.state)
        return this.state
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

   setMicro = () => {
       this.setState({ type: 'micro'})
   }

   setContract = () => {
    this.setState({ type: 'contract'})
}

setBrewPub = () => {
    this.setState({ type: 'brewpub'})
}

setRegional = () => {
    this.setState({ type: 'regional'})
}

componentDidUpdate(prevProp, prevState){
    console.log('prevstate', prevState)
    if ( prevState.type !== this.state.type){
        fetch(`https://api.openbrewerydb.org/breweries?by_type=${this.state.type}`)
        .then(resp => resp.json())
        .then(brews => this.setState({
            brews: brews
        }))
    }
}

    render() {

        console.log('inside render', this.state)

        return (

            <div>
                {this.loading()}
                <Brews brews={this.state.brews} searchQuery={this.searchQuery}/>
                <button onClick={this.setMicro}>Micro</button>
                <button onClick={this.setContract}>Contract</button>
                <button onClick={this.setBrewPub}>Brewpub</button>
                <button onClick={this.setRegional}>Regional</button>
            </div>
        );
    }
}

export default App;


