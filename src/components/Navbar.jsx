import { Link } from "react-router-dom";
import React, { useContext } from "react";
import ThemeContext from "./context/contextTheme";
export function Navbar() {
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  return (
        <header className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/home" className="navbar-brand fw-bold">
            Dentistas DH
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto d-flex align-items-center">
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                    Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contacto
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/favs" className="nav-link">
                  Favoritos
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className={"btn btn-primary btn-sm"}
                  onClick={handleChangeTheme}
                  style={{ background: theme.background, color: theme.font }}
                >
                  {theme.font === "black" ? "Light" : "Dark"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
