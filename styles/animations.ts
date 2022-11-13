import { keyframes } from "styled-components";

export const bounce = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
`;

export const fadeIn = keyframes`
    0% {
        /* opacity: 0; */
        translate: translateY(105px);
    }
    100% {
        /* opacity: 1; */
        translate: translateY(0);
    }
`;