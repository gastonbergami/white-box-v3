import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import NavBar from './components/Navbar/NavBar';

import Episodes from './Pages/Episodes';
import Location from './Pages/Location';
import CardDetail from './components/cards/CardDetail';

const App = function () {
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
};

export default App;
