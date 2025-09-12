import { Component } from "react";
import Header from "../../Components/Header/Header";
import ListaCard from "../../Components/ListaCard/ListaCard";
import {Link} from 'react-router-dom'
import React from "react";

let apiKey = '68c410ee39188689628bac0d94261464'

class MoviesPopular extends Component{
    constructor(props){
        super(props);
        this.state = {
            popularMovies: [],
            loaderPopularMovies: true
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            this.setState({popularMovies: data.results, loaderPopularMovies: false})
        })

    }

    render(){
        return(
            <React.Fragment>

                <h2 class="alert alert-primary">Popular movies this week <Link  to='/movies/popular' class='btn btn-primary'> Ver mas peliculas populares </Link>  </h2>
                {this.state.loaderPopularMovies ? <p>Cargando...</p> : <ListaCard data={this.state.popularMovies} />}

            </React.Fragment>
        )
    }
}

export default MoviesPopular;


