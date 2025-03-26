import Box from "@mui/material/Box";
import { Link, LinkProps } from "@mui/material";
import styled from "styled-components";
import LogoLink from "../LogoLink/LogoLink.tsx";
import { ColorsILiked } from "../../styles/colors.ts";

const StyledHeader = styled.header`
    display: flex;
    height: 100px;
    background-color: ${ColorsILiked.Primary};
    margin: 0 auto;
    justify-content: space-around;
    width: 75%;

    @media (max-width: 768px) {
        width: 100%;
        margin: 0;
        justify-content: space-between;
    }
`;

const MenuLink = (props: LinkProps) => (
    <Link
        fontSize="1.125rem"
        underline="none"
        color={ColorsILiked.PrimaryAlmostWhite}
        variant="body1"
        {...props}
    />
);

const Header = () => (
    <StyledHeader>
        <Box display="flex" alignItems="center" justifyContent="center" gap={5} padding={3}>
            <MenuLink href="/convince-me">Why Should I?</MenuLink>
            <MenuLink href="/propose">Propose</MenuLink>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
            <LogoLink hideTitle/>
        </Box>
    </StyledHeader>

);

export default Header;