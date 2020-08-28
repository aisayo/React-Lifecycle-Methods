import React from 'react';

import Brew from './Brew'

const BrewList = (props) => {

    return (
        <div>
            {props.brews.map(brew => <Brew key={brew.id} brew={brew}/>) }
            
        </div>
    );
};

export default BrewList;