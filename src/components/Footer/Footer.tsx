
import styled from 'styled-components';
import { ColorsILiked } from "../../styles/colors.ts";
import LogoLink from "../LogoLink/LogoLink.tsx";

const StyledFooter = styled.footer`
    height: 100px; 
    background-color: ${ColorsILiked.Primary};
    padding: 15px 0; 
    display: flex;
    justify-content: center;
    
    width: 75%;
    margin: 0 auto;
    
    @media (max-width: 768px) {
        width: 100%;
        margin: 0;
    }
`;

const Footer = () => (
    <StyledFooter>
        <LogoLink/>
    </StyledFooter>
);

export default Footer;
