import { Component } from "react";
import Header from "../../components/Header/Header";
import ListaCard from "../../components/ListaCard/ListaCard";
import {Link} from 'react-router-dom'
import React from "react";

let apiKey = '68c410ee39188689628bac0d94261464'

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            popularMovies: [],
            nowMovies: [],
            loaderNowMovies: true,
            loaderPopularMovies: true
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

    }

    render(){
        return(
            <React.Fragment>
                <h2 class="alert alert-primary">Popular movies this week <Link class='btn btn-primary' to='/movies/popular'> Ver mas peliculas populares </Link>  </h2>
                {this.state.loaderPopularMovies ? <p>Cargando...</p> : <ListaCard data={this.state.popularMovies.slice(0,5)} />}
                
                <h2 class="alert alert-primary">Movies now playing <Link class='btn btn-primary' to='/movies/now_playing'> Ver mas peliculas nuevas </Link>  </h2>
                {this.state.loaderNowMovies ? <p>Cargando...</p> : <ListaCard data={this.state.nowMovies.slice(0,5)} />}


            </React.Fragment>
        )
    }
}

export default Home;