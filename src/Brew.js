import React from 'react';

import { Card } from 'react-bootstrap';

const Brew = (props) => {

    const brew = props.brew

    return (
        <div >
            <Card style={cardStyle}>
                <Card.Body>
                    <Card.Title style={{ color: 'red'}}>{brew.name}</Card.Title>
                    <Card.Text>Location:{brew.city ? <>{brew.city}, {brew.state}</> : 'Not Available'}</Card.Text>
                    <Card.Text>Contact: {brew.phone ? <>{brew.phone}</> : 'Not available'}</Card.Text>
                    <Card.Text>Type: {brew.brewery_type} </Card.Text>
                    <Card.Link href={brew.website_url}>{brew.website_url}</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );  
};

const cardStyle = {
    width: '18rem', 
    border: 'solid', 
    marginBottom: 50, 
    marginTop: 50, 
    paddingBottom: 25, 
    paddingTop: 25, 
    paddingLeft: 50 
}

export default Brew;

