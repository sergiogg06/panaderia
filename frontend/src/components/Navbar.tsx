import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link to="/" className="navbar-brand">Panadería</Link>
    </nav>
  )
}

export default Navbar
