import Image from "next/image";
import styled from "styled-components";

export const ProductContainer = styled.section`
    max-width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    gap: 2rem;
    margin-bottom: 1.75rem;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`

export const ProductImages = styled.div`
    display: block;
    margin: 0 auto;
    max-width: 100%;
    .slick-list{
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
    }
    .slick-active {
        border-radius: 4px;
        outline-offset: 2px;
        outline: 2px solid ${({theme}) => theme.primary};
    }
    .slick-dots {
        position: static !important;
    }
    .slick-dots li {
        width: 64px;
        height: 64px;
        top: 0.5rem;
    }
    .slick-arrow, .slick-prev {
        display: none !important;
    }
    .slick-prev:before, .slick-next:before{
        color: ${({theme}) => theme.textColorBase};
    }
    @media (min-width: 768px) {
        max-width: 35%;
        .slick-dots li {
            width: 88px;
            height: 88px;
            top: 0.5rem;
        }
        .slick-arrow, .slick-prev {
            display: block !important;
        }
        .slick-thumb{
            margin-bottom: 1rem;
        }
    }
`

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-self: flex-start;
    text-align: left;
    p{
        font-size: 0.875rem;
    }
    .description{
        line-height: 1rem;
    }
    h1{
        font-size: 1.5rem;
    }
    .brand-stars{
        display: flex;
        justify-content: space-between;
    }
    .old-price {
        text-align: left;
        opacity: 0.3;
        color: ${({theme}) => theme.textColorBase};
        margin-bottom: 0.2rem;
        span{
            text-decoration-line: line-through;
        }
    }
    .price{
        text-align: left;
        color: #1B98E0;
        font-weight: 700;
        font-size: 0.5rem;
        position: relative;
        strong{
            font-size: 2rem;
            vertical-align: -20%;
            @media (min-width: 600px) {
                
            }
        }
    }
    .btn{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        flex-wrap: wrap;
        max-width: 100%;
    }
    @media (min-width: 768px) {
        width: 50%;
    }
`

export const ProductImg = styled(Image)`
    width: 100% !important;
    height: 100% !important;
    border: 0;
    border-radius: 4px;
    outline: none;
    object-fit: contain !important;
    position: relative !important;
    @media (min-width: 600px) {
        
    }
    cursor: grab;
`

export const Skeleton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100% !important;
    height: 300px !important;
    background-color: ${({theme}) => theme.backgroundLevel1};
    border-radius: 4px;
`