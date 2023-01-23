import Image from "next/image";
import styled from "styled-components";

export const CategoryContainer = styled.div`
    width: 160px;
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .image{
        max-height: 50%;
        position: absolute;
    }
    
    @media (min-width: 600px) {
        width: 260px;
        height: 240px;
    }
`

export const Wrapper = styled.div`
    width: 100%;
    height: 50%;
    background-color: #1B98E0;
    border-radius: 4px;
`

export const CategoryTitle = styled.p`
    text-align: center;
    padding-top: 0.825rem;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 12px;
    color: #ffffff;
    @media (min-width: 600px) {
        font-size: 1rem;
        padding-top: 1.6rem;
    }
`

export const CategoryImg = styled(Image)`
    width: 100px !important;
    height: unset !important;
    max-height: 200%;
    object-fit: "cover";
    position: relative !important;
    top: 30px !important;
    @media (min-width: 600px) {
        top: 60px !important;
        left: 0px !important;
        width: 150px !important; 
    }
`