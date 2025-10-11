import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="w-full bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <nav className="flex justify-center gap-10 p-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-semibold hover:text-blue-400 ${isActive ? "text-blue-400 underline" : ""}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `font-semibold hover:text-blue-400 ${isActive ? "text-blue-400 underline" : ""}`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/help"
          className={({ isActive }) =>
            `font-semibold hover:text-blue-400 ${isActive ? "text-blue-400 underline" : ""}`
          }
        >
          Help
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `font-semibold hover:text-blue-400 ${isActive ? "text-blue-400 underline" : ""}`
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
