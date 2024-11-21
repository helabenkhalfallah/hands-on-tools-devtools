import React from 'react';

interface IngredientCardProps {
    ingredient: {
        name: string;
        original: string;
        image: string;
    };
}

const IngredientCard: React.FC<IngredientCardProps> = ({ ingredient }) => (
    <div className="ingredient-card">
        <img
            src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
            alt={ingredient.name}
            className="ingredient-image"
        />
        <p>{ingredient.original}</p>
    </div>
);

export default IngredientCard;
