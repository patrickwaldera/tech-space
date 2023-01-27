import Image from "next/image";
import styled from "styled-components";

export const NotFoundContainer = styled.div`
    width: 90%;
    align-self: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-bottom: 2rem;
    border-bottom: 2px solid;
    margin-bottom: 2rem;
    div{
        position: relative;
        width: 200px;
        height: 200px;
    }
    .not-found-info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 300px;
        gap: 1rem;
        h1 {
            font-size: 5rem;
        }
        h2 {
            font-size: 1.5rem;
        }
    }
`

export const AstronautImage = styled(Image)`
    object-fit: contain !important;
    position: absolute;
`