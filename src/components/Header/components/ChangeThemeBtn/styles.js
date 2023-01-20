import styled from "styled-components"

export const ChangeThemeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 4px;
    &:hover {
        background-color: ${({theme}) => theme.secondary};
        transition: .5s;
    }
    @media (min-width: 600px) {
        padding: 5px;
    }
`