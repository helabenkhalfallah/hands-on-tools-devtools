import React from 'react';
import { Link } from 'react-router-dom';

interface RecipeCardProps {
    id: number;
    title: string;
    image: string;
    healthScore: number;
    pricePerServing: number;
    diets: string[];
    showDetails?: boolean;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
    id,
    title,
    image,
    healthScore,
    pricePerServing,
    diets,
    showDetails,
}) => (
    <div className="recipe-card">
        <img src={image} alt={title} className="recipe-image" />
        <div className="recipe-info">
            <h3>{title}</h3>
            <p>Health Score: {healthScore}</p>
            <p>Price: ${pricePerServing.toFixed(2)}</p>
            <div className="tags">
                {diets.map((diet, index) => (
                    <span key={index} className="tag">
                        {diet}
                    </span>
                ))}
            </div>
            {showDetails && (
                <Link to={`/recipe/${id}`} className="details-link">
                    View Details
                </Link>
            )}
        </div>
    </div>
);

export default RecipeCard;
