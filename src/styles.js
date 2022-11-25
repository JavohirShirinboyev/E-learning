import styled from "styled-components";

export const About = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5rem 10rem;
`

export const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    p {
        color: #fff;
        font-size: 1.2rem;
        margin: 2rem 0;
    }
`
export const Hide = styled.div`
    overflow: hidden;
`
export const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`