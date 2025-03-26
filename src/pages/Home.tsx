import { Link, Typography } from "@mui/material";

const Home = () => (
    <article>
        <Typography mt={3} textAlign="justify" fontSize="1.3rem">
            There are many reasons behind what we do, but have you ever considered the importance of swallowing? Or
            perhaps you've found yourself needing to explain it to someone else? This website is designed to provide
            clear and compelling insights. If you're looking for persuasive information—or want to help someone else
            understand—visit our <Link href="/convince-me">Convincing Center</Link>.
        </Typography>
        <Typography mt={3} textAlign="justify" fontSize="1.3rem">
            If you’ve already explored the reasons behind swallowing, have you considered why it should be encouraged
            universally? If you have insights or compelling arguments, we’d love to hear them. Your perspective can
            help foster meaningful interactions, so please <Link href="/propose">share
            your thoughts</Link> with us!
        </Typography>
    </article>
)

export default Home;