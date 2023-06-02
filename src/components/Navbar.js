import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// COMPONENT - navbar with clickable links to home and all candies page

const Navbar = () => {
  const students = useSelector((state) => state.students);
  const campuses = useSelector((state) => state.campuses);

  return (
    <div id="navbar">
      <button>
        <Link to="/">Main</Link>
      </button>
      <button>
        <Link to="/campuses">Campuses ({campuses.length})</Link>
      </button>
      <button>
        <Link to="/students">Students ({students.length})</Link>
      </button>
    </div>
  );
};

export default Navbar;