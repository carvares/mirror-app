import styled from "styled-components";

export const MirrorStyle =  styled.video`
    width: 25vw;
    border-radius: 5px;
    box-shadow: 2px 7px 10px rgba(0, 0, 0, 0.5);
    margin: 5px;
    @media(max-width:1000px){
        width: 100vw;
        border-radius: 5px;
    }
`