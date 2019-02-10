import React, { Component } from 'react';
import Card from '../Card/Card';
import films from '../VideoData/data';
import _map from 'lodash/map';
import ScrollableAnchor from 'react-scrollable-anchor'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Portfolio extends Component {

    handleScrollLeft = () => {
        // this.scrollContainer.scrollLeft -= 100;
        this.scrollContainer.scrollBy({ 
 // could be negative value
            left: -400, 
            behavior: 'smooth' 
          })
    }
    handleScrollRight = () => {
        // this.scrollContainer.scrollLeft += 100;
        this.scrollContainer.scrollBy({ 
            left: 400, // could be negative value 
            behavior: 'smooth' 
          })
    }

    render(){
        return(
            <ScrollableAnchor id={'portfolio'}>
                <div>
                    <span style={{ fontSize: 35, fontWeight: 100 }}>PORTFOLIO</span>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}> 
                    <div onClick={() => this.handleScrollLeft()}> <FontAwesomeIcon icon="chevron-left" style={{ fontSize: 70, marginRight:30 }}/> </div>
                    <div ref={el => this.scrollContainer = el}style={{ display: 'flex', flexWrap: 'nowrap', justifyContent:'center', overflowX:'hidden', alignItems:'center'}}>
                        {_map(films, (film, index) => <Card film={film} key={index}/>)}
                    </div>
                    <div onClick={() => this.handleScrollRight()}> <FontAwesomeIcon icon="chevron-right" style={{ fontSize: 70, marginLeft:30 }}/> </div>
                    </div>
                </div>
            </ScrollableAnchor>
        )
    }
}

export default Portfolio