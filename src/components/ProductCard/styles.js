import Image from "next/image";
import styled from "styled-components";

export const CardContainer = styled.div`
    min-width: 172px;
    max-width: 172px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 4px;
    background-color: ${({theme}) => theme.backgroundLevel1};
    border-radius: 4px;
    padding-bottom: 1rem;
    @media (min-width: 600px) {
        max-width: 220px;    
    }
`

export const ProductImg = styled(Image)`
    width: 100%;
    height: 88px;
    border: 0;
    border-radius: 4px;
    outline: none;
    object-fit: cover;
    @media (min-width: 600px) {
        height: 108px; 
    }
`

export const ProductTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        font-size: 0.688rem;
        max-width: 90%;
        @media (min-width: 600px) {
            font-size: 0.875rem;  
            line-height: 1.2rem;
        }
    }
`
export const CustAndBuy = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ProductPrice = styled.div`
    margin: 0 auto;
    max-width: 50%;
    .old-price {
        text-align: center;
        font-size: 0.5rem;
        opacity: 0.3;
        color: ${({theme}) => theme.textColorBase};
        margin-bottom: 0.2rem;
        span{
            text-decoration-line: line-through;
        }
        @media (min-width: 600px) {
            font-size: 0.625rem;
        }
    }
    .price{
        text-align: center;
        color: #1B98E0;
        font-weight: 700;
        font-size: 0.5rem;
        position: relative;
        strong{
            font-size: 1rem;
            vertical-align: -20%;
            @media (min-width: 600px) {
                font-size: 1.125rem;
            }
        }
        @media (min-width: 600px) {
            font-size: 0.625rem;
        }
    }

`

export const BuyProduct = styled.div`
    margin: 0 auto;
    max-width: 50%;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
`