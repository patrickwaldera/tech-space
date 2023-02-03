import styled from "styled-components";

export const SearchPageContainer = styled.section`
    margin: 0 auto;
    max-width: 100%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .search-text {
        text-transform: uppercase;
        margin-bottom: 1.5rem;
        h1 {
            font-size: 1.5rem;
            position: relative;
        }
    }
    .order-by{
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
    }
`