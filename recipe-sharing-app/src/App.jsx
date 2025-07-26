import { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import RecipeList  from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Recipe Sharing App</h1>

      <Routes>
        <Route path='/' element={
        <>
          <RecipeList />
          <AddRecipeForm />
        </>
        } />
        <Route path='/recipes/:id' element={<RecipeDetails />} />
      </Routes>

    </div>
  )
}

export default App
