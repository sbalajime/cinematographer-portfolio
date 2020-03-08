import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import ScrollableAnchor from 'react-scrollable-anchor';
import ReactRevealText from 'react-reveal-text';
import {data} from './data';
import './style.css';

class AboutMe extends Component {
    constructor(props){
        super(props);
        this.state={
            reveal: false
        }
    }

    componentDidMount(){
        setTimeout(() => {this.setState({reveal: true})}, 200);
    }

    render() {
        return (
            <ScrollableAnchor id={'aboutMe'}>
                <div className="aboutContainer">
                    <div>
                        <img src='/selva.jpg' className="avatar" />
                        {/* <span style={{ display: 'inline-block', fontSize: '3vw', verticalAlign: 'middle', marginLeft: 30 }}>	 */}			
                        <ReactRevealText
                            text="YUVAN SELVA"
                            show={this.state.reveal}
                            className="animateName"
                        />
                    </div>
                    <p className="textContainer">
                        <span className="greetText" role="img" aria-label="sheep">Hi ! 👋</span>
                        {data.text}
                         <span role="img" aria-label="sheep">🙂</span>
                    </p>
                    <div className="flexRowJEnd">
                        <SocialIcon className="socialIcon" url='https://twitter.com/yuvan_selva' />
                        <SocialIcon className="socialIcon" url='https://www.facebook.com/u1selva' />
                        <SocialIcon className="socialIcon" url='https://www.instagram.com/yuvanselva/' />
                    </div>
                </div>
            </ScrollableAnchor>
        )
    }
}

export default AboutMe;