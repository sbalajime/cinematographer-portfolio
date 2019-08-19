import React, { Component } from 'react';
import Card from '../Card/Card';
// import films from '../VideoData/data';
import _map from 'lodash/map';
import ScrollableAnchor from 'react-scrollable-anchor'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Description from '../Description/Description.js';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';

class Portfolio extends Component {
    constructor(props){
        super(props);
        this.state={selectedFilm:{}}
    }

	selectFilm = film => {
        const {selectedFilm} = this.state;
        if(film && (film.name !== selectedFilm.name)) {
            this.setState({selectedFilm:{}},() => this.setState({selectedFilm:film}))
        } else this.setState({selectedFilm: {}})
    } 

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
        const {data, title, selectFilm, modalData} = this.props;
        const {selectedFilm} = this.state;
        return(
            <ScrollableAnchor id={'portfolio'} key={title}>
                <div style={{flexDirection:'column'}} key={title}>
                <div>
                    <span style={{ fontSize: 35, fontWeight: 100, textAlign:'center', width:'100%', justifyContent:'center' }}>{title}</span>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}> 
                    <div onClick={() => this.handleScrollLeft()}> <IoIosArrowBack style={{ height:70, width:70, marginRight:30 }}/> </div>
                    <div ref={el => this.scrollContainer = el}style={{ display: 'flex', flexWrap: 'nowrap', justifyContent:'center', overflowX:'hidden', alignItems:'center', overflowY:'hidden'}}>
                        {_map(data, (film, index) => <Card film={film} key={index} selectFilm={this.selectFilm}/>)}
                    </div>
                    <div onClick={() => this.handleScrollRight()}> <IoIosArrowForward style={{ height:70, width:70, marginRight:30 }}/> </div>
                    </div>
                </div>
                   <Description selectedFilm={selectedFilm} close={this.selectFilm}/>
                </div>
            </ScrollableAnchor>
        )
    }
}

export default Portfolio