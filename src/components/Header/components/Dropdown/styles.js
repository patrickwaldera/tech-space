import styled from "styled-components";

export const DropdownContainer = styled.div`
    height: 100%;
    max-width: 234px;
    position: relative;
    cursor: pointer;
`

export const DepartmentsMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    min-width: 234px;
    max-width: 90%;
    height: 100%;
    background-color: ${({theme}) => theme.secondary};
    border-radius: 4px;
    font-size: 1.2rem;
    z-index: 8;
`

export const DepartmentsDropDown = styled.div`
    position: absolute;
    padding-top: 8px;
    top: 45px;
    background-color: ${({theme}) => theme.secondary};
    width: 100%;
    border-radius: 0 0 4px 4px;
    z-index: 8;
    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 16px;
        max-width: 100%;
    }
    li {
        border-radius: 4px;
        width: 100%;
        padding: 2px 0;
    }

    li:hover{
        background-color: ${({theme}) => theme.primary};
    }
    a {
        display: block;
        color: #FFFFFF;
        //background-color: red;
        max-width: 100%;
        padding: 8px 0;
        margin-left: 8px;
        opacity: 0.8;
        transition: .5s;
    }

    a:hover{
        opacity: 1;
    }
`