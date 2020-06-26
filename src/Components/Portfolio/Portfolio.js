import React, { Component } from 'react';
import Card from '../Card/Card';
// import films from '../VideoData/data';
import _map from 'lodash/map';
import ScrollableAnchor from 'react-scrollable-anchor'
import Description from '../Description/Description.js';
import './style.css';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCarousel: false
        }
    }

    componentDidMount() {
        console.log('ref', this.scrollContainer.offsetWidth, this.scrollContainer.scrollWidth);
        if (this.scrollContainer.scrollWidth > this.scrollContainer.offsetWidth) {
            this.setState({ isCarousel: true });
        }
    }

    handleScrollLeft = () => {
        // this.scrollContainer.scrollLeft -= 100;
        this.scrollContainer.scrollBy({
            // could be negative value
            left: -500,
            behavior: 'smooth'
        })
    }
    handleScrollRight = () => {
        // this.scrollContainer.scrollLeft += 100;
        this.scrollContainer.scrollBy({
            left: 500, // could be negative value 
            behavior: 'smooth'
        })
    }

    render() {
        const { data, title, selectFilm } = this.props;

        const { selectedFilm } = this.props;
        return (
            <div key={title}>
                <ScrollableAnchor id={'portfolio'} key={title}>
                    <div className="portfolioContainer" key={title}>
                        <div className="cardContainer">
                            <center className="yearTitle">{title}</center>
                            <div className="flexRowAJCenter">
                                <div ref={el => this.scrollContainer = el} className="multipleCards">
                                    {_map(data, (film, index) => <Card film={film} key={index} selectFilm={selectFilm} />)}
                                </div>
                            </div>
                        </div>
                        {selectedFilm.year === title ? <Description selectedFilm={selectedFilm} close={selectFilm} /> : null}
                    </div>
                </ScrollableAnchor>
            </div>
        )
    }
}

export default Portfolio