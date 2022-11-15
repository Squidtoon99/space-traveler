import Stack from "components/Stack";
import Hero from "components/sections/Hero";
import About from "components/sections/About";

export default function Home() {
    return <Stack gap={"1rem"}>
        <Hero />
        <About />
    </Stack>
}
