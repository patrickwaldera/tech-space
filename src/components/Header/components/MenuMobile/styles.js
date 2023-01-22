import styled, { css } from "styled-components";

export const MenuMobileContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(3px);
    z-index: 10;

    opacity: 0;
    pointer-events: none;

    ${({ isVisible }) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
    `}
`

export const Wrapper = styled.div`
    max-height: 100%;
    overflow: auto;
    width: 60%;
    background-color: ${({theme}) => theme.primary};
    padding: 2.4rem;
    #close {
        color: #ffffff;
        position: absolute;
        top: 1.2rem;
        right: 1.2rem;
    }
`

export const MenuItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 24px;
`

export const MenuItem = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;
    position: relative;
    cursor: pointer;
    color: #ffffff;
    svg {
        color: #ffffff;
    }
    .cart-items {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({theme}) => theme.secondary};
        border-radius: 100%;
        width: 16px;
        height: 16px;
        position: absolute;
        top: -8px;
        left: 12px;
        p {
            font-size: 0.8rem;
        }
        span {
            font-size: 0.6rem;
        }
    }

    p {
        font-size: 1.2rem;
    }

    ul {
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
        align-items: flex-start;
    }
    li {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-radius: 4px;
        width: 100%;
        padding: 2px 0;
    }

    a {
        align-self: center;
        display: block;
        color: #FFFFFF;
        width: 100%;
        opacity: 0.8;
        transition: .5s;
        padding: 8px 0;
        font-size: 1.2rem;
    }

    a:hover{
        opacity: 1;
    }

`

export const Divider = styled.div`
    height: 2px;
    width: 100%;
    background-color: #ffffff;
`

export const Departments = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 80%;
    background-color: ${({theme}) => theme.secondary};
    border-radius: 4px;
    font-size: 1.2rem;
    margin: 0 auto;
    color: #ffffff;
    p{
        margin: 8px 14px;
    }
`