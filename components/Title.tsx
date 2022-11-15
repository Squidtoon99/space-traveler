import styled from "styled-components";

const Title = styled.h1`
    position: relative;
    font-size: calc(6vw + 15px);
    max-width: 60vw;
    margin-top: 2rem;

    @media (max-width: 768px) {
            font-size: 10vw;
    }
`;

export default Title;