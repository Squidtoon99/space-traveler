import styled from "styled-components";

const Title = styled.h1`
    color: red;
    font-size: 3rem;
`

const About = () => {
    return (
        <div>
            <Title>
                About
                <p>Paragraph</p>
            </Title>
            <p>This is the about page</p>
        </div>
    )
};

export default About;