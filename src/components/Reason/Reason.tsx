import { Paper, Typography } from "@mui/material";
import { ReasonType } from "../../mock/backend.ts";
import { ReactNode } from "react";

const Reason = ({reason, children}: { reason: ReasonType, children?: ReactNode }) => {
    const {intro, title, description} = reason;

    return (
        <Paper
            elevation={3}
            sx={{
                maxWidth: {xs: "100%", md: "60%"},
                padding: 3,
                marginX: "auto",
                marginY: 6,
            }}
        >
            <Typography variant="h6">{intro}</Typography>
            <Typography variant="h3">{title}</Typography>
            {description &&
                <Typography>
                    {description}
                </Typography>
            }
            {children}
        </Paper>
    );
};

export default Reason;