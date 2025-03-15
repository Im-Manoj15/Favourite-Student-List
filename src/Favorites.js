import React from "react";

const Favorites = ({ favorites, removeFromFavorites }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Favorite Students</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorites added.</p>
      ) : (
        <ul>
          {favorites.map((student) => (
            <li key={student} className="flex justify-between items-center p-2 border-b">
              <span>{student}</span>
              <button
                onClick={() => removeFromFavorites(student)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
