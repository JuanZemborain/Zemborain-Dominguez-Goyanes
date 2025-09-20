import { Component } from "react";
import Header from "../../Components/Header/Header";
import ListaCard from "../../Components/ListaCard/ListaCard";
import {Link} from 'react-router-dom'
import React from "react";
import CargarMas from "../../Components/CargarMas/CargarMas"

class MoviesNow extends Component{

    render(){

        return(
            <React.Fragment>
                
                <h2 class="alert alert-primary">Movies now playing </h2>
                
                <CargarMas URL="https://api.themoviedb.org/3/movie/now_playing?api_key=68c410ee39188689628bac0d94261464" tipo = "movie"/>

            </React.Fragment>
        )
    }
}

export default MoviesNow;