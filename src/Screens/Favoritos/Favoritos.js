import { Component } from "react";
import Header from "../../Components/Header/Header";
import ListaCard from "../../Components/ListaCard/ListaCard";
import {Link} from 'react-router-dom'
import React from "react";
import CargarMas from "../../Components/CargarMas/CargarMas"

class Favoritos extends Component{

    constructor(props){
        super(props)
        this.state = {
            favoritos: false

        }
    }

    botonFavoritos() {
       

    }

    render(){

        return(
            <React.Fragment>
                
                <h2 class="alert alert-primary">Popular movies this week</h2>

                <CargarMas URL = "https://api.themoviedb.org/3/movie/popular?api_key=68c410ee39188689628bac0d94261464"/>

            </React.Fragment>
        )
    }
}

export default Favoritos;

