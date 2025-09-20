import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Formulario from "../../Components/Formulario/Formulario"


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
              <Link className="nav-link" to="/movies/popular">Películas Populares</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/movies/now_playing">Películas Now Playing</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/series/top-rating">Series Top Rating</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/series/airing-today">Series Airing Today</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/favoritos">Favorites</Link>
            </li> 

            <Formulario/>

          </ul>          
        </nav>

      </React.Fragment>
    );
  }
}

export default Header;