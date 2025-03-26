import { ColorsILiked } from "./colors.ts";
import { Box, styled } from "@mui/material";

export const PageContainer = styled(Box)`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 12.5%;
    background-color: ${ColorsILiked.PrimaryAlmostWhite};
    min-height: 85vh;

    @media (max-width: 768px) {
        padding: 24px;
    }
`;
