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
            loaderPopularMovies: true,
            masPeliculas: 5,
            search: " ",
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            this.setState({popularMovies: data.results, loaderPopularMovies: false})
        })

    }

    cargarMas = () => {
        this.setState({
            masPeliculas: this.state.masPeliculas + 5 
        });
    }

    evitarSubmit(event){
        event.preventDefault();
    } 

    controlarCambios(event){
        this.setState({search: event.target.value})
    }

    render(){
        
        const texto = this.state.search.toLowerCase();
        const peliculasFiltro = this.state.popularMovies.filter(pelicula => pelicula.overview.toLowerCase().includes(texto))

        const peliculasAMostrar = peliculasFiltro.slice(0, this.state.masPeliculas) 
  

        return(
            <React.Fragment>

                <h2 class="alert alert-primary">Popular movies this week</h2>

                <form onSubmit={(event)=>this.evitarSubmit(event)}>
                    <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.search}/>
                </form>

                <button onClick={this.cargarMas} className="btn btn-primary">Cargar Más</button>

                {this.state.loaderPopularMovies ? <p>Cargando...</p> : <ListaCard data={peliculasAMostrar} />}

            </React.Fragment>
        )
    }
}

export default MoviesPopular;


