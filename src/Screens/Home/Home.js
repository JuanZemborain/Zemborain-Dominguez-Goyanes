import { Component } from "react";
import Header from "../../Components/Header/Header";
import ListaCard from "../../Components/ListaCard/ListaCard";
import {Link} from 'react-router-dom'
import React from "react";

let apiKey = '68c410ee39188689628bac0d94261464'

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            popularMovies: [],
            nowMovies: [],
            seriesTopRating: [],
            seriesAiring: [],
            loaderNowMovies: true,
            loaderPopularMovies: true,
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            this.setState({popularMovies: data.results, loaderPopularMovies: false})
        })

        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            this.setState({nowMovies: data.results, loaderNowMovies: false})
        })

        fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            this.setState({seriesTopRating: data.results, loaderPopularMovies: false})
            
            
        })

        fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            this.setState({seriesAiring: data.results, loaderNowMovies: false})
            
            
        })




    }

    render(){
        return(
            <React.Fragment>
                <h2 class="alert alert-primary">Popular movies this week <Link  to='/movies/popular' class='btn btn-primary'> Ver mas peliculas populares </Link>  </h2>
                {this.state.loaderPopularMovies ? <p>Cargando...</p> : <ListaCard data={this.state.popularMovies.filter(idx < 4)} tipo="movie" />}
                
                <h2 class="alert alert-primary">Movies now playing <Link class='btn btn-primary' to='/movies/now_playing'> Ver mas peliculas nuevas </Link>  </h2>
                {this.state.loaderNowMovies ? <p>Cargando...</p> : <ListaCard data={this.state.nowMovies.filter(idx < 4)} tipo="movie" />}

                <h2 class="alert alert-primary">Series top rated <Link  to='/series/top-rating' class='btn btn-primary'> Ver mas series top rated </Link>  </h2>
                {this.state.loaderPopularMovies ? <p>Cargando...</p> : <ListaCard data={this.state.seriesTopRating.filter(idx < 4)} tipo="tv" />}
                
                <h2 class="alert alert-primary">Series airing today <Link class='btn btn-primary' to='/series/airing-today'> Ver mas series airing today </Link>  </h2>
                {this.state.loaderNowMovies ? <p>Cargando...</p> : <ListaCard data={this.state.seriesAiring.filter(idx < 4)} tipo="tv" />}


                

            </React.Fragment>
        )
    }
}

export default Home;