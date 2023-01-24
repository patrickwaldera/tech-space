import { CarouselContainer, CarouselImg, CarouselItem } from "./styles";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import techspace from '../../../public/banners/techspace.png'
import techspace2 from '../../../public/banners/techspace2.png'

const Carousel = () => {
  const settings =  {
    
  };
  return (
    <>
      <CarouselContainer>
        <Slider
        arrows={false}
        autoplay={true}
        autoplaySpeed={3000}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        dots={true}
      >
              <CarouselItem>
                <CarouselImg src={techspace} alt="Tech Space" priority/>
              </CarouselItem>
              <CarouselItem>
                <CarouselImg src={techspace2} alt="Tech Space" priority/>
              </CarouselItem>
        </Slider>
      </CarouselContainer>
    </>
  )
}

export { Carousel }