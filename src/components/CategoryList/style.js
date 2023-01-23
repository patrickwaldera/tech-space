import styled from "styled-components";

export const CategoryListContainer = styled.section`
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
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

    a{
        color: ${({theme}) => theme.textColorBase};
        text-decoration: underline;
    }
`

export const List = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 28px;

    margin-bottom: 16px;

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
`