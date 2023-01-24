import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.primary};
    color: #ffffff;
    padding: 2rem 0;
    min-height: 150px;
    gap: 1rem;
    @media (min-width: 830px) {
        flex-direction: row;
        gap: 96px;
    }
`

export const PaymentMethods = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    p{
        font-size: 0.75rem;
    }
    @media (min-width: 600px) {
        p{
            font-size: 1rem;
        }
    }
`

export const FooterLinks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    @media (min-width: 600px) {
        gap: 96px;
    }
    .footer-link{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        font-size: 0.75rem;
        a{
            color: #ffffff;
            opacity: 0.6;
        }
        @media (min-width: 600px) {
            font-size: 1rem;
        }
    }
    .footer-link-title {
        opacity: 1 !important;
    }
`