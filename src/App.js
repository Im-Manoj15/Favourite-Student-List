import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StudentList from "./StudentList";
import Favorites from "./Favorites";

function App() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (student) => {
    if (!favorites.includes(student)) {
      setFavorites([...favorites, student]);
    }
  };

  const removeFromFavorites = (student) => {
    setFavorites(favorites.filter((fav) => fav !== student));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <nav className="bg-blue-600 text-white p-4 flex justify-between">
          <Link to="/" className="font-bold text-lg">Home</Link>
          <Link to="/favorites" className="font-bold text-lg">Favorites</Link>
        </nav>

        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<StudentList addToFavorites={addToFavorites} />} />
            <Route path="/favorites" element={<Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
