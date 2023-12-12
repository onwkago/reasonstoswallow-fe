import React from 'react';
import Article from "../../components/article/Article";
import { reasons } from '../../service/ArticleService';
import Body from '../../layouts/main-layout/body/Body';

const Main: React.FC = () => (
    <Body>
        <div className={"body-container"}>
            {
                reasons.map((reason) =>
                    <Article key= {reason.id } id={reason.id} title={reason.title} description={reason.description}/>
                )
            }
        </div>
    </Body>
)

export default Main;