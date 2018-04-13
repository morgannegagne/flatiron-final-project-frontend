import React from 'react';
import { Carousel } from 'react-responsive-carousel';

class PhotoCarousel extends React.Component {
  render() {
    const slides = this.props.images.map(image => <div key={`image-${image.id}`}> <img alt={image.url} src={image.url}/> </div>)
    return (
      <Carousel width={`500px`} showThumbs={false} infiniteLoop={true}>
        {slides}
      </Carousel>
    );
  }
}

export default PhotoCarousel
