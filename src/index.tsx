import React from 'react';
import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import RecipeDetailsPage from './RecipeDetailsPage';
import RecipeListPage from './RecipeListPage.tsx';
import './styles/commons.css';
import './styles/recipe-details.css';
import './styles/recipe-list.css';

const container = document.getElementById('app-root');
if (!container) {
    throw new Error('Root element not found!');
}

const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<RecipeListPage />} />
                <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
            </Routes>
        </Router>
    </React.StrictMode>,
);
