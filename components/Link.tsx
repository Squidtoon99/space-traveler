import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    background-image: linear-gradient(${({ theme }) => theme.colors.primary + ", " + theme.colors.primary});
    background-size: 0% 0.1em;
    background-position-y: 100%;
    background-position-x: 0%;
    background-repeat: no-repeat;
    transition: background-size 0.6s cubic-bezier(.19,1,.22,1);

    &:hover {
        background-size: 100% 0.1em;
    }
`;

export default StyledLink;