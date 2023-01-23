import Image from "next/image";
import styled from "styled-components";

export const CarouselContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    margin-bottom: 4.8rem;
    .slick-slide{
        cursor: grab;
    }
    .slick-dots li button:before {
        font-size: 0.8rem;
        margin-top: 8px;
        color: ${({theme}) => theme.textColorBase}
    }
`

export const CarouselItem = styled.div`
    height: 200px;
    overflow: hidden;
    background-color: ${({theme}) => theme.backgroundBase};
    text-align: center;
    @media (min-width: 600px) {
        height: 260px;
    }
`

export const CarouselImg = styled(Image)`
    position: relative;
    width: 100%;
    max-height: 100%;
    object-fit: cover;
    @media (min-width: 350px) {
        object-fit: contain; 
    }
`