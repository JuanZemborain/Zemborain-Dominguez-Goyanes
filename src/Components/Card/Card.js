import { Component } from "react";
import './Card.css'
import { Link } from "react-router-dom";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descripcion: false,
            favoritos: false,
            verFavoritos: "Agregar a favoritos",
            id: this.props.data.id
        }
    }

    componentDidMount() {
        let recuperoStorage = localStorage.getItem("Favoritos");
        let favoritosRecuperados = recuperoStorage ? JSON.parse(recuperoStorage) : [];
        const repetidos = favoritosRecuperados.filter(favorito => 
                        favorito.id == this.state.id && favorito.tipo == this.props.tipo)

        if (repetidos.length > 0) {
            this.setState({
                favoritos: true,
                verFavoritos: "Sacar de Favoritos"
            });
        }
    }

    botonFavorito() {
        if (this.state.favoritos === false) {
            this.agregarFavoritos();
            this.setState({
                favoritos: true,
                verFavoritos: "Sacar de Favoritos"
            });
        } else {
            this.sacarFavoritos();
            this.setState({
                favoritos: false,
                verFavoritos: "Agregar a favoritos"
            });
        }
    }


    agregarFavoritos() {
    let recuperoStorage = localStorage.getItem("Favoritos");
    let favoritosRecuperados = recuperoStorage ? JSON.parse(recuperoStorage) : [];
    const nuevoFavorito = {id: this.state.id, tipo: this.props.tipo}
    const repetidos = favoritosRecuperados.filter(favorito => 
                        favorito.id == nuevoFavorito.id && favorito.tipo == nuevoFavorito.tipo)
        
    if (repetidos.length === 0) {
        
        favoritosRecuperados.push(nuevoFavorito);
        localStorage.setItem("Favoritos", JSON.stringify(favoritosRecuperados));
    }
}

    sacarFavoritos() {
        let recuperoStorage = localStorage.getItem("Favoritos");
        let favoritosRecuperados = recuperoStorage ? JSON.parse(recuperoStorage) : [];
        favoritosRecuperados = favoritosRecuperados.filter(favorito => !(favorito.id == this.state.id && favorito.tipo == this.props.tipo));
        localStorage.setItem("Favoritos", JSON.stringify(favoritosRecuperados));
    }

    render() {
        return (
            <article className="single-card">
                <img src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}`} className="card-img-top" alt="..." />
                <div className="cardBody">
                    <h5 className="card-title">{this.props.tipo =="tv" ? this.props.data.name: this.props.data.title}</h5>
                    <button onClick={() => this.setState({descripcion: !(this.state.descripcion)})} className="btn btn-primary">{this.state.descripcion ? 'Ocultar descripcion' : 'Ver descripcion'}</button>
                    {this.state.descripcion ? <p className="card-text">{this.props.data.overview}</p> : '' }
                    <Link to={`/detalle/${this.props.tipo}/${this.props.data.id}`} className="btn btn-primary">Ver más</Link>
                    <a href="" className="btn alert-primary">🩶</a>
                    <button className="btn alert-primary" onClick={() => this.botonFavorito()}>
                        {this.state.verFavoritos}
                    </button>
                </div>
            </article>
        )
    }
}

export default Card;