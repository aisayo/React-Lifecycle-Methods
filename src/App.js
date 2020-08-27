import React, { Component } from 'react';

import Users from './Users'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            user: ''
        }

        console.log('inside constructor')
        
    }

    // static getDerivedStateFromProps(props, state){
    //     console.log('inside getDerivedStateFromProps', state)
    //     return { user: props.user }
    // }

    componentDidMount(){
        console.log('component did mount')
        fetch('https://api.github.com/users')
        .then(resp => resp.json())
        .then(g => this.setState({ users: g }))
        
    }

    

    render() {

        console.log('inside render', this.state)
        return (
            <div>
                <Users users={this.state.users} />
            </div>
        );
    }
}

export default App;