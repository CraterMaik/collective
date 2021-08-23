import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function SliderSection() {
  return (
    <AutoplaySlider play={true}
      cancelOnInteraction={false} 
      interval={6000}
      style={{ height:'650px' }}>
        
      <div data-src="https://i.imgur.com/rH7NmFY.gif" />
      <div data-src="https://www.metroshoes.net/blog/wp-content/uploads/2019/08/770-X-400-Pixel-Leather-Care-Banner.jpg" />
      <div data-src="https://cdn.shopify.com/s/files/1/0419/1525/collections/2800x890-Women-Care-Leather_2800x890.jpg?v=1534316025" />
      <div data-src="https://www.greywalkshoes.com/front/img/grey-banner-new.webp" />
    </AutoplaySlider>
  )
}

