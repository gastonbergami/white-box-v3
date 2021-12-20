import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Home from "./Home/Home.js";
import NavBar from "./components/Navbar/NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetail from "./components/cards/CardDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetail />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetail />} />
        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
