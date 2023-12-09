import React, {useEffect} from 'react';
import './Fact.scss';
import getRandomArticle from "../../service/ArticleService";

export interface ArticleProps {
    fact:string,
}
const Fact: React.FC<ArticleProps> = (props ) => {

    const capitalizeFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };


    const splitFact = props.fact.split('. ');
    const articleTitle = capitalizeFirstLetter(splitFact[0]);
    const articleDescription = splitFact[1];

    return (
        <div className="article-container">
            <div className="article-content">
                <h2 className="article-title">{articleTitle}</h2>
                <p className="paragraph">
                    {articleDescription}
                </p>
                <p className="fact">
                    {props.fact}
                </p>
            </div>
        </div>
    );
};

export default Fact;