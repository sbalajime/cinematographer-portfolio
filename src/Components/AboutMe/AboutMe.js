import React, {Component} from 'react';
import { SocialIcon } from 'react-social-icons';
import ScrollableAnchor from 'react-scrollable-anchor';

class AboutMe extends Component {
    
    render(){
        return(           
            <ScrollableAnchor id={'aboutMe'}>
                <div style={{padding:'0 7% 0 7%'}}>
                    <div style={{ padding: 50 }}>
                        <div>
                            <img src='/selva.jpg' style={{ borderRadius:'40vw',verticalAlign:'middle', border:'2px solid white'}} width="120vw" height="120vw" />
                            <span style={{display:'inline-block', fontSize: '3vw', verticalAlign:'middle', marginLeft: 30}}>YUVAN SELVA</span>
                        </div>
                        <p style={{fontSize:'1.4vw'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
                            a galley of type and scrambled it to make a type specimen book. It has survived not only 
                            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                            passages, and more recently with desktop publishing software like Aldus PageMaker including 
                            versions of Lorem Ipsum.
                        </p>
                        <div style={{display:'flex', justifyContent: 'flex-end'}}>
                            <SocialIcon style={{marginLeft: 30}} url='https://twitter.com/yuvan_selva' />
                            <SocialIcon style={{marginLeft: 30}} url='https://www.facebook.com/u1selva' />
                            <SocialIcon style={{marginLeft: 30}} url='https://www.instagram.com/yuvanselva/'/>
                        </div>
                    </div>
                </div>              
            </ScrollableAnchor>          
        )
    }
}

export default AboutMe;