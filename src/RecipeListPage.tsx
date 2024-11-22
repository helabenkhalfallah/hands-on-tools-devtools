import React, { useEffect, useState } from 'react';

import RecipeBanner from './components/RecipeBanner.tsx';
import RecipeList from './components/RecipeList';
import LeakyInterval from './components/memory-leaks/LeakyInterval.tsx';
import LeakyListener from './components/memory-leaks/LeakyListener.tsx';
import LeakyTimer from './components/memory-leaks/LeakyTimer.tsx';

interface Recipe {
    id: number;
    title: string;
    image: string;
    healthScore: number;
    pricePerServing: number;
    diets: string[];
    dishTypes: string[];
}

const RecipeListPage: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [showTimer, setShowTimer] = useState<boolean>(false);
    const [showInterval, setShowInterval] = useState<boolean>(false);
    const [showListener, setShowListener] = useState<boolean>(false);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch(
                    'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=100',
                    {
                        method: 'GET',
                        headers: {
                            'x-rapidapi-key': 'xxxx',
                            'x-rapidapi-host':
                                'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                        },
                    },
                );
                const data = await response.json();
                setRecipes(data.recipes || []);
            } catch (error) {
                console.error('Failed to fetch recipes:', error);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <div className="app-container">
            <header className="page-header">
                <h1>Recipe Explorer</h1>
            </header>
            <RecipeBanner />
            <div>
                <button onClick={() => setShowTimer((prev) => !prev)}>
                    {showTimer ? 'Hide' : 'Show'} Leaky Timer
                </button>
                {showTimer && <LeakyTimer />}

                <button onClick={() => setShowInterval((prev) => !prev)}>
                    {showInterval ? 'Hide' : 'Show'} Leaky Interval
                </button>
                {showInterval && <LeakyInterval />}

                <button onClick={() => setShowListener((prev) => !prev)}>
                    {showListener ? 'Hide' : 'Show'} Leaky Listener
                </button>
                {showListener && <LeakyListener />}
            </div>
            <RecipeList recipes={recipes} />
        </div>
    );
};

export default RecipeListPage;
