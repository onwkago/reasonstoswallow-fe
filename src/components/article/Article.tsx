import React from 'react';
import './Article.scss'; // Import your SCSS styles here

export interface ArticleProps {
    title: string,
    description:string,
}
const Article:React.FC<ArticleProps> =({title, description}) => {
    return (
        <div className="benefits-container">
            <h2 className="title">{title}</h2>
            <p className="description">
                {description}
            </p>
        </div>
    );
};

export default Article;