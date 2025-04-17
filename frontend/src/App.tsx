import { Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import AppRouter from '@/router/AppRouter'
import Footer from './components/footer'

function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  )
}

export default App
