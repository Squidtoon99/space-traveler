import styled from "styled-components";

const Stack = styled.div`
    display: flex;
    width: full;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    && > * + * {
        margin-top: ${({ gap }: { gap: string; }) => gap};
    }
`

export default Stack;