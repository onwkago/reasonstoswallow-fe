import React from 'react';
import './Article.scss'; // Import your SCSS styles here

export interface ArticleProps {
    id: string,
    title: string,
    description?: string,
}
const Article:React.FC<ArticleProps> =({id, title, description}) => {
    return (
        <div id={id} className="benefits-container">
            <h2 className="title">{title}</h2>
            {description && 
                <p className="description">
                    {description}
                </p>
            }
        </div>
    );
};

export default Article;