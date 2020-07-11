import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import ScrollableAnchor from 'react-scrollable-anchor';
import ReactRevealText from 'react-reveal-text';

import './style.css';

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reveal: false
        }
    }

    componentDidMount() {
        setTimeout(() => { this.setState({ reveal: true }) }, 200);
    }

    render() {
        return (
            <ScrollableAnchor id={'aboutMe'}>
                <div>
                    <div className="flexColACenter aboutMe" style={{height:'30vh'}}>
                        <div>
                            <ReactRevealText
                                text="YUVAN SELVA"
                                show={this.state.reveal}
                                className="animateName"
                            />
                        </div>
                        <div>
                            <ReactRevealText
                                text="Cinematographer | Editor | DI Colorist"
                                show={this.state.reveal}
                            />
                        
                        </div>
                        <div >
                            <SocialIcon target="_blank" className="socialIcon" url='https://twitter.com/yuvan_selva' />
                            <SocialIcon target="_blank" className="socialIcon" url='https://www.facebook.com/u1selva' />
                            <SocialIcon target="_blank" className="socialIcon" url='https://www.instagram.com/yuvanselva/' />
                        </div>
                    </div>
                    <center className="menuItem"> 
                        <span role="img" aria-label="popper">🎉 </span> 
                            CHECK THIS OUT!
                        <span role="img" aria-label="popper">🎉 </span>
                    </center>
                    <div class="video-container">
                        <iframe title="recent-work"  src="https://www.youtube.com/embed/f9kp3reFjoo?autoplay=1&loop=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>              
                </div>
                
                
            </ScrollableAnchor>
        )
    }
}

export default AboutMe;