import Image from "next/image";
import styled from "styled-components";

export const ProductCartContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 0.75rem;
    gap: 0.5rem;
    padding: 1rem;
    background-color: #00000010;
    border-radius: 10px;
    .left-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 0.5rem;
        p{
            font-weight: 500;
            font-size: 0.875rem;
        }
    }
    .rigth-wrapper{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        p{
            width: 100%;
            font-size: 0.75rem;
        }
    }
    .product-info{ 
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const ProductImg = styled(Image)`
    width: 68px !important;
    height: 68px !important;
    border: 0;
    border-radius: 4px;
    outline: none;
    object-fit: contain !important;
    position: relative !important;
    cursor: pointer;
`

export const Skeleton = styled.div`
    display: flex;
    justify-content: center;
    width: 68px !important;
    height: 68px !important;
    background-color: ${({theme}) => theme.backgroundLevel1};
    border-radius: 4px;
`