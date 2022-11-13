import Link from 'next/link';
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
            a {
                color: ${({ theme }) => theme.colors.primary};
                text-decoration: none;
                transition: all 0.3s ease;
                &:hover {
                    color: ${({ theme }) => theme.colors.secondary};
                }
            }
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
                    <Link href="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </Nav>
    );
};

export default NavBar;