import styled from "styled-components";

export const HeaderContainer = styled.header`
    max-width: 100%;
    height: 96px;
    background-color: ${({theme}) => theme.primary};
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
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
`

export const LogoImg = styled.div`
    max-width: 100%;
`

export const MenuItems = styled.div`
    max-width: 100%;
    display: flex;
    gap: 8px;
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

    @media (min-width: 900px) {
        display: none;
    }
`