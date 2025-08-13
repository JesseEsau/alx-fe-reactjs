import AddRecipeForm from "./AddRecipeForm";

function AddRecipePage() {
  const handleRecipeSubmit = (recipeData) => {
    console.log("New Recipe Submitted:", recipeData);
    // Later: POST to backend API
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <AddRecipeForm onSubmit={handleRecipeSubmit} />
    </div>
  );
}

export default AddRecipePage