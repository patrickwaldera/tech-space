import Image from "next/image";
import styled from "styled-components";

export const AutocompleteContainer = styled.div`
    box-sizing: border-box;
    position: absolute;
    max-height: 300px;
    overflow-y: auto;
    width: 100%;
    background-color: ${({theme}) => theme.searchBox};
    box-shadow: 4px 8px 8px rgba(0, 0, 0, 0.15);
    top: 2rem;
    border-radius: 0 0 4px 4px;
    padding: 6px;
    &::-webkit-scrollbar {
        display: none;
    }
    z-index: 9;
    

    p{
        color: ${({theme}) => theme.textColorBase};
        font-size: 0.75rem;
        @media (min-width: 951px) {
            font-size: 0.875rem;
        }
    }
    ul{
        margin-top: 1rem;
    }

    li {
        display: flex;
        align-items: center;
        padding: 6px;
        border-radius: 4px;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
        cursor: pointer;
        min-height: 48px;
        max-height: 48px;
        line-height: 1.2rem;
        overflow-y: auto;

        &:hover{
            background-color: ${({theme}) => theme.primary};
        }
    }

    @media (min-width: 951px) {
        top: 2.9rem;
    }
`

export const ProductImg = styled(Image)`
    max-width: 32px !important;
    max-height: 32px !important;
    border: 0;
    border-radius: 4px;
    outline: none;
    object-fit: contain !important;
    position: relative !important;
    @media (min-width: 600px) {
        height: 108px !important; 
    }
    cursor: pointer;
`