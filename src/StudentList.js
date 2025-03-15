import React from "react";

const students = ["Manoj", "Karthick", "Keerthiraj", "Sudharson", "Inbaraj"];

const StudentList = ({ addToFavorites }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Student List</h1>
      <ul>
        {students.map((student) => (
          <li key={student} className="flex justify-between items-center p-2 border-b">
            <span>{student}</span>
            <button
              onClick={() => addToFavorites(student)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Add to Favorites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
