import styled from "styled-components";

export const CategoryPageContainer = styled.section`
    margin: 0 auto;
    max-width: 90%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .category-title {
        text-transform: uppercase;
        margin-bottom: 2rem;
        h1 {
            font-size: 1.5rem;
            position: relative;
        }
        h1::before{
            content: '';
            position: absolute;
            top: 110%;
            width: 60%;
            height: 5px;
            background-color: #1B98E0;
        }
    }
    .order-by{
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
    }
`