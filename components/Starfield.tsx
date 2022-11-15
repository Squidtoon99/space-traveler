import { useState } from "react";
import styled, { keyframes } from "styled-components";
import seedrandom from "seedrandom";

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
    animation-timing-function: ease-in-out;
    animation-delay: var(--delay);
    animation-fill-mode: both;
    animation-play-state: var(--state);
    // set the width and height to 0.5 if the user is on mobile
    @media (max-width: 768px) {
        width: 0.5px;
        height: 0.5px;
        --distance: 
        
    }

    @media (prefers-reduced-motion: reduce) {
        animation-play-state: paused;
    }
`;

const Starfield = ({ stars, state }: { stars: number; state?: string}) => {
    const [paused, setPaused] = useState(state === "paused" ? "paused" : "running");

    return {Field: <Field>
        {Array.from(Array(stars), (e, i) => {
            var rng = seedrandom(i);
            // @ts-ignore // This is really bad and also the most efficient way to do this.
            return <Star key={i} style={{["--rotation"]: rng() * 360 + "deg", ['--speed']: (rng() *8000 + 4000) + "ms", ['--delay']: rng() * 5000 + "ms", ['--scale']: rng() * 8, ['--state']: paused}} />   
        })}
    </Field >, state: paused, setState: setPaused};
}


export default Starfield;