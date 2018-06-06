import React, { Component } from 'react';
import Card from '../Card/Card';
import films from '../VideoData/data';
import _map from 'lodash/map';
import ScrollableAnchor from 'react-scrollable-anchor'

class Portfolio extends Component {
    render(){
        return(
            <ScrollableAnchor id={'portfolio'}>
            <div style={{ padding: 100 }}>
                <h1>Portfolio</h1>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'center'}}>
                    {_map(films, (film, index) => <Card film={film} key={index}/>)}
                </div>
            </div>
            </ScrollableAnchor>
        )
    }
}

export default Portfolio