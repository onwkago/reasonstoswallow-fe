import { getArticleById } from "../mock/backend.ts";
import Reason from "../components/Reason/Reason.tsx";
import { useParams } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Typography } from "@mui/material";

const View  = () => {
    const {id} = useParams();
    const reasonFromId = getArticleById(id);

    if (!reasonFromId)
        return <Typography mt={3} variant="h3">Well, maybe, just maybe, you don't need any reasons, maybe you just need to do it <FavoriteIcon fontSize="large"/></Typography>


    return (
        <Reason reason={reasonFromId}/>
    );
};

export default View;