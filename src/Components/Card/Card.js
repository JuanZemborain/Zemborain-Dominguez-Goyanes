import { Component } from "react";
import './Card.css'
import { Link } from "react-router-dom";


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descripcion: false
        }
    }

    componentDidMount() {
        console.log(this.props);
        
    }

    render() {
        return (
            <article className="single-card">
                <img src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}`} className="card-img-top" alt="..." />
                <div className="cardBody">
                    <h5 className="card-title">{this.props.data.title}</h5>
                    <button onClick={() => this.setState({descripcion: !(this.state.descripcion)})} className="btn btn-primary">{this.state.descripcion ? 'Ocultar descripcion' : 'Ver descripcion'}</button>
                    {this.state.descripcion ? <p className="card-text">{this.props.data.overview}</p> : '' }
                    <Link to={`/detalle/movie/${this.props.data.id}`} className="btn btn-primary">Ver más</Link>
                    <a href="" className="btn alert-primary">🩶</a>
                </div>
            </article>
        )
    }
}

export default Card;