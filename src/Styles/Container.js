import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to bottom right, #7115a3, #400080);
    @media (max-width: 1000px){
        flex-direction: column;
    }
`