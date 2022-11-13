import Starfield from "../Starfield";
import styled from "styled-components";
import { ArrowDown } from "../icons";
import { bounce, fadeIn } from "../../styles/animations";

const Box = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    h1 {
        position: absolute;
        font-size: 6vw;
        margin: 0;
        background-color: transparent;

        i {
            /* color: ${({ theme }) => theme.colors.secondary}; */
        }

        max-width: 60vw;

        animation-delay: 2s;
        animation: ${fadeIn} 1s ease-in-out;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 10vw;
        }
    }
`;

const Hero = () => {
    return <Box>
        <Starfield stars={500} />
        <h1>
            An Experience {" "}<br/>
            Out of this <i>World</i>
            
        </h1>
    </Box>;
};

export default Hero;