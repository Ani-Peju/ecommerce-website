import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BottomClothing from "./components/BottomClothing";
import Accessories from "./components/Accessories";
import TopClothing from "./components/TopClothing";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/top-clothing" element={<TopClothing />} />
          <Route path="/bottom-clothing" element={<BottomClothing />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/shopping-cart" element={<ShoppingCart/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
