import Button from "../Button";
import Link from "next/link";
import Stack from "../Stack";
import Title from "components/Title";

const Hero = () => {
    return <Stack gap={"1em"} style={{minHeight: "100vh"}}>
        <Title>
                An Experience {" "}<br/>
            Out of this <i style={{marginLeft: "-0.1em"}}>World</i>
            <br/>
        </Title>
        <Link href="/vehicles" style={{fontSize: "1.5em", marginTop: "-1em"}} passHref>
            <Button>    
                Book Now
            </Button>
        </Link>
    </Stack>
};

export default Hero;