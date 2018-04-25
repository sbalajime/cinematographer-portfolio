import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
      thumbnail: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg',
    },
    {
      original: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
      thumbnail: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg'
    },
    {
      original: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
      thumbnail: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg'
    }
  ]

class AboutMe extends Component {
    
    render(){
        return(
            <div>
                <h1>Photos from react-image-gallery</h1>
                <ImageGallery items={images} />
            </div>
        )
    }
}

export default AboutMe;