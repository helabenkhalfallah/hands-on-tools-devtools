import React from 'react';

interface RecipeHeaderProps {
    title: string;
    image: string;
    healthScore: number;
    readyInMinutes: number;
    servings: number;
}

const RecipeHeader: React.FC<RecipeHeaderProps> = ({
    title,
    image,
    healthScore,
    readyInMinutes,
    servings,
}) => (
    <div className="recipe-header">
        <img src={image} alt={title} className="recipe-banner" />
        <div className="recipe-meta">
            <h1>{title}</h1>
            <p>Health Score: {healthScore}</p>
            <p>Ready in: {readyInMinutes} minutes</p>
            <p>Servings: {servings}</p>
        </div>
    </div>
);

export default RecipeHeader;
