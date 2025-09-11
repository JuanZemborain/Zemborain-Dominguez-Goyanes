import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

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
              <Link className="nav-link" to="/movies/popular">Películas populares</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movies/now_playing">Películas en cartel</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/favoritos">Favoritas</Link>
            </li> 
          </ul>
          
          <form className="search-form">
            <input type="text" name="searchData" placeholder="Buscar..." />
            <button type="submit" className="btn btn-success btn-sm">Buscar</button>
          </form>
        </nav>
        
      </React.Fragment>
    );
  }
}

export default Header;