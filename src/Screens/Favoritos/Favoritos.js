import { Component } from "react";
import React from "react";
import Card from "../../Components/Card/Card";

let apiKey = '68c410ee39188689628bac0d94261464';

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculasFavoritas: [],
            cargando: true
        };
    }

    componentDidMount() {
        let favoritos = JSON.parse(localStorage.getItem("Favoritos")) || [];
        if (favoritos.length === 0) {
            this.setState({ cargando: false });
        } else {
            favoritos.map(id => {
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
                    .then(res => res.json())
                    .then(data => {
                        this.setState(prevState => ({
                            peliculasFavoritas: [...prevState.peliculasFavoritas, data],
                            cargando: false
                        }));
                    });
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <h2 className="alert alert-primary">Tus películas favoritas</h2>
                {this.state.cargando ? <p>Cargando...</p> : 
                    this.state.peliculasFavoritas.length === 0 ? 
                        <p>No tienes películas favoritas.</p> :
                        <section className="row cards" id="movies">
                            {this.state.peliculasFavoritas.map((peli, idx) => 
                                <Card data={peli} key={idx} tipo="movie" />
                            )}
                        </section>
                }
            </React.Fragment>
        );
    }
}

export default Favoritos;

