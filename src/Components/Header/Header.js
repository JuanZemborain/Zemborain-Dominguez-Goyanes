import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Formulario from '../../Components/Formulario/Formulario'

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>UdeSA Movies</h1>

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

        <Formulario/>
          
        </nav>

      </React.Fragment>
    );
  }
}

export default Header;