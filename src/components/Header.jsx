// import { NavLink } from "react-router-dom";

// function Header() {
//   return (
//     <header className="w-full bg-gray-800 text-white shadow-md sticky top-0 z-50">
//       <nav className="flex justify-center gap-10 p-5">
//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             `font-semibold hover:text-blue-400 ${isActive ? "text-blue-400 underline" : ""}`
//           }
//         >
//           Home
//         </NavLink>

//         <NavLink
//           to="/about"
//           className={({ isActive }) =>
//             `font-semibold hover:text-blue-400 ${isActive ? "text-blue-400 underline" : ""}`
//           }
//         >
//           About
//         </NavLink>

//         <NavLink
//           to="/help"
//           className={({ isActive }) =>
//             `font-semibold hover:text-blue-400 ${isActive ? "text-blue-400 underline" : ""}`
//           }
//         >
//           Help
//         </NavLink>

//         <NavLink
//           to="/contact"
//           className={({ isActive }) =>
//             `font-semibold hover:text-blue-400 ${isActive ? "text-blue-400 underline" : ""}`
//           }
//         >
//           Contact
//         </NavLink>
//       </nav>
//     </header>
//   );
// }

// export default Header;
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg">
      <div className="flex justify-between items-center px-6 py-3">
        {/* LEFT: Logo */}
        <Link to="/">
          <img
            className="w-14 h-14 rounded-full border-2 border-yellow-400 hover:scale-105 transition-transform duration-200"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/030/559/small_2x/dollar-symbol-logo-illustration-vector.jpg"
            alt="App Logo"
          />
        </Link>

        {/* RIGHT: Navigation */}
        <ul className="flex space-x-6 text-white font-semibold">
          <li className="hover:text-yellow-400 transition-colors duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-yellow-400 transition-colors duration-200">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-yellow-400 transition-colors duration-200">
            <Link to="/help">Help</Link>
          </li>
          <li className="hover:text-yellow-400 transition-colors duration-200">
            <Link to="/contact">Contact</Link>
          </li>
          
        </ul>
      </div>
    </header>
  );
};

export default Header;
