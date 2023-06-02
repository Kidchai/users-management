import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <h1>Header</h1>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>User Management</div>
        </nav>
      </header>
    </div>
  );
}

export default Header;