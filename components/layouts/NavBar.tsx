import Link from '../Link';
import styled from "styled-components";

const Nav = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: left;
    padding: 1rem;
    z-index: 2;
    ul {
        display: flex;
        list-style: none;
        li {
            margin: 0 1rem;
        }
    }
`;

const NavBar = () => {
    return (
        <Nav>
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/#about">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/vehicles">
                        Vehicles
                    </Link>
                </li>
                <li>
                    <Link href="/pricing">
                        Pricing
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        Training
                    </Link>
                </li>
            </ul>
        </Nav>
    );
};

export default NavBar;