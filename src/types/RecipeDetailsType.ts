interface ExtendedIngredient {
    id: number;
    original: string;
    image: string;
    name: string;
    measures: {
        us: {
            amount: number;
            unitShort: string;
            unitLong: string;
        };
        metric: {
            amount: number;
            unitShort: string;
            unitLong: string;
        };
    };
}

interface InstructionStep {
    number: number;
    step: string;
}

interface AnalyzedInstruction {
    name: string;
    steps: InstructionStep[];
}

export interface RecipeDetailsType {
    id: number;
    title: string;
    image: string;
    healthScore: number;
    readyInMinutes: number;
    servings: number;
    diets: string[];
    extendedIngredients: ExtendedIngredient[];
    analyzedInstructions: AnalyzedInstruction[];
}
