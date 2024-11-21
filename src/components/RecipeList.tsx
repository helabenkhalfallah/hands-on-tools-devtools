import React, { useState } from 'react';

import RecipeCard from './RecipeCard';

interface Recipe {
    id: number;
    title: string;
    image: string;
    healthScore: number;
    pricePerServing: number;
    diets: string[];
    dishTypes: string[];
}

const RecipeList: React.FC<{ recipes: Recipe[] }> = ({ recipes }) => {
    const [selectedDishType, setSelectedDishType] = useState<string>('main course');

    const filteredRecipes = recipes.filter((recipe) => recipe.dishTypes.includes(selectedDishType));

    const uniqueDishTypes = Array.from(new Set(recipes.flatMap((recipe) => recipe.dishTypes)));

    return (
        <div>
            <div className="filter-container">
                <label htmlFor="dish-type-filter">Filter by Dish Type:</label>
                <select
                    id="dish-type-filter"
                    value={selectedDishType}
                    onChange={(e) => setSelectedDishType(e.target.value)}
                >
                    {uniqueDishTypes.map((dishType) => (
                        <option key={dishType} value={dishType}>
                            {dishType}
                        </option>
                    ))}
                </select>
            </div>
            <div className="recipe-list">
                {filteredRecipes.map((recipe) => (
                    <RecipeCard key={recipe.id} {...recipe} showDetails />
                ))}
            </div>
        </div>
    );
};

export default RecipeList;
