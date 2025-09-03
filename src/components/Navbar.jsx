import {BrowserRouter,Route,Routes} from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li><a>Home</a></li>
                <li><a>Tops</a></li>
                <li><a>Bottoms</a></li>
                <li><a>Accessories</a></li>
            </ul>

        </nav>
    );
}

export default Navbar;