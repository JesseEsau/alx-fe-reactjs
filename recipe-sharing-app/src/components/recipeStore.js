import { create } from 'zustand'

export const useRecipeStore = create((set, get) => ({
    recipes: [],
    searchTerm: '',
    filteredRecipes: [],

    addRecipe: (newRecipe) => {
        const updated = [...get().recipes, newRecipe];
        set({ recipes: updated });
        get().filterRecipes(); // Automatically update filtered results
    },

    deleteRecipe: (id) => {
        const updated = get().recipes.filter((recipe) => recipe.id !== id);
        set({ recipes: updated });
        get().filterRecipes();
    },

    updateRecipe: (updatedRecipe) => {
        const updated = get().recipes.map((recipe) =>
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        );
        set({ recipes: updated });
        get().filterRecipes();
    },

    setSearchTerm: (term) => {
        set({ searchTerm: term });
        get().filterRecipes();
    },

    filterRecipes: () => {
        const { recipes, searchTerm } = get();
        const term = searchTerm.toLowerCase();

        const filtered = recipes.filter((r) =>
            r.title.toLowerCase().includes(term) ||
            r.description.toLowerCase().includes(term)
        );

        set({ filteredRecipes: filtered });
    },

    setRecipes: (recipes) => {
        set({ recipes });
        get().filterRecipes();
    },
}));

