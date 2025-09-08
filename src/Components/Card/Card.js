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
            <article class="single-card">
                <img src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}`} class="card-img-top" alt="..." />
                <div class="cardBody">
                    <h5 class="card-title">{this.props.data.title}</h5>
                    <button onClick={() => this.setState({descripcion: !(this.state.descripcion)})} className="btn btn-primary">{this.state.descripcion ? 'Ocultar descripcion' : 'Ver descripcion'}</button>
                    {this.state.descripcion ? <p class="card-text">{this.props.data.overview}</p> : '' }
                    <Link to={`/detail/${this.props.data.id}`} class="btn btn-primary">Ver más</Link>
                    <a href="" class="btn alert-primary">🩶</a>
                </div>
            </article>
        )
    }
}

export default Card;