import styled from "styled-components";

export const ButtonElement = styled.button`
    display: flex;
    max-width: 100%;
    text-align: center;
    padding: 0.375rem 0.4rem;
    font-size: 0.75rem;
    border-radius: 4px;
    background-color: ${({outlined}) => outlined ? 'transparent' : '#1B98E0'};
    font-weight: 700;
    color: ${({outlined}) => outlined ? '#1B98E0' : '#ffffff'} ;    
    border: ${({outlined}) => outlined ? '1px solid #1B98E0' : 'none'};
    cursor: pointer;
    @media (min-width: 600px) {
        font-size: 1rem;
    }
`