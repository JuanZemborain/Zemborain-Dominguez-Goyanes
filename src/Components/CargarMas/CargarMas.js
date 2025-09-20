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
            error: null,
            search: "",
            pagina: 1,
        }
    }

    componentDidMount(){
        fetch(`${this.props.URL}&page=${this.state.pagina}`)
        .then(response => response.json())
        .then(data => {
            this.setState({Movies: data.results, loaderMovies: false})
        })
        .catch(error => this.setState({ error, loading: false }));
    }

    cargarMas () {
        
        const proximaPagina = this.state.pagina + 1

        fetch(`${this.props.URL}&page=${proximaPagina}`)
            .then(response => response.json())
            .then(data => {

                let masPeliculas = this.state.Movies.slice();
                masPeliculas = masPeliculas.concat(data.results)

                this.setState({Movies: masPeliculas, 
                                loaderMovies: false,
                                pagina: proximaPagina})
            })
            .catch(error => this.setState({ error, loading: false }));
    }

    evitarSubmit(event){
        event.preventDefault();
    } 

    controlarCambios(event){
        this.setState({search: event.target.value})
    }

    render(){
        
        const texto = this.state.search.toLowerCase();
        const peliculasAMostrar = this.state.Movies.filter(pelicula => 
                            (pelicula.title || pelicula.name || "").toLowerCase().includes(texto))
  

        return(
            <React.Fragment>
                
                <form onSubmit={(event)=>this.evitarSubmit(event)}>
                    <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.search}/>
                </form>

                <button onClick={() => this.cargarMas()} className="btn btn-primary">Cargar Más</button>

                {this.state.loaderMovies ? <p>Cargando...</p> : <ListaCard data={peliculasAMostrar} />}

            </React.Fragment>
        )
    }
}

export default CargarMas;