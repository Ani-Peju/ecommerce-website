import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BottomClothing from "./components/BottomClothing";
import Accessories from "./components/Accessories";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/BottomClothing" element={<BottomClothing />} />
          <Route path="/Accessories" element={<Accessories />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
