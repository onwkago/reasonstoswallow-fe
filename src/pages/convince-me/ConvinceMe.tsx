import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import getRandomArticle, { Reason } from "../../service/ArticleService";
import Body from "../../layouts/main-layout/body/Body";
import Article from '../../components/article/Article';

const ConvinceMe: React.FC = () => {
    const [randomArticle, setRandomArticle] = useState<Reason | undefined>(undefined);

    useEffect(() => {
        const randomArticle = getRandomArticle();
        setRandomArticle(randomArticle);
    }, [randomArticle]);
    const handleClick = () => {
        setRandomArticle(getRandomArticle());
    }

    if(!randomArticle){
        return <div> Laoding...</div>
    }

    return (
        <React.Fragment>
            <Body> 
                <h1 className="title">{randomArticle.intro}</h1>
                <Article id={randomArticle.id} title={randomArticle.title} description={randomArticle.description}/>
                <Button
                    className={"article-button"}
                    variant="light"
                    onClick={handleClick}>
                    I'm still not convinced
                </Button>
            </Body>
        </React.Fragment>
    );
};

export default ConvinceMe;