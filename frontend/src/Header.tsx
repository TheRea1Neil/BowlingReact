import React from 'react';
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <p className="navbar-brand">Bowling Database</p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <p className="nav-link active" aria-current="page">
                  Home
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link">Features</p>
              </li>
              <li className="nav-item">
                <p className="nav-link">Pricing</p>
              </li>
              <li className="nav-item">
                <p className="nav-link">About</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1>
        Welcome to the Bowling database where the info is Cool and the buttons
        do nothing!
      </h1>
    </div>
  );
}

export default Header;
