import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import ScrollableAnchor from 'react-scrollable-anchor';
import ReactRevealText from 'react-reveal-text';

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
                <div style={{ padding: '0 7% 0 7%' }}>
                    <div style={{ padding: 50 }}>
                        <div>
                            <img src='/selva.jpg' style={{ borderRadius: '40vw', verticalAlign: 'middle', border: '2px solid white' }} width="120vw" height="120vw" />
                            {/* <span style={{ display: 'inline-block', fontSize: '3vw', verticalAlign: 'middle', marginLeft: 30 }}>	 */}			
                            <ReactRevealText
  text="YUVAN SELVA"
  show={this.state.reveal}
  className="my-class-name"
  style={{color: "white", fontSize: "3vw", lineHeight: "36px", fontWeight:'bold', display:'inline-block',marginLeft:'10px', fontFamily:'Karla,Helvetica Neue,Helvetica,Arial,sans-serif'}}
/>
                        </div>
                        <p style={{ fontSize: '1.2vw' }}><span style={{ fontSize: '10vh' }} role="img" aria-label="sheep">Hi ! 👋</span>My name is Yuvan Selva (official name) aged 23. I have completed my B.Sc Visual Communication in SRM University, Kattankulathur, Chennai in the year 2016. My initial interests were Photography and Animation which later changed into Cinematography and Editing. During my second year of college we made a short film within our friends circle and released it on Youtube which got quite popular in our department and I received positive feedback for my visuals which made me to keep doing it. At the end of my final year the same team made a telefilm and screened it on a preview theatre in Chennai, which encouraged Film-Makers from outside our college approach me for visuals. This made me step into this seriously and decided to turn my passion into profession. I began to educate myself more in Cinematography, Editing and DI with the help of Internet and never went to any institutes. So after completing my college I did few short films like “The Subway” and “Badhil Nee” which fetched me couple of awards for Cinematography and Editing in various film festivals. After this I made my entry in Tamil film Industry as a Last Assistant Cinematographer for Mr. Sree Saravanan in the Tamil movie "Gemini Ganeshanum Suruli Raajanum" and after a year as a Main Assistant Cinematographer for Mr. Vishnu Ramakrishnan for another Tamil movie "Oomai Vizhigal" With a help of Social media I got an offer from Coimbatore for the very first time. From there I did my first ever album song “Adiye Azhage” and it become an instant hit. From there I got many offers from Coimbatore and did my second album song “Ailesa” which went viral with more than 5 million hits on youtube.I am also concentrating on Independent projects too and my recent work was another album song “Bejaaru” which became my 3rd album song and recently did A mashup tribute for Music Director Yuvan Shankar Raja in the name of YUVAN MASHUP 2K18 which went Viral with almost 12million views in a short time span. Right now I am a Freelance Cinematographer, Editor and DI Colourist and am doing projects which challenges me. Though I have received a couple of offers for doing Cinematography in Mainstream Feature Films, am very choosy about my Debut so am still waiting for the one which will make me feel to start with <span role="img" aria-label="sheep">🙂</span>
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <SocialIcon style={{ marginLeft: 30 }} url='https://twitter.com/yuvan_selva' />
                            <SocialIcon style={{ marginLeft: 30 }} url='https://www.facebook.com/u1selva' />
                            <SocialIcon style={{ marginLeft: 30 }} url='https://www.instagram.com/yuvanselva/' />
                        </div>
                    </div>
                </div>
            </ScrollableAnchor>
        )
    }
}

export default AboutMe;