import styled from 'styled-components';
import logo from '../../assets/reasonstoswallowlogo.png';
import { Link, Typography } from "@mui/material";

const StyledImage = styled.img`
    margin-left: -25px;
    margin-top: 10px;
    width: 120px;
    height: 120px;
`;

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    height: 100%;
`;

const LogoLink = ({ hideTitle = false} : {hideTitle?: boolean}) => (
    <StyledLink href="/" underline="none">
        <StyledImage src={logo} alt="reasons to swallow logo"/>
        <Typography
            sx={{display: {xs: hideTitle? "none" : "block", md: "block"}}}
            color="#fff5f7"
            variant="h5"
            fontWeight={700}
        >
            ReasonsToSwallow
        </Typography>
    </StyledLink>
);

export default LogoLink;


