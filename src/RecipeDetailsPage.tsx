import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import IngredientCard from './components/IngredientCard';
import InstructionStep from './components/InstructionStep';
import RecipeHeader from './components/RecipeHeader';
import { RecipeDetailsType } from './types/RecipeDetailsType.ts';

const RecipeDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [recipe, setRecipe] = useState<RecipeDetailsType | null>(null);

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const response = await fetch(
                    `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
                    {
                        method: 'GET',
                        headers: {
                            'x-rapidapi-key': 'ac833deea9msh3a10897bc96f4b0p137281jsnd306aaff2737',
                            'x-rapidapi-host':
                                'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                        },
                    },
                );
                const data = await response.json();
                setRecipe(data);
            } catch (error) {
                console.error('Error fetching recipe details:', error);
            }
        };

        fetchRecipeDetails();
    }, [id]);

    if (!recipe) return <div>Loading...</div>;

    return (
        <div className="recipe-details">
            <RecipeHeader
                title={recipe.title}
                image={recipe.image}
                healthScore={recipe.healthScore}
                readyInMinutes={recipe.readyInMinutes}
                servings={recipe.servings}
            />
            <div className="details-section">
                <h2>Ingredients</h2>
                <div className="ingredients-list">
                    {recipe.extendedIngredients.map((ingredient) => (
                        <IngredientCard key={ingredient.id} ingredient={ingredient} />
                    ))}
                </div>
            </div>
            <div className="details-section">
                <h2>Instructions</h2>
                <div className="instructions-list">
                    {recipe.analyzedInstructions[0]?.steps.map((step) => (
                        <InstructionStep key={step.number} step={step} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecipeDetailsPage;
