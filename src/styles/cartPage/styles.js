import styled from "styled-components";

export const CartContainer = styled.section`
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.8rem;
    gap: 1.5rem;

    .total {
        font-size: 1.25rem;
        margin: 1.25rem 0;
    }
    .cost{
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 0px 0px 10px 10px;
        width: 100%;
        padding: 1.5rem 0;
        line-height: 1rem;
        .discount{
            color: #1B98E0;
            margin-bottom: 2rem;
            position: relative;
            &::after {
                content: '';
                top: 3.7rem;
                width: 20px;
                height: 4px;
                background-color: #1B98E0;
                position: absolute;
            }
        }
        .cash{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            span {
                font-size: 0.75rem;
            }
            p{
                font-weight: 700;
                font-size: 1.125rem;
            }
        }
    }

    .summary{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    .btn{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        flex-wrap: wrap;
        width: 100%;
    }

    .products-info{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
    }

    .products-list{
        margin: 1rem 0;
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    .clear-btn{
        display: flex;
        width: 100%;
        justify-content: flex-end;
    }

    .input-cart{
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    .input-wrapper{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;

    }

    @media (min-width: 992px) {
        .summary{
            align-self: flex-end;
            width: 30%;
        }
        .products-info{
            width: 68%;
        }
        .input-wrapper{
            flex-direction: row;
        }
    }

`

export const InputBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 36px;
    outline: 2px solid ${({theme}) => theme.secondary};
    border-radius: 4px;
    position: relative;
    margin: 1rem 0;

    &:focus-within {
        box-shadow: 2px 2px 4px ${({theme}) => theme.secondary};
    }

    input {
        width: 100%;
        border: 0;
        margin: 0 6px;
        background-color: rgba(0, 0, 0, 0);
        color: ${({theme}) => theme.textColorBase};
    }

    input::placeholder {
        opacity: 0.6;
        color: ${({theme}) => theme.searchText};
    }

    input:focus {
        outline: 0;
    }
`