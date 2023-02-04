import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.backgroundLevel1}; 
    border-radius: 10px;
`

export const TitleCard = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: ${({theme}) => theme.primary};
    color: #ffffff;
    border-radius: 10px 10px 0px 0px;
    font-weight: 700;
`

export const ContentCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
`