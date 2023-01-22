import styled from "styled-components";

export const StarsContainer = styled.div`
    max-width: 100%;
    align-self: flex-end;
    margin: .3rem .5rem 0 0;
    .star-icon {
        font-size: 0.875rem;
        @media (min-width: 600px) {
            font-size: 1rem;
        }
    }
    .star-filled {
        color: #FFD700;
    }

    .star-empty{
        color: ${({theme}) => theme.textColorBase}
    }
`

