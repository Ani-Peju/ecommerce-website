import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TopClothing from "./components/TopClothing";
import BottomClothing from "./components/BottomClothing";
import Accessories from "./components/Accessories";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/'  element={<Hero/>} />
          <Route path='/tops' element={<TopClothing/>} />
          <Route path='/bottoms' element={<BottomClothing/>} />
          <Route path='/accessories' element={<Accessories/>} />
          <Route path='/shopping-cart' element={<ShoppingCart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
