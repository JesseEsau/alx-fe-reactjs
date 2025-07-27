import { create } from 'zustand'

export const useRecipeStore = create((set, get) => ({
    recipes: [],
    searchTerm: '',
    filteredRecipes: [],
    favorites: [],
    recommendations: [],

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

    addFavorite: (recipeId) => {
        const { favorites } = get();
        if (!favorites.includes(recipeId)) {
            set({ favorites: [...favorites, recipeId] });
        }
    },

    removeFavorite: (recipeId) => {
        set(state => ({
            favorites: state.favorites.filter(id => id !== recipeId)
        }));
    },

    generateRecommendations: () => {
        const { recipes, favorites } = get();
        const recommended = recipes.filter(recipe =>
            favorites.includes(recipe.id) && Math.random() > 0.5
        );
        set({ recommendations: recommended });
    },
}));

