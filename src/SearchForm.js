import React, { Component } from 'react';

import { Form } from 'react-bootstrap'

class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    searchQuery = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    handleSubmit = (e) => {
        fetch(`https://api.openbrewerydb.org/breweries?by_state=${this.state.query}`)
        .then(resp => resp.json())
        .then(brews => this.props.searchQuery(brews))

    }
    
    render() {
        return (
            <Form style={{ paddingTop: 50}} onSubmit={this.handleSubmit}>

                <Form.Group controlId="formSearch">
                    <Form.Control type="text" value={this.state.query} onChange={this.searchQuery} placeholder="Search by state..."/>
                    <Form.Control type="submit" value='search'/>
                </Form.Group>
                    
                    

            </Form>
        );
    }
}

export default SearchForm;