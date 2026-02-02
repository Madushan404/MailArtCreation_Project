import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "block py-2 text-yellow-600 font-semibold"
      : "block py-2 text-white hover:text-yellow-600";

  return (
    <nav className="bg-[#0A1A2F] shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/">
          <img src="/src/assets/logo.png" alt="EnvelopeStore Logo" className="h-12 w-30 mr-2"/>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/products" className={linkClass}>Products</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>

<Link to="/login" className="bg-[#C9A66B] text-white px-4 py-2 rounded hover:bg-yellow-700">
  Login
</Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow px-6 pb-4">
          <NavLink to="/" className={linkClass} onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/products" className={linkClass} onClick={() => setMenuOpen(false)}>
            Products
          </NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>

            <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="block mt-3 w-full bg-red-600 text-white py-2 rounded text-center hover:bg-red-700"
            >
            Login
            </Link>
        </div>
      )}
    </nav>
  );
}
