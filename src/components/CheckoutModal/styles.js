import styled, { css } from "styled-components";

export const CheckoutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 9;
    pointer-events: none;
    background-color: #ffffff20;
    backdrop-filter: blur(1px);
    opacity: 0;

    ${({ isVisible }) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
    `}

    .modal {
        width: 90%;
        position: relative;
        #message {
            margin: 1rem 0;
        }
        @media (min-width: 801px) {
            width: 800px;
        }
    }

    .products-title{
        width: 85%;
        margin-bottom: 1rem;
    }

    .products {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 90%;
        max-height: 250px;
        overflow-y: auto;
    }

    .button{
        width: 60%;
        margin: 1rem;
    }

    #close {
        position: absolute;
        top: 5px;
        right: 10px;
        cursor: pointer;
    }
`