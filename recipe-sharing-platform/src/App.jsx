import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

import './App.css'
import HomePage from './components/HomePage'
import RecipeDetail from "./components/RecipeDetail"

function App() {

  return (
    <>
      <div className='bg-blue-500 '>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora labore mollitia cumque doloribus, perspiciatis harum ab quod eius, maiores soluta eaque reprehenderit ullam illum quisquam, sit fugit beatae. Voluptatibus, rem.</p>
      </div>
      <Router>
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          {/* Home Page route */}
          <Route path="/" element={<HomePage />} />

          {/* Recipe Detail Page route */}
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
