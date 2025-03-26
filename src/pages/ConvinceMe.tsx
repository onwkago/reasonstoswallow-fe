import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { ReasonType, getRandomArticle } from "../mock/backend.ts";
import Reason from "../components/Reason/Reason.tsx";
import ShareIcon from '@mui/icons-material/Share';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import { Alert, Box } from "@mui/material";

const ConvinceMe = () => {
    const [displayAlert, setDisplayAlert] = useState(false);
    const [randomArticle, setRandomArticle] = useState<ReasonType | undefined>(undefined);

    useEffect(() => {
        const randomArticle = getRandomArticle();
        setRandomArticle(randomArticle);
    }, []);

    const handleConvinceMeClick = () => {
        setDisplayAlert(false);
        setRandomArticle(getRandomArticle());
    }

    const handleConvinceOthersClick = () => {
        const baseUrl = import.meta.env.VITE_BASE_URL;
        const reasonsUrl = `${baseUrl}/view/${randomArticle?.id}`;
        navigator.clipboard.writeText(reasonsUrl)
            .then(() => setDisplayAlert(true))
            .catch(err => console.error("Failed to copy:", err));
    }

    if (!randomArticle) {
        return <div> Loading...</div>
    }

    return (
        <article>
            {displayAlert && <Alert color="success">This reason have been copied to clipboard</Alert>}
            <Reason reason={randomArticle}>
                <Box display="flex" flexDirection="column" gap={2}>
                    <Button
                        sx={{mt: 5}}
                        variant="contained"
                        onClick={handleConvinceMeClick}
                        endIcon={<AutoModeIcon/>}
                    >
                        Still not convinced
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={handleConvinceOthersClick}
                        startIcon={<ShareIcon/>}
                    >
                        I may need to share this with someone
                    </Button>
                </Box>
            </Reason>
        </article>
    );
};

export default ConvinceMe;