import React, {useEffect, useState} from 'react';
import getRandomArticle from "../../service/ArticleService";
import Article from "../../components/article/Article";
import Body from "../../layouts/main-layout/body/Body";
import Header from "../../layouts/main-layout/header/Header";
import {Button} from "react-bootstrap";
import Footer from "../../layouts/main-layout/footer/Footer";

const ConvinceMe: React.FC = () => {
    const [randomArticle, setRandomArticle] = useState('');

    useEffect(() => {
        const randomArticle = getRandomArticle();
        setRandomArticle(randomArticle);
    }, [randomArticle]);
    const handleClick = () => {
        setRandomArticle(getRandomArticle());
    }

    return (
        <React.Fragment>
            <Header/>
            <Body>
                <React.Fragment>
                    <Article fact={randomArticle}/>
                    <Button
                        className={"article-button"}
                        variant="primary"
                        onClick={handleClick}>
                        I'm still not convinced
                    </Button>
                </React.Fragment>
            </Body>
            <Footer/>
        </React.Fragment>
    );
};

export default ConvinceMe;