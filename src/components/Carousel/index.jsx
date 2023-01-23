import { CarouselContainer, CarouselImg, CarouselItem } from "./styles";
import ps5 from '../../../public/images/ps5.webp'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
                <CarouselImg src={ps5} alt="PlayStation 5" priority/>
              </CarouselItem>
              <CarouselItem>
                <CarouselImg src={ps5} alt="PlayStation 5" priority/>
              </CarouselItem>
        </Slider>
      </CarouselContainer>
    </>
  )
}

export { Carousel }