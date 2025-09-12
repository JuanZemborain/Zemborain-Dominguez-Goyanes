import { Component } from "react";
import Header from "../../Components/Header/Header";
import ListaCard from "../../Components/ListaCard/ListaCard";
import {Link} from 'react-router-dom'
import React from "react";

let apiKey = '68c410ee39188689628bac0d94261464'

class MoviesNow extends Component{
    constructor(props){
        super(props);
        this.state = {
            nowMovies: [],
            loaderNowMovies: true,
        }
    }

    componentDidMount(){

        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            this.setState({nowMovies: data.results, loaderNowMovies: false})
        })

    }

    render(){
        return(
            <React.Fragment>
                
                <h2 class="alert alert-primary">Movies now playing <Link class='btn btn-primary' to='/movies/now_playing'> Ver mas peliculas nuevas </Link>  </h2>
                {this.state.loaderNowMovies ? <p>Cargando...</p> : <ListaCard data={this.state.nowMovies} />}


            </React.Fragment>
        )
    }
}

export default MoviesNow;