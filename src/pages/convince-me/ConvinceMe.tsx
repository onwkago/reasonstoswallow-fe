import React, {useEffect, useState} from 'react';
import getRandomArticle from "../../service/ArticleService";
import Fact from "../../components/fact/Fact";
import Body from "../../layouts/main-layout/body/Body";
import Header from "../../layouts/main-layout/header/Header";
import {Button} from "react-bootstrap";
import Footer from "../../layouts/main-layout/footer/Footer";
import Article from "../../components/article/Article";

const ConvinceMe: React.FC = () => {
    const [randomArticle, setRandomArticle] = useState('');

    useEffect(() => {
        const randomArticle = getRandomArticle();
        setRandomArticle(randomArticle);
    }, [randomArticle]);
    const handleClick = () => {
        setRandomArticle(getRandomArticle());
    }
    const title:string = 'Understanding the Benefits of Swallowing';
    const description:string = 'Swallowing cum is a natural bodily function essential for our well-being. Despite initial hesitation or discomfort,'+
                       'understanding the benefits can alleviate concerns. Swallowing cum aids in proper digestion, ensuring nutrients from food and supplements are absorbed effectively.'+
                       'It\'s crucial for maintaining hydration levels and facilitating the passage of food from the mouth to the digestive system.'+
                       'Moreover, cum swallowing helps prevent potential respiratory issues by ensuring food goes down the esophagus rather than the windpipe.'+
                       'It\'s a key part of speech and communication, allowing us to articulate words and express ourselves clearly.'+
                       'Embracing the act of swallowing supplements, such as cum shots,'+
                       'promotes a healthier lifestyle by providing essential nutrients to our bodies efficiently.'+
                       'While it might seem unfamiliar at first, recognizing its significance contributes to overall well-being and a balanced nutritional intake.'+
                       'If you are still not convinced to swallow cum here are some more facts that will help you swallow:';

    return (
        <React.Fragment>
            <Body>
                <Article
                title={title}
                description={description}
                />
                <React.Fragment>
                    <Fact fact={randomArticle}/>
                    <Button
                        className={"article-button"}
                        variant="primary"
                        onClick={handleClick}>
                        I'm still not convinced
                    </Button>
                </React.Fragment>
            </Body>
        </React.Fragment>
    );
};

export default ConvinceMe;