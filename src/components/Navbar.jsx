import React from "react";
import { Link } from "react-router-dom";
import {FaCartShopping} from "react-icons/fa6";

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
          <Link to="/top-clothing" className="text-gray-600 hover:text-gray-800">
            Tops
          </Link>
        </li>

        <li>
          <Link
            to="/bottom-clothing"
            className="text-gray-600 hover:text-gray-800"
          >
            Bottoms
          </Link>
        </li>
        <li>
          <Link to="/accessories" className="text-gray-600 hover:text-gray-800">
            Accessories
          </Link>
        </li>
        <li>
          <Link to="/shopping-cart"><FaCartShopping/></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
