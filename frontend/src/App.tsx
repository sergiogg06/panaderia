import { Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Login from '@/pages/Login'
import AppRouter from '@/router/AppRouter'

function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  )
}

export default App
