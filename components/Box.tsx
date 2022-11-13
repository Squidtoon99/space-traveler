import styled from "styled-components";

const Box = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
`; 

export default Box;