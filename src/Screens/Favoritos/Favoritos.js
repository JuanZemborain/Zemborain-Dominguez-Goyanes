import { Component } from "react";
import React from "react";
import Card from "../../Components/Card/Card";

let apiKey = '68c410ee39188689628bac0d94261464';

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculasFavoritas: [],
            seriesFavoritas: [],
            cargando: true
        };
    }

    componentDidMount() {
        let recuperoStorage = localStorage.getItem("Favoritos")
        let favoritos = JSON.parse(recuperoStorage) || [];
        if (favoritos.length === 0) {
            this.setState({ cargando: false });
        } else {
            let peliculas = [];
            let series = [];
            let cargadas = 0;
            favoritos.map(favorito => {
                fetch(`https://api.themoviedb.org/3/${favorito.tipo}/${favorito.id}?api_key=${apiKey}`)
                    .then(res => res.json())
                    .then(data => {
                        if (favorito.tipo === "movie") {
                            peliculas.push(data);
                        } else if (favorito.tipo === "tv") {
                            series.push(data);
                        }                        
                        cargadas = cargadas + 1;
                        if (cargadas === favoritos.length) {
                            this.setState({
                                peliculasFavoritas: peliculas,
                                seriesFavoritas: series,
                                cargando: false
                            });
                        }
                    });
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <h2 className="alert alert-primary">Your favorites movies</h2>
                {this.state.cargando ? <p>Cargando...</p> : 
                    this.state.peliculasFavoritas.length === 0 ? 
                        <p>No tienes películas favoritas.</p> :
                        <section className="row cards" id="movies">
                            {this.state.peliculasFavoritas.map((peli, idx) => 
                                <Card data={peli} key={idx} tipo="movie" />
                            )}
                        </section>
                }

                <h2 className="alert alert-primary">Your favorites series</h2>
                {this.state.cargando ? <p>Cargando...</p> : 
                    this.state.seriesFavoritas.length === 0 ? 
                        <p>No tienes series favoritas.</p> :
                        <section className="row cards" id="series">
                            {this.state.seriesFavoritas.map((serie, idx) => 
                                <Card data={serie} key={idx} tipo="tv" />
                            )}
                        </section>
                }

            </React.Fragment>
        );
    }
}

export default Favoritos;