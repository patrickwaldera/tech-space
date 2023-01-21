import styled from "styled-components";

export const HeaderContainer = styled.header`
    max-width: 100%;
    height: 96px;
    background-color: ${({theme}) => theme.primary};
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.6rem;
    .wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 6px;
    }
`

export const Menu = styled.div`
    min-width: 90%;
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .leftWrapper{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 44px;
    }
`

export const LogoImg = styled.div`
    max-width: 100%;
`

export const MenuItems = styled.div`
    max-width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 8px;

    #mobileMenu {
        @media (min-width: 1301px) {
            display: none;
        }
    }
`

export const SearchBoxMobile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 90%;
    max-width: 90%;
    height: 36px;
    background-color: ${({theme}) => theme.searchBox};
    margin: 0 auto;
    border-radius: 4px;

    &:focus-within {
        outline: 2px solid ${({theme}) => theme.secondary};
    }

    .searchIcon {
        color: ${({theme}) => theme.searchText};
        margin-left: 6px;
    }

    input {
        width: 100%;
        border: 0;
        margin: 0 6px;
        background-color: rgba(0, 0, 0, 0);
        color: ${({theme}) => theme.textColorBase};
    }

    input::placeholder {
        opacity: 0.6;
        color: ${({theme}) => theme.searchText};
    }

    input:focus {
        outline: 0;
    }

    @media (min-width: 951px) {
        display: none;
    }
`

export const SearchBoxDesktop = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 350px;
    max-width: 90%;
    height: 100%;
    background-color: ${({theme}) => theme.searchBox};
    margin: 0 auto;
    border-radius: 4px;

    &:focus-within {
        outline: 2px solid ${({theme}) => theme.secondary};
    }

    .searchIcon {
        color: ${({theme}) => theme.searchText};
        margin-left: 6px;
    }

    input {
        min-width: 350px;
        max-width: 100%;
        border: 0;
        margin: 0 6px;
        background-color: rgba(0, 0, 0, 0);
        color: ${({theme}) => theme.textColorBase};
        font-size: 1.2rem;
    }

    input::placeholder {
        opacity: 0.6;
        color: ${({theme}) => theme.searchText};
    }

    input:focus {
        outline: 0;
    }
`

export const DesktopMenu = styled.div`
    max-width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    height: 48px;
    @media (max-width: 950px) {
        display: none;
    }
`

export const DesktopItemsContainer = styled.div`
    display: flex;
    gap: 24px;
    margin-left: 24px;
    @media (max-width: 1300px) {
        display: none;
    }
`

export const DesktopItem = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
    cursor: pointer;
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
`