import Box from "components/Box";
import Image from "next/image";
import styled from "styled-components";
import hornet from "public/images/hornet-wings.jpg";
import Title from "components/Title";
import Button from "components/Button";
// full width 2 column grid component
const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
`;

const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* width is same as height */
    width: 100%;
    min-height: 300px;
    border: 1px solid white;
`;

const GridImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const About = () => {
    return <Box>
        <Grid>
            <GridItem>
                <Title>Safety</Title>
                <p>
                    This is some safety tex
                <Button href="/safety">Learn More</Button>
            </GridItem>
            <GridImage src={hornet} alt=""/>
            <GridItem>About 3</GridItem>
        </Grid>
        
    </Box>
};

export default About;