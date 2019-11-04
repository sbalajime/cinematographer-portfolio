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
        this.state={
            isCarousel: false
        }
    }

    componentDidMount(){
        console.log('ref', this.scrollContainer.offsetWidth, this.scrollContainer.scrollWidth);
        if(this.scrollContainer.scrollWidth > this.scrollContainer.offsetWidth) {
            this.setState({isCarousel: true});
        }
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
        const {isCarousel} = this.state;
        const {selectedFilm} = this.props;
        return(
            <div key={title}>
            <ScrollableAnchor id={'portfolio'} key={title}>
                <div style={{flexDirection:'column', marginTop:'10vh'}} key={title}>
                <div>
                    <span style={{ fontSize: '2.7vw', fontWeight: 100, textAlign:'center', width:'100%', justifyContent:'center' }}>{title}</span>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}> 
                    {isCarousel ? <div onClick={() => this.handleScrollLeft()}> <IoIosArrowBack style={{ height:70, width:70, marginRight:30 }}/> </div> : null}
                    <div ref={el => this.scrollContainer = el}style={{ display: 'flex', flexWrap: 'nowrap', justifyContent:'center', alignItems:'center', overflowX:'hidden', overflowY:'hidden'}}>
                        {_map(data, (film, index) => <Card film={film} key={index} selectFilm={selectFilm}/>)}
                    </div>
                    {isCarousel ? <div onClick={() => this.handleScrollRight()}> <IoIosArrowForward style={{ height:70, width:70, marginRight:30 }}/> </div> : null}
                    </div>
                </div>
                   {selectedFilm.year === title ? <Description selectedFilm={selectedFilm} close={selectFilm}/> : null}
                </div>
            </ScrollableAnchor>
            </div>
        )
    }
}

export default Portfolio