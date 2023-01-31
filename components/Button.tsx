import styled from "styled-components";

const SPX = styled.div`
    padding: 5px 8px;
    border: 2px solid white;
    cursor: pointer;
    /* border-radius: -5px; */
    text-decoration: none;
    display: block;
    position: relative;

    &:hover {
        /* transform all div children */
        & > div {
            transform: scaleY(1);
            transform-origin: bottom center;
        }

        & > span {
            color: ${({ theme }) => theme.colors.background};
        }
    }
`;

const Hoverable = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;

    position: absolute;
    top: 0;
    left: 0;

    transform: scaleY(0);
    transform-origin: top center;

    transition: transform .3s;
`

const Text = styled.span`
    width: 100%;
    color: white;
    /* font-size: 1.5rem; */
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    position: relative;

    transition: color .2s
`; 

const Button = ({ children, ...props }) => {
    return (
        <SPX className="spx" {...props}> 
            <Hoverable />
            <Text>{children}</Text>
        </SPX>
    )
}

export default Button;