import { useState } from "react";

function AddRecipeForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else if (ingredients.split(",").length < 2) {
      newErrors.ingredients = "Please list at least two ingredients.";
    }
    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const recipeData = {
      title: title.trim(),
      ingredients: ingredients.split(",").map((ing) => ing.trim()),
      steps: steps.trim(),
    };

    if (onSubmit) {
      onSubmit(recipeData);
    }

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-green-500 rounded-lg shadow-lg space-y-5"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Add New Recipe
      </h2>

      {/* Title */}
      <div>
        <label className="block text-gray-700 font-medium">Recipe Title</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-900 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      {/* Ingredients */}
      <div>
        <label className="block text-gray-700 font-medium">
          Ingredients (separate with commas)
        </label>
        <textarea
          className="w-full p-2 border border-gray-900 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
          rows="3"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        ></textarea>
        {errors.ingredients && (
          <p className="text-red-500 text-sm">{errors.ingredients}</p>
        )}
      </div>

      {/* Steps */}
      <div>
        <label className="block text-gray-700 font-medium">
          Preparation Steps
        </label>
        <textarea
          className="w-full p-2 border border-gray-900 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
          rows="5"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        ></textarea>
        {errors.steps && (
          <p className="text-red-500 text-sm">{errors.steps}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
      >
        Submit Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm