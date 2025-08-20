import { useState } from 'react'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/FormikForm'

function App() {

  return (
    <div className='p-6'>
      <RegistrationForm />
      <FormikForm />
    </div>
  )
}

export default App
