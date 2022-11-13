import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const star = keyframes`
    from
  {
    transform: rotateZ(var(--rotation)) translateY(0) scale(0);
  }
  to
  {
    transform: rotateZ(var(--rotation)) translateY(calc(max(60vw, 60vh))) scale(var(--scale));
  }
`

const Field = styled.div`
    position: fixed;
    inset: 0;
    background: ${({ theme }) => theme.colors.background};
    z-index: 0;
`;

// <{speed: number, delay: number, scale: number, rotation: number }>
const Star = styled.div`
    --distance: 50vw;
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1px;
    height: 1px;
    border-radius: 50%;
    box-shadow: 0 0 1vw ${({ theme }) => theme.colors.primary};
    background: ${props => props.theme.colors.primary};
    animation-name: ${star};
    animation-duration: var(--speed);
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-delay: var(--delay);
    animation-fill-mode: both;

    // set the width and height to 0.5 if the user is on mobile
    @media (max-width: 768px) {
        width: 0.5px;
        height: 0.5px;
        --distance: 
        
    }
`;

const Starfield = ({ stars: star}: { stars: number; }) => {
    const [stars, setStars] = useState(0);
    useEffect(() => {
        setStars(star);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Field>
        {Array.from(Array(stars), (e, i) => {
            // @ts-ignore // This is really bad and also the most efficient way to do this.
            return <Star key={i} style={{["--rotation"]: Math.random() * 360 + "deg", ['--speed']: Math.random() * 8000 + 4000 + "ms", ['--delay']: Math.random() * 5000 + "ms", ['--scale']: Math.random() * 8}} />
                
        })}
    </Field>;
}


export default Starfield;