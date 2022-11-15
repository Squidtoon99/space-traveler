import styled from "styled-components";

const Box = styled.div`
    position: relative;
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    /* flex-direction: column; */
    /* justify-content: center; */
    /* align-items: center; */
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    padding: 5px 5px;
`; 

export default Box;