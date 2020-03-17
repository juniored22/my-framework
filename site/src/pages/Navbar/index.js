import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div >
      <h1>Lista de compras para </h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;