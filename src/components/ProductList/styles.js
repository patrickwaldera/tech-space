import styled from "styled-components";

export const ProductListContainer = styled.section`
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
export const TitleList = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 8px;
    color: ${({theme}) => theme.textColorBase};
    font-size: 0.875rem;
    font-weight: 500;
`
export const List = styled.div`
    width: 100%;
    display: grid;

    grid-template-columns: 1fr;

    @media (min-width: 389px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 756px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: 1000px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    @media (min-width: 1300px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }

    align-items: center;
    flex-wrap: wrap;
    gap: 16px;

    margin-bottom: 16px;
`