import { Component } from "react";
import './Card.css'
import { Link } from "react-router-dom";


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descripcion: false,
            favoritos: false
        }
    }

    componentDidMount() {
        console.log(this.props);
        
    }

    botonFavorito(){
        if (this.state.favoritos === false) {
            this.setState({
                favoritos: true,
                verFavoritos: "Sacar de Favoritos",
                arrayFavoritos: this.state.arrayFavoritos.includes(this.props.id)
            })
        } else {
            this.setState({
                favoritos: false,
                verFavoritos: "Agregar a favoritos"
            })
        }
    }

    agregarFavoritos(id) {
        let recuperoStorage = localStorage.getItem("Favoritos")
        if (recuperoStorage) {
            let favoritosRecuperados = JSON.parse(recuperoStorage)
            favoritosRecuperados.push(id)
            let favoritosString = JSON.stringify(favoritosRecuperados)
            localStorage.setItem("Favoritos", favoritosString)
        }
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
                    <button className="btn alert-primary" onClick={()=> this.agregarFavoritos(this.props.id)}>
                        {this.state.verFavoritos ? "Sacar de Favoritos" : "Agregar a favoritos"}</button>
                </div>
            </article>
        )
    }
}

export default Card;