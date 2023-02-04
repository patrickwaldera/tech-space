import styled from "styled-components";

export const CartContainer = styled.section`
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.8rem;

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

`

