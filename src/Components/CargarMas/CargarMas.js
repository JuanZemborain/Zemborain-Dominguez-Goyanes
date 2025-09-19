import { Component } from "react";
import Header from "../../Components/Header/Header";
import ListaCard from "../../Components/ListaCard/ListaCard";
import {Link} from 'react-router-dom'
import React from "react";

class CargarMas extends Component{
    constructor(props){
        super(props);
        this.state = {
            Movies: [],
            loaderMovies: true,
            masPeliculas: 5,
            search: " ",
        }
    }

    componentDidMount(){
        fetch(this.props.URL)
        .then(res => res.json())
        .then(data => {
            this.setState({Movies: data.results, loaderMovies: false})
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
        const peliculasFiltro = this.state.Movies.filter(pelicula => pelicula.title.toLowerCase().includes(texto))

        const peliculasAMostrar = peliculasFiltro.slice(0, this.state.masPeliculas) 
  

        return(
            <React.Fragment>
                
                <form onSubmit={(event)=>this.evitarSubmit(event)}>
                    <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.search}/>
                </form>

                <button onClick={this.cargarMas} className="btn btn-primary">Cargar Más</button>

                {this.state.loaderMovies ? <p>Cargando...</p> : <ListaCard data={peliculasAMostrar} />}

            </React.Fragment>
        )
    }
}

export default CargarMas;