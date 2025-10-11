import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg">
      <div className="flex justify-between items-center px-6 py-3">
        {/* LEFT: Logo */}
        <NavLink to="/">
          <img
            className="w-14 h-14 rounded-full border-2 border-yellow-400 hover:scale-105 transition-transform duration-200"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/030/559/small_2x/dollar-symbol-logo-illustration-vector.jpg"
            alt="App Logo"
          />
        </NavLink>

        {/* RIGHT: Navigation */}
        <ul className="flex space-x-6 font-semibold">
          {["/", "/about", "/help", "/contact"].map((path, index) => {
            const labels = ["Home", "About", "Help", "Contact"];
            return (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `transition-colors duration-200 ${
                      isActive
                        ? "text-yellow-400 border-b-2 border-yellow-400"
                        : "text-white hover:text-yellow-300"
                    }`
                  }
                >
                  {labels[index]}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
