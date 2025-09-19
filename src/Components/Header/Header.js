import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";


class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/" className="d-flex align-items-center text-decoration-none">
          <img src="/logoSitio.png" alt="UdeSA Movies" height="50" className="me-2" />
          <h1>UdeSA Movies</h1>
        </Link>
        

        <nav>
          <ul className="nav nav-tabs my-4">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/movies/">Películas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/series/">Series</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/favoritos">Favoritas</Link>
            </li> 
          </ul>          
        </nav>

      </React.Fragment>
    );
  }
}

export default Header;