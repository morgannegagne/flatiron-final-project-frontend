import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class PhotoCarousel extends React.Component {
  render() {
    const slides = this.props.images.map(image => <div key={`image-${image.id}`}> <img alt={image.url} src={image.url}/> </div>)
    return (
      <Carousel width={`100%`} showThumbs={false} infiniteLoop={true}>
        {slides}
      </Carousel>
    );
  }
}

export default PhotoCarousel
