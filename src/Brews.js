import React from 'react';

import BrewsList from './BrewList'
import SearchForm from './SearchForm'

const Brews = (props) => {
    return (
        <div>
            <SearchForm searchQuery={props.searchQuery}/>
            <BrewsList brews={props.brews}/>
        </div>
    );
};



export default Brews;