import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="mr-10">
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/BottomClothing"
            className="text-gray-600 hover:text-gray-800"
          >
            Bottoms
          </Link>
        </li>
        <li>
          <Link to="/Accessories" className="text-gray-600 hover:text-gray-800">
            Accessories
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
